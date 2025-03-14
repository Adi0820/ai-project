const express = require('express');
const router = express.Router();
const generateContent = require('../ai_services');

// ✅ Fix API route path
router.post('/review', async (req, res) => {
    try {
        const { code } = req.body;

        if (!code) {
            return res.status(400).json({ error: "No code provided for review!" });
        }

        // ✅ Generate AI review
        const review = await generateContent(code);

        res.json({ review }); // ✅ Send AI-generated review to frontend
    } catch (error) {
        console.error("Error generating review:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});

module.exports = router;
