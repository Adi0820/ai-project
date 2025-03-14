require('dotenv').config(); // Load .env variables

const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors({ origin: "https://ai-project-1-wu3t.onrender.com" }));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
