const {                                           //Traducción    /     Translation
  Command_invite_0,
  Command_invite_1,
  Command_invite_2,
  Command_invite_3
} = require("../languages/Config_Language.js");   //Traducción    /     Translation

module.exports = {
  name: `${Command_invite_0}`,
  //cooldown: 3,
  //aliases: [`${Command_invite_1}`],
  description: `${Command_invite_2}`,
  execute(message) {
    return message.member
      .send(
        //`https://discord.com/oauth2/authorize?client_id=${message.client.user.id}&scope=bot&permissions=70282305`       //¿?
        //`https://discordapp.com/oauth2/authorize?client_id=${message.client.user.id}&scope=bot&permissions=3072`        //Agrega un bot como usuario
        //`https://discordapp.com/oauth2/authorize?client_id=${message.client.user.id}&scope=bot&permissions=2146958591`  //Agrega un bot como Administrador
        `${Command_invite_3}`
      )
      .catch(console.error);
  }
};
