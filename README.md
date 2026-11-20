# Procure Pharmacy — iPhone PWA

A local-first personal pharmacy ledger designed for iPhone Safari. It stores records in IndexedDB on the device. GitHub Pages can host the static app; no server is required.

## Publish with GitHub Pages
1. Create a private GitHub repository named `procure-pharmacy`.
2. Upload all files in this folder to the repository root.
3. Open **Settings → Pages**.
4. Under Build and deployment, choose **Deploy from a branch**, branch `main`, folder `/ (root)`, then Save.
5. Wait for GitHub Pages to provide the site URL.

## Install on iPhone
1. Open the published URL in Safari.
2. Tap Share → Add to Home Screen → Add.
3. Launch Procure from the Home Screen.

## Data & backup
- Records are stored locally in this browser on this iPhone.
- Use More → Export app data regularly and save the JSON backup in Files/iCloud Drive.
- Clearing Safari website data or deleting the app's website data may erase local records.
- This starter does not sync across devices. Keep backups.

## Importing the existing workbook
More → Import pro_fin.xlsx archives the workbook's sheets for reference. It does not automatically convert every legacy row/formula into live transactions yet. Check and reconcile the imported workbook before relying on the app for official accounts.

## Financial calculation notes
- Daily "Cash / non-credit sale" must exclude credit sales.
- Credit ledger transactions use `Credit` and `Received`.
- Distributor transactions use `Bill` and `Payment`.
- Cash balance currently uses opening cash + cash sale + credit recovery − supplier payments − expenses.
- This is a personal bookkeeping aid, not a pharmacy billing, tax, or statutory accounting system.

## Security
Do not commit the Excel workbook or customer records to GitHub. Keep the repository private if desired, but never use GitHub as the database for private financial data.
