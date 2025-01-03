const fs = require("fs");
const { Client, LocalAuth } = require("whatsapp-web.js");

// Configuração da persistência de sessão
// const SESSION_FILE_PATH = "session.json";
// let sessionData;
// if (fs.existsSync(SESSION_FILE_PATH)) {
//  sessionData = require(SESSION_FILE_PATH);
// }

const client = new Client({
  authStrategy: new LocalAuth({
    dataPath: "auth_cache",
  }),
  puppeteer: {
    headless: true, // Executar o navegador em modo headless para economizar recursos
    args: ["--no-sandbox", "--disable-setuid-sandbox"], // Opções adicionais para o puppeteer
  },
});

module.exports = { client };