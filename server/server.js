const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const app = express();
const port = 3000;

// Connect to SQLite Database
let db = new sqlite3.Database(path.resolve(__dirname, '../questions.db'), (err) => {
    if (err) {
        console.error('Error connecting to the database:', err.message);
    } else {
        console.log('Connected to the questions database.');
    }
});

// Enable CORS for local development
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// Serve static files (HTML, CSS, JS)
app.use(express.static(path.resolve(__dirname, '../')));

// Route to serve index.html when accessing the root
app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../index.html'));
});

// Get a random question
app.get('/api/question', (req, res) => {
    console.log('Fetching a random question...');
    db.get(`SELECT * FROM questions ORDER BY RANDOM() LIMIT 1`, (err, row) => {
        if (err) {
            console.error('Database error:', err.message);
            res.status(500).json({ error: err.message });
            return;
        }
        res.json(row);
    });
});

// Get the count of questions in the database
app.get('/api/question-count', (req, res) => {
    db.get(`SELECT COUNT(*) AS count FROM questions`, (err, row) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json({ totalQuestions: row.count });
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
