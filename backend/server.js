const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 8000;

app.use(cors());
app.use(bodyParser.json());

let alerts = [];

// GET /alerts
app.get('/alerts', (req, res) => {
    res.json(alerts);
});

// POST /alerts
app.post('/alerts', (req, res) => {
    const { region, message } = req.body;
    if (!region || !message) {
        return res.status(400).json({ success: false, error: "Missing region or message" });
    }
    alerts.push({ region, message });
    res.json({ success: true });
});

app.listen(port, () => {
    console.log(`🚨 Server is running at http://localhost:${port}`);
});