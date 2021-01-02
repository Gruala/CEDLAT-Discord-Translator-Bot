const {                                           //Traducción    /     Translation
  Command_ping_0,
  Command_ping_1,
  Command_ping_2,
  Command_ping_3
} = require("../languages/Config_Language.js");   //Traducción    /     Translation

module.exports = {
  name: `${Command_ping_0}`,
  cooldown: 10,
  //aliases: [`${Command_ping_1}`],
  description: `${Command_ping_2}`,
  execute(message) {
    message.reply(`📈 ${Command_ping_3} ${Math.round(message.client.ws.ping)} ms`).catch(console.error);
  }
};
