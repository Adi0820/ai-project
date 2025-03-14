require('dotenv').config()
const app = require('./src/app')

const cors = require("cors");
app.use(cors({ origin: "https://ai-project-1-wu3t.onrender.com" }));


app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000')
})
