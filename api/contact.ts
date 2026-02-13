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

    return res.status(200).json({ ok: true });
  } catch (err: any) {
    console.error('Error saving contact submission:', err);
    return res.status(500).json({ error: 'Failed to save submission' });
  }
}
