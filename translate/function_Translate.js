const {TOKEN, OWNER, PLAYSTATUS, PREFIX} = require("../config_connection/Config_Connection.js");
var {TRANSLATOR_Enabled, TSCHANNELS_Enabled, SEPARATE_LANGUAGE, MAX_TRANSLATE, MAX_TEXT_ICON} = require("./config_translate.json");
const lang = require("./config_langs.json");
const langs = require("./config_langmap.json");
const {                                           //Traducción    /     Translation
  Header_Team,
  translate_Nothing,
  translate_Analyze,
  translate_Detected,
  translate_Report,
  translate_Long,
  translate_characters
} = require("../languages/Config_Language.js");   //Traducción    /     Translation

const translate = require("google-translate-api")

var paint_flag = false;    


/*
************************************************************************************
Translation functions     /     Funciones de traducción
************************************************************************************
*/

async function translate_inition(message, args, client, commandName, GENERAL_ENABLED){
    if(GENERAL_ENABLED.trans_ts_enabled) tsChannels(message, client)     //Turn on multi-channel translation   /   Activa traducción en varios canales
    if(message.content.toLowerCase().indexOf(PREFIX) !== 0) return;

    idiomas=[];
    if(message.content.toLowerCase().indexOf(PREFIX + " ") == 0) {
      let LangMap = new Map()
      let thingToTranslate = args;
      
      const commandlist = commandName.split(SEPARATE_LANGUAGE).join(" ");
      idiomas = commandlist.slice("").trim().split(" ");
      
      var retorno = '';
      for (i=0; i < idiomas.length ; i++) {
        if (idiomas[i] === "lang") return languageDetection(message, thingToTranslate)
        for (let l in langs) {
          for (let a in langs[l].alias) {
            LangMap.set(langs[l].alias[a], (args) => {
              return translateFunction(message,l, args.join(" "), `:flag_${langs[l].flag}:`)
            })
          }
        }
        let toT = LangMap.get(idiomas[i])
        if (toT) {
          retorno += toT(thingToTranslate)
        }  
      }
      if(retorno != '') return retorno;
    }
}

async function translateFunction(message,lang, string, flag){
    if(string == "" || string == null || string == undefined) return message.channel.send(`${translate_Nothing}`);
    if(string.length > MAX_TRANSLATE) return too_long(message)
    translate(string, { to: lang }).then((res)=>{
      nombre = message.member.nick;
      avatar = message.author.displayAvatarURL();
      avatardefault =  message.author.defaultAvatarURL
      if (message.member.nick == null ) { nombre = message.author.username;} 
      if (res.text.length > MAX_TEXT_ICON) {
        return message.channel.send('**' + nombre +`**\n ${flag} ${res.text}`);
      }
      message.channel.send({ embed: {
        color: 0xFFFFFF, 
        author: {name:nombre, icon_url: avatar ? avatar : avatardefault}, 
        description: `${flag} ${res.text}`
      }});
    }).catch(err => { console.error(err) });
}

async function languageDetection(message, string) {
    if(string == "" || string == null || string == undefined) return message.channel.send(`${translate_Analyze}`);
    translate(string).then((res)=>{
      return message.channel.send({embed: {
        color:0xFFFFFF, 
        fields: [{ name: `${translate_Detected}`, 
        value: lang[res.from.language.iso] }] } })
    }).catch(err => { console.error(err) });
}

async function tsChannels(message, client) {
    if(!message.channel.topic) return
    if(!message.channel.topic.toLowerCase().startsWith("ts-")) return
    if(message.content.length > MAX_TRANSLATE) return too_long()
    let tsChannels = []
    let parentIdActual = message.channel.parentID;
    let existe_prefijo = message.content.toLowerCase().indexOf(PREFIX) == 0;

    client.guilds.cache.map(guild => {                             
      guild.channels.cache.find(channel => {
        if((channel.topic && channel.parentID === parentIdActual) && !(existe_prefijo)) { 
          if(channel.topic.toLowerCase().startsWith("ts-")) tsChannels.push({topic: channel.topic, id: channel.id, canal:channel})
        } 
      })
    })

    for(i = 0; i < tsChannels.length; i++) {
      let channelLangReg = /(?<=ts\-)\S+/i;
      let channelLang = channelLangReg.exec(tsChannels[i].topic.toLowerCase());
      channelLang = channelLang[channelLang.length - 1]
      for (let l in langs) {
        for (let a in langs[l].alias) {
          if(langs[l].alias[a] === channelLang) {
            bandera= "";
            if (paint_flag== Boolean(true)) {
              bandera=`:flag_${langs[l].flag}:`;
              }
            tsChannelTranslate(message, client, l, message.content, bandera, message.channel.id, tsChannels[i].id)
          }
        }
      }
    }
    
}

async function tsChannelTranslate(message, client, lang, string, flag, sourceChannel, targetChannel) {
    if(string == "" || string == null || string == undefined) return //client.channels.cache.get(targetChannel).send("Nothing to translate!");
    if(targetChannel !== sourceChannel) {
      translate(string, { to: lang }).then(res => {
        nombre = message.member.nick;
        avatar = message.author.displayAvatarURL(); 
        avatardefault =  message.author.defaultAvatarURL
        if (nombre == null ) { nombre = message.author.username;}
        if (res.text.length > MAX_TEXT_ICON) {
          client.channels.cache.get(targetChannel).send('**' + nombre +`**\n ${flag} ${res.text}`);
        } else {       
            client.channels.cache.get(targetChannel).send( { embed: {
            color: 0xFFFFFF, 
            author: {name: nombre, icon_url: avatar ? avatar : avatardefault}, 
            description: `${flag} ${res.text}`
          }});
        }
      }).catch(err => console.error(err) );
    }
}

async function too_long(message) {
    const avatarBot = message.author.displayAvatarURL(); 
    const avatardefaultBot =  message.author.defaultAvatarURL
    return await message.channel.send({embed: {
      color: 0x7188d9,
      author: {
        name: `${Header_Team}`,
        icon_url: avatarBot ? avatarBot : avatardefaultBot
      },
      fields: [
        {
          name: `${translate_Report}`,
          value: `${translate_Long} ` + MAX_TRANSLATE + ` ${translate_characters}`
        }
      ]
    }})
}
  
module.exports = { translate_inition };

