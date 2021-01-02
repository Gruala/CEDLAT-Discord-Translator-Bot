const {                                           //Traducción    /     Translation
  Header_Team,
  Header_LINE1,
  Admin_Report,
  Admin_Not_Admin,
  Admin_Not_Command_0,
  Admin_Not_Command_1,
  Admin_Not_Command_2
} = require("../languages/Config_Language.js");   //Traducción    /     Translation

/*
************************************************************************************
Connection functions     /     Funciones de conexión
************************************************************************************
*/
async function detect_admin(message, user_boolean) {  //client, TOKEN, OWNER, PLAYSTATUS

  //Verify that you are an administrator user     /     Comprobar que es un usuario administrador
  const admin_list = require("./config_admin.json");
  var user_text = message.author.username + '#' + message.author.discriminator
  for(i = 0; i < admin_list.ADMINS.length; i++) {
    if(user_text == admin_list.ADMINS[i] )  {    //Comprobar que el administrador esta en la lista... y no sea igual a 0 o a nada.
      user_boolean.admin_user=true;
    }
  }
  if (!user_boolean.admin_user) {
    const avatarBot = message.author.displayAvatarURL(); 
    const avatardefaultBot =  message.author.defaultAvatarURL
    message.channel.send({embed: {
    color: 0x7188d9,
    author: {
      name: Header_Team + "\n" + Header_LINE1,
      icon_url: avatarBot ? avatarBot : avatardefaultBot
    },
      fields: [
        {
          name: Admin_Report,
          value: Admin_Not_Admin
        }
      ]
    }})
  }
  return;
};  

async function if_admin_moderator(message, user_boolean) {  //client, TOKEN, OWNER, PLAYSTATUS

  //Verify that you are an administrator user     /     Comprobar que es un usuario administrador
  const admin_list = require("./config_admin.json");
  const moderator_list = require("./config_moderator.json");
  var user_text = message.author.username + '#' + message.author.discriminator
  for(i = 0; i < admin_list.ADMINS.length; i++) {
    if(user_text == admin_list.ADMINS[i] )  {    //Comprobar que el administrador esta en la lista... y no sea igual a 0 o a nada.
      user_boolean.admin_moderator_user=true;
    }
  }
  for(i = 0; i < moderator_list.MODERATOR.length; i++) {
    if(user_text == moderator_list.MODERATOR[i] )  {    //Comprobar que el administrador esta en la lista... y no sea igual a 0 o a nada.
      user_boolean.admin_moderator_user=true;
    }
  }
  if (!user_boolean.admin_moderator_user) {
    const avatarBot = message.author.displayAvatarURL(); 
    const avatardefaultBot =  message.author.defaultAvatarURL
    message.channel.send({embed: {
    color: 0x7188d9,
    author: {
      name: Header_Team + "\n" + Header_LINE1,
      icon_url: avatarBot ? avatarBot : avatardefaultBot
    },
      fields: [
        {
          name: Admin_Report,
          value: Admin_Not_Command_0
        }
      ]
    }})
  }
  return;
};

async function if_admin(message, user_boolean) {  //client, TOKEN, OWNER, PLAYSTATUS

  //Verify that you are an administrator user     /     Comprobar que es un usuario administrador
  const admin_list = require("./config_admin.json");
  var user_text = message.author.username + '#' + message.author.discriminator
  for(i = 0; i < admin_list.ADMINS.length; i++) {
    if(user_text == admin_list.ADMINS[i] )  {    //Comprobar que el administrador esta en la lista... y no sea igual a 0 o a nada.
      user_boolean.admin_user=true;
    }
  }
  if (!user_boolean.admin_user) {
    const avatarBot = message.author.displayAvatarURL(); 
    const avatardefaultBot =  message.author.defaultAvatarURL
    message.channel.send({embed: {
    color: 0x7188d9,
    author: {
      name: Header_Team + "\n" + Header_LINE1,
      icon_url: avatarBot ? avatarBot : avatardefaultBot
    },
      fields: [
        {
          name: Admin_Report,
          value: Admin_Not_Command_1
        }
      ]
    }})
  }
  return;
};  

async function if_moderator(message, user_boolean) {  //client, TOKEN, OWNER, PLAYSTATUS

  //Verify that you are an administrator user     /     Comprobar que es un usuario administrador
  const moderator_list = require("./config_moderator.json");
  var user_text = message.author.username + '#' + message.author.discriminator
  for(i = 0; i < moderator_list.ADMINS.length; i++) {
    if(user_text == moderator_list.ADMINS[i] )  {    //Comprobar que el administrador esta en la lista... y no sea igual a 0 o a nada.
      user_boolean.moderator_user=true;
    }
  }
  if (!user_boolean.moderator_user) {
    const avatarBot = message.author.displayAvatarURL(); 
    const avatardefaultBot =  message.author.defaultAvatarURL
    message.channel.send({embed: {
    color: 0x7188d9,
    author: {
      name: Header_Team + "\n" + Header_LINE1,
      icon_url: avatarBot ? avatarBot : avatardefaultBot
    },
      fields: [
        {
          name: Admin_Report,
          value: Admin_Not_Command_2
        }
      ]
    }})
  }
  return;
};

async function if_Black_List(message, user_boolean) {  //client, TOKEN, OWNER, PLAYSTATUS

  //Verify that you are a user of the Black_List     /     Comprobar que es un usuario de la Black_List
  const black_list_load = require("./config_black_list.json");
  var user_text = newFunction()
  for(i = 0; i < black_list_load.BLACK_LIST.length; i++) {
    if(user_text == black_list_load.BLACK_LIST[i] )  {    //Comprobar que el administrador esta en la lista... y no sea igual a 0 o a nada.
      user_boolean.black_user=true;
    }
  }
  /*
  if (!user_boolean.black_user) {
    const avatarBot = message.author.displayAvatarURL(); 
    const avatardefaultBot =  message.author.defaultAvatarURL
    message.channel.send({embed: {
    color: 0x7188d9,
    author: {
      name: Header_Team + "\n" + Header_LINE1,
      icon_url: avatarBot ? avatarBot : avatardefaultBot
    },
      fields: [
        {
          name: Admin_Report,
          value: Admin_Not_Command_1
        }
      ]
    }})
  }
  */
  return;

  function newFunction() {
    return message.author.username + '#' + message.author.discriminator;
  }
};  

module.exports = { detect_admin, if_admin_moderator , if_admin, if_moderator, if_Black_List };

