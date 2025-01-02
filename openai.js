const OpenAI = require("openai");

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_TOKEN,
  // organization: process.env.OPENAI_ORGANIZATION,
  // project: process.env.OPENAI_PROJECT,
});

module.exports = { openai };