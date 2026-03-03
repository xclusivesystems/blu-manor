# Blu Manor Website — Setup & Handoff Guide

Everything you need to get blumanor.org live with the intake form connected to Google Sheets.

**Total cost: ~$94/year**
- Domain: ~$10/yr (Cloudflare — already purchased and active)
- Email + Sheets: $84/yr (Google Workspace)
- Hosting: Free (Cloudflare Pages — already deployed)

---

## What's Already Done

Your website is **already live** at [https://blumanor.org](https://blumanor.org):

- Domain purchased on Cloudflare (blumanor.org + www.blumanor.org)
- Website deployed to Cloudflare Pages with SSL/HTTPS enabled
- All pages built and functional: Home, About, Housing, Program, Partners, Resources, Contact, Apply

**What still needs to be set up:**
1. Google Workspace (for info@blumanor.org email)
2. Google Sheets + Apps Script (to receive intake applications)
3. Paste the Apps Script URL into the website code and redeploy

---

## Step 1: Set Up Google Workspace (~10 minutes)

This gives you the **info@blumanor.org** email address AND Google Sheets for the intake forms — all under one Google login.

1. Go to **https://workspace.google.com**
2. Click "Get Started" → choose the **Business Starter** plan ($7/month)
3. Enter your business name: **Blu Manor — Second Chance Transitional Housing**
4. Enter your domain: **blumanor.org**
5. It will ask you to verify you own the domain:
   - Choose "Add a DNS record" method
   - Log into **Cloudflare** (https://dash.cloudflare.com) → select **blumanor.org** → **DNS** tab
   - Add the TXT record Google gives you
   - Wait a few minutes for verification
6. Set up your first user: **info@blumanor.org**
7. Choose a password
8. Once verified, you can now access Gmail at **https://mail.google.com** with `info@blumanor.org`

**Add MX Records for Email:** While in Cloudflare DNS, add these MX records so email works:

| Type | Name | Mail Server | Priority |
|------|------|-------------|----------|
| MX | @ | aspmx.l.google.com | 1 |
| MX | @ | alt1.aspmx.l.google.com | 5 |
| MX | @ | alt2.aspmx.l.google.com | 5 |
| MX | @ | alt3.aspmx.l.google.com | 10 |
| MX | @ | alt4.aspmx.l.google.com | 10 |

*This one Google login handles your email AND your intake spreadsheet.*

---

## Step 2: Set Up the Intake Spreadsheet (~10 minutes)

This connects the website's "Apply Now" form to a Google Sheet so you see every application.

1. Log into Google with **info@blumanor.org**
2. Go to **https://sheets.google.com** → create a new spreadsheet
3. Name it: **Blu Manor — Intake Submissions**
4. In the first tab (Sheet1), rename it to **Applications**
5. In Row 1, type these column headers (one per cell, A through R):

```
Timestamp | Full Name | DOB | Phone | Email | Current Address | Supervision Status | Referring Agency | Officer Contact | Employer | Position | Monthly Income | Work Schedule | Move-In Date | Emergency Contact | Ack Rules | Signature | Signature Date
```

6. Now go to **Extensions → Apps Script** (top menu)
7. Delete any code already there
8. Open the file called **google-apps-script.js** (included in your website files)
9. Copy ALL of its contents and paste it into the Apps Script editor
10. Click **Deploy → New Deployment**
11. Click the gear icon → select **Web app**
12. Set "Execute as": **Me**
13. Set "Who has access": **Anyone**
14. Click **Deploy**
15. It will ask for permission — click **Authorize** and allow access
16. **Copy the Web App URL** it gives you (looks like `https://script.google.com/macros/s/ABC.../exec`)

---

## Step 3: Connect the Website to Google Sheets (~2 minutes)

You need to paste that Web App URL into one file, then redeploy:

1. Open the website folder on your computer
2. Open **js/apply.js** in any text editor (Notepad, TextEdit, etc.)
3. Find this line near the top (line 13):
   ```
   var SCRIPT_URL = 'YOUR_GOOGLE_APPS_SCRIPT_URL';
   ```
4. Replace `YOUR_GOOGLE_APPS_SCRIPT_URL` with the URL you copied in Step 2
5. Save the file

Example:
```
var SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbx.../exec';
```

6. **Send the updated folder to your web developer** (Xclusive Systems) to redeploy, or follow Step 4 below to do it yourself.

---

## Step 4: Redeploy the Website (if updating yourself)

Your site is hosted on **Cloudflare Pages**. To push updates:

**Option A — Have Xclusive Systems do it (recommended)**
Send the updated files to your developer and they'll redeploy for you.

**Option B — Do it yourself via Cloudflare Dashboard**
1. Go to **https://dash.cloudflare.com**
2. Log in → click **Workers & Pages** in the left sidebar
3. Click on **blu-manor**
4. Go to the **Deployments** tab
5. Click **Upload assets** → drag and drop the entire website folder
6. The site updates within seconds

---

## Step 5: Test Everything (~5 minutes)

1. Go to **https://blumanor.org** — confirm the site loads
2. Go to **https://blumanor.org/apply.html** — fill out a test application and submit
3. Open your **Google Sheets** spreadsheet — confirm the test submission appeared
4. Send a test email to **info@blumanor.org** — confirm it arrives in Gmail
5. Delete the test submission row from the spreadsheet

---

## What's Where — Quick Reference

| Service | What it does | Login |
|---------|-------------|-------|
| **Cloudflare** (dash.cloudflare.com) | Domain (blumanor.org) + Website hosting | Managed by Xclusive Systems |
| **Google Workspace** (mail.google.com) | Email (info@blumanor.org) + Sheets intake | info@blumanor.org |
| **Google Sheets** (sheets.google.com) | Where applications land | info@blumanor.org |

---

## Yearly Cost Breakdown

| Service | Cost |
|---------|------|
| Cloudflare domain (blumanor.org) | ~$10/year |
| Cloudflare Pages hosting | Free |
| Google Workspace (Business Starter) | $7/month ($84/year) |
| **Total** | **~$94/year** |

---

## Need Help?

If something isn't working:
- **Website not loading**: Contact Xclusive Systems — hosting is managed on Cloudflare
- **Form not submitting**: Make sure the Apps Script URL is correct in js/apply.js
- **Email not working**: Check Google Workspace admin at admin.google.com
- **Need site updates**: Contact Xclusive Systems to redeploy

**Your Developer:**
Xclusive Systems — manages domain, hosting, and website updates on Cloudflare.

---

*This site was built by Xclusive Systems. All source files are included in the handoff package.*
