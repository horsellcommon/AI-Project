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
        const response = await openai.createCompletion({
            model: "gpt-3.5-turbo",
            prompt: `The answer to life, the universe and everything is `,
            max_tokens: 64,
            temperature: .98,
            top_p: 1.0,
            frequency_penalty: 0.0,
            presence_penalty: 0.0,
            stop: ["\n"]
    });
    return res.status(200).json({
        success: true,
        data: response.data.choices[0].text
    })
    } catch (error) {
        return res.status(400).json({
            success: false,
            error: error.response
            ? error.response.data
            : "Oh dear."
        })
    }
});

// Get that port sorted
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}`));
