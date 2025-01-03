const qrcode = require("qrcode-terminal");
const fs = require("fs");
const { client } = require("./utils/configure-client");
const { delaySendMessage } = require("./utils/delay-send-message");

client.on("qr", (qr) => {
  qrcode.generate(qr, { small: true });
});

client.on("ready", () => {
  console.log("Cliente está pronto!");

  client.on("authenticated", () => {
    client
      .exportSession()
      .then((json) =>
        fs.writeFileSync(SESSION_FILE_PATH, JSON.stringify(json))
      );
  });
});

client.on("", () => {});

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
