const {                                  //Traducción    /     Translation
  Connection_As,
  Connection_Servers, 
  Connection_Total_Servers, 
  Connection_Channels, 
  Connection_Categories, 
  Connection_Voice, 
  Connection_Text, 
  Connection_members_total,
  Connection_users_total,
  Connection_Members_online,
  Connection_Users_online,
  Connection_Client_online,
  Connection_Server_online,
  Connection_Time_Client,
  Connection_Time_Server,
  Connection_Days,
  Connection_Hours,
  Connection_Minutes,
  Connection_Seconds,
  Connection_Total_Seconds_Bot,
  Connection_Total_Seconds_Server,
  Connection_Token,
  Connection_Owner,
  Connection_URL,
  Header_Team,
  Header_LINE1,
  Header_LINE2,
  Header_LINE3,
  Header_LINE4,
  Header_LINE5,
  Command_help_0,
  Stats_Getting,
  Stats_STATISTICS,
  Stats_Server_Memory,
  Stats_Nodejs_Memory,
  Stats_Nodejs_Version,
  Stats_Region,
  Stats_Connected_Server,
  Region_America,
  Region_Europe,
  Region_Russia,
  Region_Asia,
  Region_China,
  Region_Japan,
  Region_Signapore,
  Region_South_America,
  Region_Australia,
  Region_Percentages,
  Region_Server_are
} = require("../languages/Config_Language.js");   //Traducción    /     Translation

/*
************************************************************************************
Connection functions     /     Funciones de conexión
************************************************************************************
*/
async function connection_log( client, TOKEN, OWNER, PLAYSTATUS ) {  //client, TOKEN, OWNER, PLAYSTATUS
  console.log(`${Connection_As} ${client.user.tag}`);

  let client_seg_total = Math.floor(client.uptime / 1000)
  client_days= Math.trunc(client_seg_total/86400) 
  client_hours = Math.trunc((client_seg_total-(client_days*86400))/3600)
  client_minutes = Math.trunc((client_seg_total-(client_days*86400)-(client_hours*3600))/60)
  client_seconds = Math.trunc(client_seg_total-(client_days*86400)-(client_hours*3600)-(client_minutes*60))

  const ostb = require("os-toolbox");
  let time_server = ostb.uptime()
  let server_seg_total = Math.floor(time_server)
  server_days = Math.trunc(server_seg_total/86400)   
  server_hours = Math.trunc((server_seg_total-(server_days*86400))/3600)
  server_minutes = Math.trunc((server_seg_total-(server_days*86400)-(server_hours*3600))/60)
  server_seconds = Math.trunc(server_seg_total-(server_days*86400)-(server_hours*3600)-(server_minutes*60))

  let guildSize = null
  guildSize = client.guilds.cache.size  //Servidores
  channels_total  = []
  channel_Category = []
  channel_voice = []
  channel_text = []
  members_total_online = []
  client.guilds.cache.map(guild => {  
    guild.channels.cache.find(channel => {
      channels_total.push(channel); 
      if (channel.type === "category") channel_Category.push(channel); 
      if (channel.type === "voice") channel_voice.push(channel); 
      if (channel.type === "text") channel_text.push(channel); 
    })    
    guild.members.cache.find(member => {
      members_total_online.push(member); 
    })
  })
  userCount = client.users.cache.size   //Usuarios de todos los servidores

  console.log(`${Connection_Servers} ${guildSize} ${Connection_Total_Servers}`)
  console.log(`${Connection_Channels} (${channels_total.length}): ${channel_Category.length} ${Connection_Categories}, ${channel_voice.length} ${Connection_Voice} ${channel_text.length}  ${Connection_Text}`)
  console.log(`${Connection_users_total} ${members_total_online.length} ${Connection_Members_online} ${userCount} ${Connection_Users_online}`)
  console.log(`${Connection_Time_Client} ${client_days} ${Connection_Days} / ${client_hours}  ${Connection_Hours} / ${client_minutes} ${Connection_Minutes} / ${client_seconds} ${Connection_Seconds} // ${client_seg_total} ${Connection_Total_Seconds_Bot}`)
  console.log(`${Connection_Time_Server} ${server_days} ${Connection_Days} / ${server_hours}  ${Connection_Hours} / ${server_minutes} ${Connection_Minutes} / ${server_seconds} ${Connection_Seconds} // ${server_seg_total} ${Connection_Total_Seconds_Server}`)
  console.log(`${Connection_Token} ${TOKEN}`)
  console.log(`${Connection_Owner} ${OWNER}`)

  //Si quieres usar un PLAYSTATUS más automatico:   /   If you want to use a more automatic PLAYSTATUS:  
  if (client.prefix.length > 1) {
    string_PLAYSTATUS=`${PLAYSTATUS} ${client.prefix} ${Command_help_0}`
  } else {
    string_PLAYSTATUS=`${PLAYSTATUS} ${client.prefix}${Command_help_0}`
  }

  client.user.setPresence({
    status: 'online',
    activity: { 
      name: PLAYSTATUS,    //string_PLAYSTATUS,
      type: 'LISTENING',
      url: `${Connection_URL}`
    }    
  })
  return;
}; 

async function connection_txt( message ,client ) {  //client, TOKEN, OWNER, PLAYSTATUS
  const avatarBot = message.author.displayAvatarURL();            //Coloca el icono de quien pregunta
  const avatardefaultBot =  message.author.defaultAvatarUR        //Coloca el icono de quien preguntaL    

  let client_seg_total = Math.floor(client.uptime / 1000)
  client_days= Math.trunc(client_seg_total/86400) 
  client_hours = Math.trunc((client_seg_total-(client_days*86400))/3600)
  client_minutes = Math.trunc((client_seg_total-(client_days*86400)-(client_hours*3600))/60)
  client_seconds = Math.trunc(client_seg_total-(client_days*86400)-(client_hours*3600)-(client_minutes*60))

  const ostb = require("os-toolbox");
  let time_server = ostb.uptime()
  server_seg_total = Math.floor(time_server),
  server_days = Math.trunc(server_seg_total/86400)   
  server_hours = Math.trunc((server_seg_total-(server_days*86400))/3600)
  server_minutes = Math.trunc((server_seg_total-(server_days*86400)-(server_hours*3600))/60)
  server_seconds = Math.trunc(server_seg_total-(server_days*86400)-(server_hours*3600)-(server_minutes*60))

  let guildSize = null
  guildSize = client.guilds.cache.size  //Servidores
  channels_total  = []
  channel_Category = []
  channel_voice = []
  channel_text = []
  members_total_online = []
  client.guilds.cache.map(guild => {  
    guild.channels.cache.find(channel => {
      channels_total.push(channel); 
      if (channel.type === "category") channel_Category.push(channel); 
      if (channel.type === "voice") channel_voice.push(channel); 
      if (channel.type === "text") channel_text.push(channel); 
    })    
    guild.members.cache.find(member => {
      members_total_online.push(member); 
    })
  })
  userCount = client.users.cache.size   //Usuarios de todos los servidores
 
  return message.channel.send({embed: {
      color: 0x7188d9,
      author: {
      name: Header_Team,
          icon_url: avatarBot ? avatarBot : avatardefaultBot
      },
      fields: [
      {
      name: `${Connection_As}`,
      value: `${client.user.tag}`
      },
      {
      name: `${Connection_Servers}`,
      value: `${guildSize} ${Connection_Total_Servers}`
      },
      {
      name: `${Connection_Channels} (${channels_total.length}):`,
      value: `${channel_Category.length} ${Connection_Categories}, ${channel_voice.length} ${Connection_Voice} ${channel_text.length} ${Connection_Text}`
      },
      {
      name: `${Connection_Members_online}`,
      value: `${members_total_online.length} ${Connection_Members_online} ${userCount} ${Connection_Users_online}`
      },
      {
      name: `${Connection_Client_online}`,
      value: `${Connection_Time_Client} ${client_days} ${Connection_Days} / ${client_hours} ${Connection_Hours} / ${client_minutes} ${Connection_Minutes} / ${client_seconds} ${Connection_Seconds}. // ${client_seg_total} ${Connection_Total_Seconds_Bot}`
      },
      {
      name: `${Connection_Server_online}`,
      value: `${Connection_Time_Server} ${server_days} ${Connection_Days} / ${server_hours} ${Connection_Hours} / ${server_minutes} ${Connection_Minutes} / ${server_seconds} ${Connection_Seconds}. // ${server_seg_total} ${Connection_Total_Seconds_Server}`
      }
      ]
  }})
};

async function connection_stats( message ,client ) {
  let client_seg_total = Math.floor(client.uptime / 1000)
  client_days= Math.trunc(client_seg_total/86400) 
  client_hours = Math.trunc((client_seg_total-(client_days*86400))/3600)
  client_minutes = Math.trunc((client_seg_total-(client_days*86400)-(client_hours*3600))/60)
  client_seconds = Math.trunc(client_seg_total-(client_days*86400)-(client_hours*3600)-(client_minutes*60))

  const ostb = require("os-toolbox");
  let time_server = ostb.uptime()
  server_seg_total = Math.floor(time_server),
  server_days = Math.trunc(server_seg_total/86400)   
  server_hours = Math.trunc((server_seg_total-(server_days*86400))/3600)
  server_minutes = Math.trunc((server_seg_total-(server_days*86400)-(server_hours*3600))/60)
  server_seconds = Math.trunc(server_seg_total-(server_days*86400)-(server_hours*3600)-(server_minutes*60))

  let guildSize = null
  guildSize = client.guilds.cache.size  //Servidores
  channels_total  = []
  channel_Category = []
  channel_voice = []
  channel_text = []
  members_total_online = []
  client.guilds.cache.map(guild => {  
    guild.channels.cache.find(channel => {
      channels_total.push(channel); 
      if (channel.type === "category") channel_Category.push(channel); 
      if (channel.type === "voice") channel_voice.push(channel); 
      if (channel.type === "text") channel_text.push(channel); 
    })    
    guild.members.cache.find(member => {
      members_total_online.push(member); 
    })
  })
  userCount = client.users.cache.size   //Usuarios de todos los servidores

  await message.channel.send(`${Stats_Getting}`)
  .then(message => {
    let mintime = ostb.uptime() / 60,
        uptime = Math.floor(mintime / 60),
        regionInfo;
    regionsUsed(client).then(r => {
      regionInfo = r;
    })
    ostb.cpuLoad().then(cpuusage=>{ ostb.memoryUsage().then(memusage=>{ ostb.currentProcesses().then(processes=>{
      const meuse = memusage;
      avatarBot = message.author.displayAvatarURL(); 
      avatardefaultBot =  message.author.defaultAvatarURL
      message.delete()
      message.channel.send({ embed: {
        color: 0x36393E,
        author: { name: `${message.author.username}#${message.author.discriminator}`,         icon_url: avatarBot ? avatarBot : avatardefaultBot },
        title: `${Stats_STATISTICS}`,
        footer: { text: ``, icon_url: message.channel.guild.iconURL },
        fields: [
          { name: `${Stats_Server_Memory}`, value: `${meuse}%` },
          { name: `${Stats_Nodejs_Memory}`, value: `${processMemoryMB().toString()} MB` },
          { name: `${Stats_Nodejs_Version}`, value: process.version },
          { name: `${Connection_Servers}`, value: guildSize + `${Connection_Total_Servers}`},
          { name: `${Connection_Channels} (${channels_total.length}):`, value: `${channel_Category.length} ${Connection_Categories}, ${channel_voice.length} ${Connection_Voice} ${channel_text.length} ${Connection_Text}` },
          { name: `${Connection_members_total}`, value: members_total_online.length },
          { name: `${Connection_users_total}`, value: userCount },
          { name: `${Stats_Region}`, value: regionInfo },
          { name: `${Connection_Client_online}`, value: `${Connection_Time_Client} ${client_days} ${Connection_Days} / ${client_hours} ${Connection_Hours} / ${client_minutes} ${Connection_Minutes} / ${client_seconds} ${Connection_Seconds}. // ${client_seg_total} ${Connection_Total_Seconds_Bot}` },
          { name: `${Connection_Server_online}`, value: `${Connection_Time_Server} ${server_days} ${Connection_Days} / ${server_hours} ${Connection_Hours} / ${server_minutes} ${Connection_Minutes} / ${server_seconds} ${Connection_Seconds}. // ${server_seg_total} ${Connection_Total_Seconds_Server}` },
          { name: `${Stats_Connected_Server}`, value: message.channel.guild.name }
        ]
      }});
  });});});});
}

async function regionsUsed(client) {
  let usa = [];
  let europe = [];
  let russia = [];
  let china = [];
  let brazil = [];
  let japan = [];
  let au = [];
  let sig = [];
  let gC = client.guilds.cache.size;
  await client.guilds.cache.map(g => {
    if(g.region === "us-central" || g.region === "us-west" || g.region === "us-south" || g.region === "us-east") {
      usa.push(g.id);
    } else if(g.region === "eu-central" || g.region === "eu-west") {
      europe.push(g.id);
    } else if(g.region === "russia") {
      russia.push(g.id);
    } else if(g.region === "hongkong") {
      china.push(g.id);
    } else if(g.region === "brazil") {
      brazil.push(g.id);
    } else if(g.region === "japan") {
      japan.push(g.id);
    } else if(g.region === "sydney") {
      au.push(g.id);
    } else if(g.region === "signapore") {
      sig.push(g.id)
    }
  })
  usa.length >= 1 ? usa = usa.length : usa = 0;
  europe.length >= 1 ? europe = europe.length : europe = 0;
  russia.length >= 1 ? russia = russia.length : russia = 0;
  china.length >= 1 ? china = china.length : china = 0;
  brazil.length >= 1 ? brazil = brazil.length : brazil = 0;
  japan.length >= 1 ? japan = japan.length : japan = 0;
  au.length >= 1 ? au = au.length : au = 0;
  sig.length >= 1 ? sig = sig.length : sig = 0;
  function prec(number, precision) {
    var factor = Math.pow(10, precision);
    return Math.round(number * factor) / factor;
  }
    let regInfo = `**:flag_us: ${Region_America}**: \`${usa}\`\n**:flag_eu: ${Region_Europe}**: \`${europe + russia}\` (**${Region_Russia}**: \`${russia}\`)\n**:flag_cn: ${Region_Asia}**: \`${china + japan + sig}\` (**${Region_China}**: \`${china}\`, **${Region_Japan}**: \`${japan}\`, **${Region_Signapore}**: \`${sig}\`)\n**:flag_br: ${Region_South_America}**: \`${brazil}\`\n**:flag_au:  ${Region_Australia}**: \`${au}\``
    let percentages = `\n**----- ${Region_Percentages} -----**\n\`${prec((usa / gC) * 100, 2)}%\` ${Region_Server_are} **${Region_America}**\n\`${prec(((europe + russia) / gC) * 100, 2)}%\` ${Region_Server_are} **${Region_Europe}** (\`${prec((russia / gC) * 100, 2)}%\` => **${Region_Russia}**)\n\`${prec(((china + japan + sig) / gC) * 100, 2)}%\` ${Region_Server_are} **${Region_Asia}** (\`${prec((china / gC) * 100, 2)}%\` => **${Region_China}**, \`${prec((japan / gC) * 100, 2)}%\` => **${Region_Japan}**, \`${prec((sig / gC) * 100, 2)}%\` => **${Region_Signapore}**)\n\`${prec((brazil / gC) * 100, 2)}%\` ${Region_Server_are} **${Region_South_America}**\n\`${prec((au / gC) * 100, 2)}%\` ${Region_Server_are} **${Region_Australia}**`
  return regInfo + percentages;
}

function processMemoryMB() {
  let heap = process.memoryUsage().heapUsed
  let MB = heap / 1048576;
  return Math.floor(MB)
}

module.exports = { connection_log, connection_txt, connection_stats};

