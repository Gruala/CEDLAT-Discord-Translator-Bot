/*
************************************************************************************
Module Imports, Connections    /   Importaciones de módulos, conexiones
************************************************************************************
*/
const {TOKEN, OWNER, PLAYSTATUS, PREFIX} = require("./config_connection/Config_Connection.js");
const function_Connection = require("./config_connection/function_Connection.js");

const escapeRegex = (str) => str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
const function_Command = require("./commands_function/function_Command.js");
const function_Admin = require("./admin/function_Admin.js");

const {Events_Ready,                              //Traducción    /     Translation
  Events_Reconnecting, 
  Events_Disconnect, 
  Error_Client, 
  Error_ShardError, 
  Error_Warn, 
  Error_UnhandledRejection, 
  Error_UncaughtException
} = require("./languages/Config_Language.js");   //Traducción    /     Translation

var {COMMAND_USER_Enabled, COMMAND_MODERATOR_Enabled, COMMAND_BLACK_Enabled, STRING_TEXT_NO_CLEAR} = require("./commands_function/config_command.json");
var {TRANSLATOR_Enabled, TSCHANNELS_Enabled, SEPARATE_LANGUAGE, MAX_TRANSLATE, MAX_TEXT_ICON} = require("./translate/config_translate.json");
GENERAL_ENABLED={command_USER_Enabled: COMMAND_USER_Enabled, command_MODERATOR_Enabled: COMMAND_MODERATOR_Enabled, command_BLACK_Enabled: COMMAND_BLACK_Enabled, string_Text_No_Clear: STRING_TEXT_NO_CLEAR, trans_enabled: TRANSLATOR_Enabled, trans_ts_enabled: TSCHANNELS_Enabled}// Load in obj the value of TRANSLATOR_Enabled, TSCHANNELS_Enabled

const function_Translate = require("./translate/function_Translate.js");

const { Client, Collection } = require("discord.js");
const { readdirSync } = require("fs");
const { join } = require("path");

//const client = new Discord.Client();
const client = new Client({ disableMentions: "everyone" });
client.login(TOKEN);
client.commands = new Collection();
client.prefix = PREFIX;
client.queue = new Map();

/*
************************************************************************************
Import all commands     /     Importa todos los comandos
************************************************************************************
*/
const commandFiles = readdirSync(join(__dirname, "commands")).filter((file) => file.endsWith(".js"));
for (const file of commandFiles) {
  const command = require(join(__dirname, "commands", `${file}`));
  client.commands.set(command.name, command);
}

/*
************************************************************************************
Customer Events     /     Eventos del Cliente
************************************************************************************
*/
client.on("ready", () =>{
  function_Connection.connection_log(client, TOKEN, OWNER, PLAYSTATUS);     //client, TOKEN, OWNER, PLAYSTATUS //Loads connection data into the Log    /     Carga datos de la conexión en el Log
});
client.once('ready', () => {
	console.log(`${Events_Ready}`);
});
client.once('reconnecting', () => {
	console.log(`${Events_Reconnecting}`);
});
client.once('disconnect', () => {
	console.log(`${Events_Disconnect}`);
}); 

/*
************************************************************************************
Private message events    /   Eventos de mensajes privados
************************************************************************************
*/
client.on("message", message => { // When a message is created
    //https://www.npmjs.com/package/discord.js-chatbot

    if (message.content === "!ping") { // If the message content is "!ping"
      message.channel.send  ("Pong!", message.channel.id);
    } if (message.content === "ping") {
      message.reply('Pong!');
    } if (message.content === "pong") {
      message.reply('Ping!');
    } else if(message.content === "!pong") { // Otherwise, if the message is "!pong"
    message.reply('Ping!');
    }
});

/*
************************************************************************************
Customer Events: Detects command and translates.     /     Eventos del Cliente: Detecta comando y traduce.
************************************************************************************
*/
client.on("message", async message => {
  if (message.author.bot) return;
  if (!message.guild) return;

  if (GENERAL_ENABLED.command_BLACK_Enabled) {
    var state_boolean = false
    user_boolean = {black_user: state_boolean}   // Load in obj the value of TRANSLATOR_Enabled
    function_Admin.if_Black_List(message, user_boolean);
    if (user_boolean.black_user) return;
  }

  const prefixRegex = new RegExp(`^(<@!?${client.user.id}>|${escapeRegex(PREFIX)})\\s*`);
  if (prefixRegex.test(message.content)) {
    const [, matchedPrefix] = message.content.match(prefixRegex);
    const args = message.content.slice(matchedPrefix.length).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();
    const command =
      client.commands.get(commandName) ||
      client.commands.find((cmd) => cmd.aliases && cmd.aliases.includes(commandName));
    //if (!command) return;     //If it's not a command, come back    /     Si no es un comando regresa
    if(command) {
      if (GENERAL_ENABLED.command_USER_Enabled)  {
        function_Command.command_detect(message, args, client, command, GENERAL_ENABLED);      //Detect commands   /   Detecta los comandos
      } else  {
        var state_boolean = false;
        if (GENERAL_ENABLED.command_MODERATOR_Enabled) {
          user_boolean = {admin_moderator_user: state_boolean}   // Load in obj the value of TRANSLATOR_Enabled
          function_Admin.if_admin_moderator(message, user_boolean);
          if (user_boolean.admin_moderator_user) function_Command.command_detect(message, args, client, command, GENERAL_ENABLED);      //Detect commands   /   Detecta los comandos        
        } else {
          user_boolean = {admin_user: state_boolean}   // Load in obj the value of TRANSLATOR_Enabled
          function_Admin.if_admin(message, user_boolean);
          if (user_boolean.admin_user) function_Command.command_detect(message, args, client, command, GENERAL_ENABLED);      //Detect commands   /   Detecta los comandos                  
        }
      }
    }
    //Si no es un comando de fichero: (*.js), continua la funcion por si fuera un comando de traducción.
  }

  if (GENERAL_ENABLED.trans_enabled) {        //Code to translate into a channel (TRANSLATOR_Enabled) or channel group (TSCHANNELS_Enabled)     /     Código para traducir en un canal o en un grupo de canales ()
    const args = message.content.slice(PREFIX.length).trim().split(/ +/g);
    const commandName = args.shift().toString().toLowerCase();
    function_Translate.translate_inition(message, args, client, commandName, GENERAL_ENABLED);      //Load the translation code so you can translate    /     Carga el código de traducción para poder traducir
  }

})


/*
************************************************************************************
Control de errores
************************************************************************************
*/
//Lista completa de errores:    https://discord.com/developers/docs/topics/opcodes-and-status-codes#json-json-error-codes
//Evento de error de el cliente.
client.on('error', error => { console.error(`${Error_Client} ` + error.code +'\n', error) });
//Websocket and Network Errors
client.on('shardError', error => { console.error(`${Error_ShardError} ` + error.code +'\n', error) });
//Errores de advertencia
client.on('warn', error => { console.error(`${Error_Warn} ` + error.code +'\n', error) });
// Uncaught error handling
process.on("unhandledRejection", error => { console.log(`${Error_UnhandledRejection} ` + error.code +`\n${error.stack}`) })
process.on("uncaughtException",  error => { console.log(`${Error_UncaughtException} ` + error.code +`\n${error.stack}`) })