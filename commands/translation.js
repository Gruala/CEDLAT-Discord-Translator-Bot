const {                                           //Traducción    /     Translation
    Header_Team,
    Header_LINE1,
    Header_LINE2,
    Header_LINE3,
    Header_LINE4,
    Header_LINE5,
    Command_translation_0,
    Command_translation_1,
    Command_translation_2,
    Command_translation_3,
    Command_translation_4,
    Command_translation_5,
    Command_languages_0
  } = require("../languages/Config_Language.js");   //Traducción    /     Translation
  
  module.exports = {
    name: `${Command_translation_0}`,
    //cooldown: 3,
    //aliases: [`${Command_translation_1}`],
    description: `${Command_translation_2}`,
    async execute(message, args, client) {
        const avatarBot = message.author.displayAvatarURL();            //Coloca el icono de quien pregunta
        const avatardefaultBot =  message.author.defaultAvatarUR        //Coloca el icono de quien preguntaL    
        //const avatarBot = client.user.displayAvatarURL ();        //Coloca el icono del Bot
        //const avatardefaultBot =  client.user.defaultAvatarURL    //Coloca el icono del Bot
        
        const {PREFIX} = require("../config_connection/Config_Connection.js");
        var Command_list_languages
        if (client.prefix.length > 1) {
            Command_list_languages = PREFIX + ` ` + `${Command_languages_0}`;
        } else {
            Command_list_languages = PREFIX + `${Command_languages_0}`;
        }

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
                name: `${Command_translation_3}`,
                value: PREFIX + " sp .......... hi all ....................... Hola a todos\n" + PREFIX + " sp .......... Bonjour à tous ..... Buenos días a todos\n" + PREFIX + " en .......... hola ........................ Hello\n" + PREFIX + " en .......... Bonjour à tous .... Hello everyone\n" + PREFIX + " fr ............ hola a todos ........ Bonjour à tous\n" + PREFIX + " fr ............ hi all ...................... Salut à tous\n" + PREFIX + " de .......... hi ............................ Hallo\n" + PREFIX + " sp,fr ...... hi all ....................... Hola a todos\n ...................................................... Bonjour à tous\n" + PREFIX + " en,fr ...... Hola a todos ........ hi all\n ...................................................... Bonjour à tous\n" + PREFIX + " en,sp .... Bonjour à tous ..... hi all\n ...................................................... Hola a todos\n" + PREFIX + " sp,fr,pt .. hi all ....................... Hola a todos\n ...................................................... Bonjour à tous\n ...................................................... Olá a todos"
            },
            {
                name: `${Command_translation_4}`,
                value: PREFIX + " en = " + PREFIX + " english\n" + PREFIX + " fr = " + PREFIX + " french\n" + PREFIX + " de = " + PREFIX + " german\n" + PREFIX + " hi = " + PREFIX + " hindi\n" + PREFIX + " ja = " + PREFIX + " jp = " + PREFIX + " japanese = " + PREFIX + " 日本語\n" + PREFIX + " pt = " + PREFIX + " portuguese\n" + PREFIX + " ro = " + PREFIX + " romanian\n" + PREFIX + " ru = " + PREFIX + " russian\n" + PREFIX + " sp = " + PREFIX + " es = " + PREFIX + " spanish\n" + PREFIX + " zh-cn = " + PREFIX + " chinese-simplified\n" + PREFIX + " zh-tw = " + PREFIX + " chinese-traditional\n"
            },
            {
                name: `${Command_translation_5}`,
                value: Command_list_languages
            }
            ]
        }})
      
    }
  };








