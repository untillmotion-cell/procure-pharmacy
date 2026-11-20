# Procure Pharmacy V2
Mobile-first, local-first PWA for personal use.

## Deploy/update with GitHub Pages
1. Open your existing `procure-pharmacy` GitHub repository.
2. Replace the old `index.html`, `styles.css`, `app.js`, `manifest.json`, `sw.js`, and `icon.svg` with these V2 files (upload each and commit).
3. GitHub Pages should redeploy automatically.
4. Open the existing Pages URL in Safari. If an old version remains, close the installed app, open the URL in Safari, refresh, and wait briefly for the service worker update.

## iPhone
Safari → Share → Add to Home Screen.

## Storage and safety
All records are stored in IndexedDB on the current iPhone/browser. This does not sync between devices. Export JSON backups frequently and store them in iCloud Drive/Files. Do not upload private transaction/customer data to the GitHub repository.

## V2 features
- Daily cash and credit sales entered separately; total sales calculated.
- Customer credit / payment ledger and customer history.
- Distributor bill / payment ledger and distributor history.
- Expense categories and history.
- Medicine-related expense records.
- Today and month-to-date dashboard.
- Custom-period summary.
- JSON backup and restore; Excel export.

## Accounting caveats
Cash balance is a running estimate based on daily opening cash + cash sales + customer receipts − distributor payments − expenses. Enter opening cash carefully and consistently. This starter is not a full inventory, tax, statutory accounting, or audited profit/loss system. Purchase bills do not by themselves establish cost of goods sold or gross profit.


## Custom Procure Pharmacy logo
The supplied logo is used in the app header, the iPhone Home Screen icon, and the PWA manifest icons. Upload all files, including the PNG and JPG logo assets, to the repository root.
