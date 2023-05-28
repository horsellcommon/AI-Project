const express = require("express");
require("dotenv").config();
const { Configuration, OpenAIApi } = require("openai");

const app = express();
app.use(express.json());
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}`));
