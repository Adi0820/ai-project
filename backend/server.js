const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

// ✅ Allow CORS for your frontend hosted on Render
app.use(cors({ origin: "https://ai-project-1-wu3t.onrender.com" }));
app.use(express.json()); // ✅ Enable JSON parsing

const PORT = process.env.PORT || 3000;

// ✅ API Route for Code Review
app.post("/api/review", (req, res) => {
  const { code } = req.body;

  if (!code) {
    return res.status(400).json({ message: "❌ No code provided" });
  }

  // Dummy response for now
  res.json({ message: `✅ Code received successfully! Review logic will be added soon.` });
});

// ✅ Start the server
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});
