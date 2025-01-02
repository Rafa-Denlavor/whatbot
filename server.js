const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { openai } = require("./openai");

const app = express();

app.use(bodyParser());
app.use(cors());
app.options("*", cors());

app.listen(3000, (req, res) => {
  console.log("Server is running!");
});

app.get("/", () => {
  console.log("Rnning...");
});

app.post("/chat", async (req, res) => {
  // Get the prompt from the request
  const { prompt = "" } = req.body;

  console.log({ prompt });

  const chatResponse = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    prompt: prompt,
  });

  res.status(200).json({
    chatResponse,
  });

  console.log(chatResponse?.choices?.[0]?.message);

  //   for await (const chunk of chatResponse) {
  //     process.stdout.write(chunk.choices[0]?.delta?.content || '');
  //   }
});