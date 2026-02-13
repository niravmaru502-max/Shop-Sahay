# Contact Form + Google Sheets Setup Guide

This guide walks you through setting up the contact form to save submissions to Google Sheets and send WhatsApp messages.

## Current Status ✅

- ✅ Contact form → WhatsApp (+91 9726704870) - **WORKING**
- ✅ Contact form → Local file backup (`data/contacts.json`) - **WORKING**
- ⏳ Contact form → Google Sheets (needs service account JSON - org policy may block)

---

## What Happens When Someone Submits the Form

1. Form data is sent to `/api/contact` endpoint
2. API attempts to save to Google Sheets (if configured)
3. Fallback: saves to `data/contacts.json` locally
4. User is redirected to WhatsApp with message

---

## Quick Start (No Google Sheets)

If you just want WhatsApp + local backup:

```bash
npm install
npm run dev
```

Or deploy to Vercel as-is. The form will:
- Open WhatsApp with filled message
- Save locally (next deploy resets file, so it's temporary)

---

## Setup with Google Sheets (Optional)

### Prerequisites
- Google Cloud project (new or existing)
- Admin access to enable APIs
- Service account JSON key

### Step 1: Enable Google Sheets API

1. Go to: https://console.cloud.google.com
2. Select your project (e.g., `shop-sahay`)
3. APIs & Services → Library
4. Search "Google Sheets API" → Enable

### Step 2: Create Service Account & Download JSON

1. IAM & Admin → Service Accounts
2. Create Service Account:
   - Name: `shop-sahay-service`
   - Role: Editor
   - Create

3. Open the account → Keys tab
4. Add Key → Create new key → JSON
5. Download the JSON file

**⚠️ Organization Policy Issue?**
If you see: "An organisation policy that blocks service accounts key creation..."
- **Option A**: Ask your org admin to disable `iam.disableServiceAccountKeyCreation` policy
- **Option B**: Create a personal GCP project (not under the organization)

### Step 3: Create & Share Spreadsheet

1. Create a new Google Sheet: https://sheets.google.com
2. Add header row:
   ```
   ReceivedAt | Name | Email | Phone | Location | Message | Plan
   ```
3. Share the sheet:
   - Click Share
   - Paste the service account email from JSON (looks like: `xxx@yyy.iam.gserviceaccount.com`)
   - Give Editor access
   - Save

4. Get spreadsheet ID from URL:
   ```
   https://docs.google.com/spreadsheets/d/[SPREADSHEET_ID]/edit
   ```

### Step 4: Set Environment Variables

#### Option A: Local Development (`.env.local`)

1. Save the JSON file as `service-account.json` in repo root
2. In PowerShell (repo root), encode it:
   ```powershell
   .\scripts\encode_service_account.ps1 .\service-account.json
   ```
   Copy the printed base64 string

3. Create `.env.local`:
   ```
   GOOGLE_SHEETS_ID=your_spreadsheet_id_here
   GOOGLE_SERVICE_ACCOUNT_B64=base64_encoded_json_here
   ```

4. Install dependency:
   ```bash
   npm install
   ```

5. Run locally:
   ```bash
   npx vercel dev
   ```

6. Test:
   ```bash
   curl -X POST http://localhost:3000/api/contact \
     -H "Content-Type: application/json" \
     -d '{"name":"Test","phone":"9000000000","email":"test@example.com","location":"Surat","message":"hello","plan":"Basic"}'
   ```
   
   Expected response: `{ ok: true, saved: "sheets" }`

#### Option B: Vercel Deployment

1. In Vercel dashboard → Project Settings → Environment Variables
2. Add:
   - `GOOGLE_SHEETS_ID` = your spreadsheet ID
   - `GOOGLE_SERVICE_ACCOUNT_B64` = base64 encoded JSON (from step 4.2 above)
   - OR `GOOGLE_SERVICE_ACCOUNT` = raw JSON string (less safe if viewing in plaintext)

3. Redeploy

---

## Troubleshooting

### "Method not allowed"
- Make sure you're POST-ing, not GET-ing

### "Missing required fields"
- Ensure `name` and `phone` are provided in JSON

### "Failed to save submission"
- Check env vars are set correctly
- Verify service account has Editor access on sheet
- Check that sheet has a tab named `Sheet1`

### "Saved to file" instead of "sheets"
- Google Sheets not configured (env vars missing or invalid)
- Falls back to local JSON (still works, but not persistent on serverless)

---

## File Guide

- `api/contact.ts` - API endpoint (POST handler)
- `.env.local.example` - Example env vars
- `scripts/encode_service_account.ps1` - Encodes JSON to base64
- `data/contacts.json` - Local fallback (auto-created)

---

## For Production (Vercel)

1. Set `GOOGLE_SHEETS_ID` and `GOOGLE_SERVICE_ACCOUNT_B64` env vars in Vercel dashboard
2. Deploy
3. Form submissions go to Google Sheets + WhatsApp

---

## Future Enhancements

- **Email notifications** (add Resend/SendGrid API key to send email on each submission)
- **SMS backup** (send form data to another WhatsApp number)
- **Supabase integration** (persistent PostgreSQL database instead of JSON file)

---

## Questions?

- **Env var issues?** Check `.env.local` syntax (no spaces around `=`)
- **Google Sheets not receiving?** Verify service account email is added with Editor role
- **WhatsApp not opening?** Check if `+91 9726704870` is correct

Good luck! 🚀
