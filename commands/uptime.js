const {                                           //Traducción    /     Translation
  Command_uptime_0,
  Command_uptime_1,
  Command_uptime_2,
  Command_uptime_3,
  Command_uptime_4,
  Command_uptime_5,
  Command_uptime_6,
  Command_uptime_7
} = require("../languages/Config_Language.js");   //Traducción    /     Translation

module.exports = {
  name: `${Command_uptime_0}`,
  cooldown: 3,
  //aliases: [`${Command_uptime_1}`],
  description: `${Command_uptime_2}`,
  execute(message) {
    let seconds = Math.floor(message.client.uptime / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);
    let days = Math.floor(hours / 24);

    seconds %= 60;
    minutes %= 60;
    hours %= 24;

    return message
      .reply(`${Command_uptime_3} \`${days} ${Command_uptime_4}, ${hours} ${Command_uptime_5}, ${minutes} ${Command_uptime_6}, ${seconds} ${Command_uptime_7}.\``)
      .catch(console.error);
  }
};
