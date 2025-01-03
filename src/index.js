const qrcode = require("qrcode-terminal");
const { client } = require("./utils/configure-client");
const { delaySendMessage } = require("./utils/delay-send-message");

client.on("qr", (qr) => {
  console.log("Escaneie o QR Code abaixo para autenticar:");
  qrcode.generate(qr, { small: true });
});

client.on("ready", () => {
  console.log("Cliente está pronto!");
});

client.on("authenticated", () => {
  console.log("Cliente autenticado!");
});

client.on("auth_failure", (msg) => {
  console.error("Falha na autenticação:\n", msg);
});

client.on("disconnected", (reason) => {
  console.log("Cliente desconectado:\n", reason);
  // Reconexão automática pode ser configurada aqui, se necessário
});

client.on("message", (message) => {
  const automaticResponses = {
    epic_status: "https://status.epicgames.com/",
    minecraft_status: "https://x.com/mojangstatus?mx=2",
    xclouding: "https://www.xbox.com/pt-BR/play",
    canvas: "https://www.canva.com/pt_br/",
    oi: "tudo bem?",
  };

  if (automaticResponses[message.body]) {
    delaySendMessage(message, `[Bot]: ${automaticResponses[message.body]}`);
  }
});

client.initialize();
