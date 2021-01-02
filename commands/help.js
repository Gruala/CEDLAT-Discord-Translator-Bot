const {                                           //Traducción    /     Translation
  Command_help_0,
  Command_help_1,
  Command_help_2,
  Command_help_3,
  Command_help_4
} = require("../languages/Config_Language.js");   //Traducción    /     Translation
const { MessageEmbed } = require("discord.js");

module.exports = {
  name: `${Command_help_0}`,
  aliases: [`${Command_help_1}`],
  description: `${Command_help_2}`,
  execute(message, args, client) {
    let commands = message.client.commands.array();

    let helpEmbed = new MessageEmbed()
      .setTitle(`${message.client.user.username} ${Command_help_3}`)
      .setDescription(`${Command_help_4}`)
      .setColor("#F8AA2A");
    let helpEmbed2 = new MessageEmbed()
      .setTitle(``)
      .setDescription("")
      .setColor("#F8AA2A");
    let helpEmbed3 = new MessageEmbed()
      .setTitle(``)
      .setDescription("")
      .setColor("#F8AA2A");

    let numCallbackRuns = 0;
    commands.forEach((cmd) => {
      if (numCallbackRuns < 15) {
        if (client.prefix.length> 1) {
          helpEmbed.addField(
            `**${message.client.prefix} ${cmd.name} ${cmd.aliases ? `(${cmd.aliases})` : ""}**`,
            `${cmd.description}`,
            true
            );
        } else { 
          helpEmbed.addField(
            `**${message.client.prefix}${cmd.name} ${cmd.aliases ? `(${cmd.aliases})` : ""}**`,
            `${cmd.description}`,
            true
            );
        }
        numCallbackRuns++
      } else if  (numCallbackRuns < 30) {
        if (client.prefix.length> 1) {
          helpEmbed2.addField(
            `**${message.client.prefix} ${cmd.name} ${cmd.aliases ? `(${cmd.aliases})` : ""}**`,
            `${cmd.description}`,
            true
            );
        } else { 
          helpEmbed2.addField(
            `**${message.client.prefix}${cmd.name} ${cmd.aliases ? `(${cmd.aliases})` : ""}**`,
            `${cmd.description}`,
            true
            );
        }
        numCallbackRuns++
      } else {
        if (client.prefix.length> 1) {
          helpEmbed3.addField(
            `**${message.client.prefix} ${cmd.name} ${cmd.aliases ? `(${cmd.aliases})` : ""}**`,
            `${cmd.description}`,
            true
            );
        } else { 
          helpEmbed3.addField(
            `**${message.client.prefix}${cmd.name} ${cmd.aliases ? `(${cmd.aliases})` : ""}**`,
            `${cmd.description}`,
            true
            );
        }
        numCallbackRuns++
      }
    });

    helpEmbed.setTimestamp();

    if (numCallbackRuns < 15) {
      return message.channel.send(helpEmbed).catch(console.error);
    } else if  (numCallbackRuns < 30) {
      return (message.channel.send(helpEmbed).catch(console.error)),(message.channel.send(helpEmbed2).catch(console.error));
    } else {
      return (message.channel.send(helpEmbed).catch(console.error)),(message.channel.send(helpEmbed2).catch(console.error)),(message.channel.send(helpEmbed3).catch(console.error));
    }

  }
};
