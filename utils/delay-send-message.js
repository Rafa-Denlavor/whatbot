const MIN_DELAY__TIME = 2000;
const MAX_DELAY_TIME = 5000;

// Função para enviar mensagens com delay aleatório
const delaySendMessage = (watcher, text) => {
  const randomDelay =
    Math.floor(Math.random() * (MAX_DELAY_TIME - MIN_DELAY__TIME + 1)) +
    MIN_DELAY__TIME;

  setTimeout(() => {
    watcher.reply(text);
  }, randomDelay);
};

module.exports = { delaySendMessage };