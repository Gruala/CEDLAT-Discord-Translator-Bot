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
  Command_activate_ts_channels_0,
  Command_activate_ts_channels_1,
  Command_activate_ts_channels_2
} = require("../languages/Config_Language.js");   //Traducción    /     Translation

var {TRANSLATOR_Enabled, TSCHANNELS_Enabled, SEPARATE_LANGUAGE, MAX_TRANSLATE, MAX_TEXT_ICON} = require("../translate/config_translate.json");

module.exports = {
  name: `${Command_activate_ts_channels_0}`,
  cooldown: 3,
  aliases: [`${Command_activate_ts_channels_1}`],
  description: `${Command_activate_ts_channels_2}`,
  execute(message, args, client, GENERAL_ENABLED) {

    const function_Admin = require("../admin/function_Admin.js");
    var state_boolean = false
    user_boolean = {admin_user: state_boolean}   // Load in obj the value of TRANSLATOR_Enabled
    function_Admin.detect_admin(message, user_boolean);

    if (user_boolean.admin_user ) {         //Returns Boolean: Is it administrator? (True or False   /      Devuelve booleano: ¿es administrador? (True o False

      //Invierte valores
      let translator_text1, translator_text2, translator_text3
      if (GENERAL_ENABLED.trans_ts_enabled) {
        GENERAL_ENABLED.trans_ts_enabled= false
        translator_text1 =`${Command_activate_command_0} ${Command_activate_ts_channels_0}`
        translator_text2 =`${Command_activate_command_1}`
      } else {
        GENERAL_ENABLED.trans_ts_enabled= true
        translator_text1 =`${Command_activate_command_2} ${Command_activate_ts_channels_0}`
        translator_text2 =`${Command_activate_command_3}`
      } 

      //Se graba en el archivo el valor
      var fs = require('fs');
      var obj = {
        "TRANSLATOR_Enabled": GENERAL_ENABLED.trans_enabled,
        "TSCHANNELS_Enabled": GENERAL_ENABLED.trans_ts_enabled,
        "SEPARATE_LANGUAGE": SEPARATE_LANGUAGE,
        "MAX_TRANSLATE": MAX_TRANSLATE,
        "MAX_TEXT_ICON": MAX_TEXT_ICON
      };
       fs.exists("./translate/config_translate.json", function(exists){
        if(exists){
          console.log(`${Command_activate_command_4}`);
          fs.readFile( "./translate/config_translate.json", function readFileCallback(error, data){
            if (error){
              console.log(error);  
            } else {
              var json = JSON.stringify(obj, null,1); 
              fs.renameSync( "./translate/config_translate.json", "./translate/config_translate.json.bak")
              fs.writeFile( "./translate/config_translate.json", json, 'utf8', function (error2) {
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
          fs.writeFile( "./translate/config_translate.json", json, 'utf8', function (error) {
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
