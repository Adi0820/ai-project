const generateContent = require("../services/ai_services.js"); // ✅ Correct import

module.exports.getReview = async (req, res) => {
    try {
        const { code } = req.body; // ✅ Use object destructuring

        if (!code) {
            return res.status(400).json({ error: "Code is required for review" });
        }

        const response = await generateContent(code); // ✅ Call the function properly

        res.json({ review: response }); // ✅ Send JSON response
    } catch (error) {
        console.error("Error in getReview:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};
