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
  console.log(message.body);

  if (message.body === "!ping") {
    delaySendMessage(message, "pong");
  }

  if (message.body === "OI") {
    delaySendMessage(message, "Te amo");
  }
});

client.initialize();