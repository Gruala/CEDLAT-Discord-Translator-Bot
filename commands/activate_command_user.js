const {                                           //Traducción    /     Translation
  Command_activate_command_0,
  Command_activate_command_1,
  Command_activate_command_2,
  Command_activate_command_3,
  Command_activate_command_4,
  Command_activate_command_5,
  Command_activate_command_6,
  Command_activate_command_7,
  Command_activate_command_8,
  Command_activate_command_9,
  Command_activate_command_10,
  Command_activate_command_user_0,
  Command_activate_command_user_1,
  Command_activate_command_user_2
} = require("../languages/Config_Language.js");   //Traducción    /     Translation

module.exports = {
  name: `${Command_activate_command_user_0}`,
  cooldown: 3,
  aliases: [`${Command_activate_command_user_1}`],
  description: `${Command_activate_command_user_2}`,
  execute(message, args, client, GENERAL_ENABLED) {

    const function_Admin = require("../admin/function_Admin.js");
    var state_boolean = false
    user_boolean = {admin_moderator_user: state_boolean}   // Load in obj the value of TRANSLATOR_Enabled
    function_Admin.if_admin_moderator(message, user_boolean);

    if (user_boolean.admin_moderator_user ) {         //Returns Boolean: Is it administrator? (True or False   /      Devuelve booleano: ¿es administrador? (True o False

      //Invierte valores
      let translator_text1, translator_text2, translator_text3
      if (GENERAL_ENABLED.command_USER_Enabled) {
        GENERAL_ENABLED.command_USER_Enabled= false
        translator_text1 =`${Command_activate_command_0} ${Command_activate_command_user_0}`
        translator_text2 =`${Command_activate_command_1}`
      } else {
        GENERAL_ENABLED.command_USER_Enabled= true
        translator_text1 =`${Command_activate_command_2} ${Command_activate_command_user_0}`
        translator_text2 =`${Command_activate_command_3}`
      } 

      //Se graba en el archivo el valor
      var fs = require('fs');
      var obj = {
          "COMMAND_USER_Enabled": GENERAL_ENABLED.command_USER_Enabled,
          "COMMAND_MODERATOR_Enabled": GENERAL_ENABLED.command_MODERATOR_Enabled,
          "COMMAND_BLACK_Enabled": GENERAL_ENABLED.command_BLACK_Enabled,
          "STRING_TEXT_NO_CLEAR": GENERAL_ENABLED.string_Text_No_Clear
      };
      fs.exists("./commands_function/config_command.json", function(exists){
        if(exists){
          console.log(`${Command_activate_command_4}`);
          fs.readFile( "./commands_function/config_command.json", function readFileCallback(error, data){
            if (error){
              console.log(error);  
            } else {
              var json = JSON.stringify(obj, null,1); 
              fs.renameSync( "./commands_function/config_command.json", "./commands_function/config_command.json.bak")
              fs.writeFile( "./commands_function/config_command.json", json, 'utf8', function (error2) {
                if (error2) return console.log(error2);
                console.log(`${Command_activate_command_5}`);
                translator_text3 = `${Command_activate_command_6}`;
                return message
                  .reply(`${translator_text1}\n ${Command_activate_command_7} ${translator_text2}.\n${translator_text3}`)
                  .catch(console.error);
              });  
            }
          })
        } else {
          console.log(`${Command_activate_command_8}`);
          var json = JSON.stringify(obj, null,1);
          fs.writeFile( "./commands_function/config_command.json", json, 'utf8', function (error) {
            if (error) return console.log(error);
            console.log(`${Command_activate_command_9}`);
            translator_text3 = `${Command_activate_command_10}`;
            return message
              .reply(`${translator_text1}\n ${Command_activate_command_7} ${translator_text2}.\n${translator_text3}`)
              .catch(console.error);
          });
        }
      });
      
    }
    
  }
};
