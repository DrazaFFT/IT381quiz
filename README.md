# IT381 Quiz App – Zastita i bezbednost informacija

This is a simple browser-based quiz app built with Node.js, SQLite, and vanilla JavaScript. It displays multiple-choice questions randomly from a local SQLite database.

🌐 Live on your local machine — no deployment needed.

GitHub repo: [https://github.com/DrazaFFT/IT381quiz](https://github.com/DrazaFFT/IT381quiz)

---

## 🧠 Features

- Random question loading
- Tracks correct and incorrect answers
- Displays real-time score
- Clean and responsive interface
- Easily extendable for future features

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/DrazaFFT/IT381quiz.git
cd IT381quiz
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the server

```bash
node server/server.js
```

Then open your browser and go to:

```
http://localhost:3000
```

---

## 📃 Database

This app uses a SQLite database file called `questions.db` located in the root folder.

Make sure your database contains a table named `questions` with the following structure:

```sql
CREATE TABLE questions (
    id INTEGER PRIMARY KEY,
    question TEXT NOT NULL,
    option1 TEXT,
    option2 TEXT,
    option3 TEXT,
    option4 TEXT,
    option5 TEXT,
    correct_option INTEGER NOT NULL
);
```

You can modify or extend this table as needed.

---

## ✅ To Do (Ideas for Improvement)

- Prevent repeated questions during a session
- Show explanation after answering
- Add question categories or topics
- Implement a timer or countdown
- Track high scores or player sessions
- Deploy online with a free tier host (like Render or Railway)

---

## 📦 Tech Stack

- Node.js + Express
- SQLite
- HTML/CSS/JavaScript (Vanilla)

---

## 🧑‍🏫 License

This project is open for educational and personal use.  
Attribution is appreciated — fork, share, or contribute!

---

Made with ❤️ by [DrazaFFT](https://github.com/DrazaFFT)
