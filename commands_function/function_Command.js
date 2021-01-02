const {                                           //Traducción    /     Translation
  Command_wait,
  Command_before,
  Command_error
} = require("../languages/Config_Language.js");   //Traducción    /     Translation

const { Collection } = require("discord.js");
const cooldowns = new Collection();

/*
************************************************************************************
Command functions     /     Funciones de comandos
************************************************************************************
*/

async function command_detect(message, args, client, command ,GENERAL_ENABLED) {
  if (!cooldowns.has(command.name)) {
    cooldowns.set(command.name, new Collection());
  }

  const now = Date.now();
  const timestamps = cooldowns.get(command.name);
  const cooldownAmount = (command.cooldown || 1) * 1000;

  if (timestamps.has(message.author.id)) {
    const expirationTime = timestamps.get(message.author.id) + cooldownAmount;

    if (now < expirationTime) {
      const timeLeft = (expirationTime - now) / 1000;
      return message.reply(
        `${Command_wait} ${timeLeft.toFixed(1)} ${Command_before} \`${command.name}\``
      );
    }
  }

  timestamps.set(message.author.id, now);
  setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);

  try {                               //Run the command                       //Ejecuta el comando
    command.execute(message, args, client, GENERAL_ENABLED);
  } catch (error) {                   //Error handling with a command         //Control de errores  con un comando
    console.error(error);
    message.reply(`${Command_error}`).catch(console.error);
  } 
  return;
}

module.exports = { command_detect };