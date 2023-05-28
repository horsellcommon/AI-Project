const express = require("express");
require("dotenv").config();
const { Configuration, OpenAIApi } = require("openai");


// Server kick off
const app = express();
app.use(express.json());

// OpenAI stuff
const configuration = new Configuration({
    apiKey: process.env.SECRET_KEY,
});
const openai = new OpenAIApi(configuration);

// Test reqres
app.post("/test-post", async (req, res) => {
    try {
        return res.status(200).json({
            message: "All sorted.",
        })
    } catch (error) {}
});

// Get that port sorted
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}`));
