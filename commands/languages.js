const {                                           //Traducción    /     Translation
    Command_languages_0,
    Command_languages_1,
    Command_languages_2,
    Command_languages_3
  } = require("../languages/Config_Language.js");   //Traducción    /     Translation
  
  module.exports = {
    name: `${Command_languages_0}`,
    cooldown: 3,
    //aliases: [`${Command_languages_1}`],
    description: `${Command_languages_2}`,
    async execute(message) {
        const avatarBot = message.author.displayAvatarURL();            //Coloca el icono de quien pregunta
        const avatardefaultBot =  message.author.defaultAvatarUR        //Coloca el icono de quien preguntaL    
        //const avatarBot = client.user.displayAvatarURL ();        //Coloca el icono del Bot
        //const avatardefaultBot =  client.user.defaultAvatarURL    //Coloca el icono del Bot
        const {PREFIX} = require("../config_connection/Config_Connection.js");

        return message.channel.send({embed: {
            color: 0x7188d9,
            author: {
            name: `${Command_languages_3}`,
                icon_url: avatarBot ? avatarBot : avatardefaultBot
            },
            fields: [
            {
                name: "A - H",
                value: "af , afrikaans / ar , arabic\nbe, belarusian / bg, bulgarian / bn, bengali / bs, bosnian\nca, catalan / ceb, cebuano / co, corsican / cy, welsh / cz, czech\nda, danish / de, german\nel, greek / en, english / eo, esperanto / et, estonian / eu, basque\nfa, persian / fi, finnish / fr, french / fy, frisian\nga, irish / gd, scots-gaelic / gl, galician / gu, gujarati\nha, hausa / haw, hawaiian / hi, hindi / hmn, hmong / hr, croatian / ht, haitian / hu, hungarian / hy, armenian\n"
            },
            {
                name: "I - N",
                value: "id, indonesian / ig, igbo / is, icelandic / it, italian / iw, hebrew\nja, jp, japanese, 日本語 / jw, javanese\nka, georgian / kk, kazakh / km, khmer / kn, kannada / ko , korean / ku, kurdish / ky, kyrgyz\nla, latin / lb, luxembourgish / lo, lao / lt, lithuanian / lv, latvian\nma, punjabi / mg, malagasy / mi, maori / mk, macedonian / ml, malayalam / mn, mongolian / mr, marathi / ms, malay / mt, maltese / my, myanmar\nne, nepali / nl, dutch / no, norwegian / ny, chichewa\n"
            },
            {
                name: "P - Y",
                value: "pl, polish / ps, pashto / pt, portuguese\nro, romanian / ru, russian\nsd, sindhi / si, sinhala / sk, slovak / sl, slovenian / sm, samoan / sn, shona / so, somali / sp, es, spanish / sq , albanian / sr, serbian / st, sesotho / su, sudanese / sv, swedish / sw, swahili\nta, tamil / te, telugu / tg, tajik / th, thai / tl, filipino / tr, turkish\nuk, ukrainian / ur, urdu / uz, uzbek\nvi, vietnamese\nxh, xhosa\nyi, yiddish / yo, yoruba\n"
            },
            {
                name: "Z",
                value: "zh-cn, chinese-simplified / zh-tw, chinese-traditional\nzu, zulu\n"
            }
            ]
        }})
      
    }
  };








