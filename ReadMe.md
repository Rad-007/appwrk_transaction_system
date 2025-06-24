
# 💼 Office Transaction Management System

A full-stack web application to manage and track office cash flow with support for credit and debit entries and automatic running balance calculation.

---

## 🧱 Tech Stack

| Layer     | Technology     |
| --------- | -------------- |
| Frontend  | React          |
| Backend   | Flask (Python) |
| Database  | SQLite         |
| API Comm. | REST + Axios   |

---

## 📸 Features

* Display all transactions with:

  * Date
  * Description
  * Credit / Debit Amount
  * Running Balance (auto-calculated)
* Add new transactions with validation
* Transactions sorted by latest on top
* Simple and intuitive UI with save/cancel buttons

---

## 🗂 Project Structure

```
transaction-system/
├── backend/
│   ├── app.py
│   ├── models.py
│   └── transactions.db (auto-generated)
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── App.js
│   │   ├── api.js
│   │   ├── index.js
│   │   └── components/
│   │       ├── Transactions.js
│   │       └── AddTransaction.js
│   └── package.json
└── README.md
```

---

## 🚀 Getting Started

### 1️⃣ Backend Setup

```bash
cd backend
python3 -m venv venv
source venv/bin/activate  # or venv\\Scripts\\activate on Windows
pip install flask flask_sqlalchemy flask_cors
python app.py
```

* Runs on: `http://localhost:5000`
* Database: `transactions.db` (auto-created)
* Endpoints:

  * `GET /api/transactions`
  * `POST /api/transactions`

---

### 2️⃣ Frontend Setup

```bash
cd frontend
npm install
npm start
```

* Runs on: `http://localhost:3000`
* Two pages:

  * `/` → View all transactions
  * `/add` → Add a new transaction

---

## 📝 Sample Transaction Flow

| Date       | Description                | Credit | Debit | Running Balance |
| ---------- | -------------------------- | ------ | ----- | --------------- |
| 2024-06-01 | Credited to Office Account | 5000   |       | 5000            |
| 2024-06-02 | Snacks Party               |        | 500   | 4500            |
| 2024-06-02 | Printing Sheets            |        | 285   | 4215            |
| 2024-06-03 | Misc Expenses              |        | 3000  | 1215            |

---

## 📦 Production Build

To build the frontend for deployment:

```bash
npm run build
```

You can serve the static frontend using Flask or deploy both separately using any cloud service.

---

## ✅ Future Enhancements

* Edit/Delete transactions
* Filter by date/type
* Export as CSV
* Login/Authentication

---

## 👨‍💻 Author

**PRO1001 Assignment – Office Expense Tracker**
Created using Flask, React, and SQLite.
Need help? Message me anytime!

---

Let me know if you'd like it in downloadable format (PDF/Markdown), or if you'd like deployment instructions (e.g. on Vercel + Render).
