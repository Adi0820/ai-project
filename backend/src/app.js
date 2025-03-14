const express = require('express');
const aiRoutes = require('./routes/ai.routes'); // ✅ Correct route import
const cors = require('cors');

const app = express();

// ✅ Enable CORS for frontend access
app.use(cors({ origin: "https://ai-project-1-wu3t.onrender.com" }));

// ✅ Parse JSON requests
app.use(express.json());

// ✅ Base API route check
app.get('/', (req, res) => {
    res.send('Hello World');
});

// 🔴 Change `/ai` to `/api` to match frontend request
app.use('/api', aiRoutes);

module.exports = app;
