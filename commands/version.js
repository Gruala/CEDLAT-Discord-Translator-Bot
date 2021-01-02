const {                                           //Traducción    /     Translation
    Header_Team,
    Header_LINE1,
    Header_LINE2,
    Header_LINE3,
    Header_LINE4,
    Header_LINE5,
    Command_version_0,
    Command_version_1,
    Command_version_2,
    Command_version_3
  } = require("../languages/Config_Language.js");   //Traducción    /     Translation

module.exports = {
    name: `${Command_version_0}`,
    cooldown: 3,
    //aliases: [`${Command_version_1}`],
    description: `${Command_version_2}`,
    async execute(message) {
        const avatarBot = message.author.displayAvatarURL();            //Coloca el icono de quien pregunta
        const avatardefaultBot =  message.author.defaultAvatarUR        //Coloca el icono de quien preguntaL    
        //const avatarBot = client.user.displayAvatarURL ();        //Coloca el icono del Bot
        //const avatardefaultBot =  client.user.defaultAvatarURL    //Coloca el icono del Bot
        
        let version;
        try {
            version = require("../version/config_version.json");
        } catch (error) {
            version = null;
        }
        const VERSIONS = version.VERSIONS.join('\n') + '\n';

        return message.channel.send({embed: {
            color: 0x7188d9,
            author: {
            name: Header_Team,
                icon_url: avatarBot ? avatarBot : avatardefaultBot
            },
            fields: [
            {
            name: Header_LINE1,
            value: Header_LINE2 + "\n\n" + Header_LINE3 + "\n\n" + Header_LINE4 + "\n\n" + Header_LINE5
            },
            {
            name: `${Command_version_3}`,
            value: VERSIONS
            }
            ]
        }})
      
    }
  };








