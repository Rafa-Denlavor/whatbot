import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const prompt = "Qual o seu nome?";

await model.generateContent(prompt).then((result) => {
  console.log(result.response.text());
}).catch((err) => {
    throw new Error(`Erro no servidor!\n ${err}`)
});
