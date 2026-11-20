# Procure Pharmacy — Final V3

A mobile-first personal pharmacy bookkeeping PWA for iPhone Safari. It uses IndexedDB on the device and can be hosted as a static GitHub Pages site.

## Update your existing GitHub repository
1. Download and extract this ZIP.
2. In your existing `procure-pharmacy` repository, replace `index.html`, `styles.css`, `app.js`, `manifest.json`, `sw.js` and upload all logo assets (`procure-logo-original.jpg`, `apple-touch-icon.png`, `icon-192.png`, `icon-512.png`).
3. Commit the changes. GitHub Pages redeploys automatically.
4. Open your existing Pages URL in Safari. Refresh. If installed as a Home Screen app, close it fully and reopen after deployment; if the icon remains old, remove it from Home Screen and add it again.

## Important data compatibility
This version upgrades the existing IndexedDB database `procure-pharmacy-v2` from database version 1 to 2, preserving the V2 tables and adding inventory tables. Existing V2 records should remain. V1's separate database name `procure-pharmacy-v1` is not imported automatically.

## Features
- Daily cash and credit sale summary.
- Customer credit and received-payment ledger, balances and transaction history.
- Distributor bills and payments, balances and history.
- Expense and medicine-expense tracking.
- Medicine inventory with batch, expiry, purchase price, selling price, quantity and low-stock threshold.
- Stock in, stock out, and set-actual-quantity movements.
- Low-stock, expiring-within-90-days and expired-item alerts.
- Current stock value at purchase cost.
- Period and monthly summaries.
- JSON backup and restore; CSV exports that open in Excel.
- Uses the supplied Procure Pharmacy logo in the header and iPhone app icon.

## Stock and accounting rules
- Inventory movement is separate from daily sales totals. Enter daily sales in Daily Sales & Cash; use stock movements to update physical stock. This avoids automatically counting the same sale twice.
- Stock value is estimated as current quantity × purchase price.
- The cash balance is an estimate from the most recent daily opening-cash baseline plus recorded cash sales and customer receipts minus supplier payments and expenses. Reconcile against physical cash.
- Purchase bills are not the same as cost of goods sold; this app does not calculate audited gross/net profit.
- Expiry alerts are based on the date entered for each product record. Use separate product records for different batches/expiry dates.

## Backups and privacy
All financial and customer records are stored locally in IndexedDB on this iPhone/browser. They are not synced to other devices. Export JSON backups regularly and save them in iCloud Drive/Files. Clearing Safari website data, removing browser data, or changing devices can make local records unavailable. Never commit customer or transaction data to GitHub.

## Quality note
The code is written to be self-contained and avoids external runtime libraries. It has been syntax-checked, but no developer can honestly guarantee zero bugs across every iOS/Safari version or device. Test with sample entries first and keep backups before using it for real accounts. This is a personal-use bookkeeping tool, not regulated pharmacy billing, prescription validation, tax, or statutory accounting software.
