import fs from 'fs/promises';
import path from 'path';

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  let body: any = req.body;
  if (!body) {
    // try to parse raw body (fallback)
    try {
      const chunks: Uint8Array[] = [];
      for await (const chunk of req) chunks.push(chunk);
      const raw = Buffer.concat(chunks).toString('utf8');
      body = raw ? JSON.parse(raw) : {};
    } catch (e) {
      body = {};
    }
  }

  const { name, email, phone, location, message, plan } = body;
  if (!name || !phone) {
    return res.status(400).json({ error: 'Missing required fields: name or phone' });
  }

  const payload = {
    name: String(name),
    email: email ? String(email) : null,
    phone: String(phone),
    location: location ? String(location) : null,
    message: message ? String(message) : null,
    plan: plan || null,
    receivedAt: new Date().toISOString()
  };
  // Try to append to Google Sheets if configured, otherwise save locally
  const sheetId = process.env.GOOGLE_SHEETS_ID;
  const serviceAccount = process.env.GOOGLE_SERVICE_ACCOUNT; // JSON string

  if (sheetId && serviceAccount) {
    try {
      const svc = JSON.parse(serviceAccount);
      let google;
      try {
        // dynamic require so local environments without googleapis won't crash until used
        // eslint-disable-next-line @typescript-eslint/no-var-requires
        google = require('googleapis').google;
      } catch (e) {
        google = null;
      }

      if (google) {
        const authClient = new google.auth.JWT(
          svc.client_email,
          undefined,
          svc.private_key,
          ['https://www.googleapis.com/auth/spreadsheets']
        );
        await authClient.authorize();
        const sheets = google.sheets({ version: 'v4', auth: authClient });

        const values = [[
          payload.receivedAt,
          payload.name,
          payload.email || '',
          payload.phone,
          payload.location || '',
          payload.message || '',
          payload.plan || ''
        ]];

        await sheets.spreadsheets.values.append({
          spreadsheetId: sheetId,
          range: 'Sheet1!A:G',
          valueInputOption: 'RAW',
          requestBody: { values }
        });

        return res.status(200).json({ ok: true, saved: 'sheets' });
      }
    } catch (err: any) {
      console.error('Google Sheets append failed:', err);
      // fall through to local save
    }
  }

  try {
    const dataDir = path.join(process.cwd(), 'data');
    const file = path.join(dataDir, 'contacts.json');
    await fs.mkdir(dataDir, { recursive: true });

    let arr: any[] = [];
    try {
      const txt = await fs.readFile(file, 'utf8');
      arr = JSON.parse(txt || '[]');
    } catch (e) {
      arr = [];
    }

    arr.push(payload);
    await fs.writeFile(file, JSON.stringify(arr, null, 2), 'utf8');

    return res.status(200).json({ ok: true, saved: 'file' });
  } catch (err: any) {
    console.error('Error saving contact submission:', err);
    return res.status(500).json({ error: 'Failed to save submission' });
  }
}
