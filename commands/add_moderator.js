const {                                           //Traducción    /     Translation
  Command_activate_command_4,
  Command_activate_command_5,
  Command_activate_command_6,
  Command_activate_command_7,
  Command_activate_command_8,
  Command_activate_command_9,
  Command_activate_command_10,
  Command_add_moderator_0,
  Command_add_moderator_1,
  Command_add_moderator_2,
  Command_add_moderator_3,
  Command_add_moderator_4
} = require("../languages/Config_Language.js");   //Traducción    /     Translation

module.exports = {
  name: `${Command_add_moderator_0}`,
  //cooldown: 3,
  aliases: [`${Command_add_moderator_1}`],
  description: `${Command_add_moderator_2}`,
  execute(message, args, client) {

    const function_Admin = require("../admin/function_Admin.js");
    var state_boolean = false
    user_boolean = {admin_moderator_user: state_boolean}   // Load in obj the value of TRANSLATOR_Enabled
    function_Admin.if_admin_moderator(message, user_boolean);

    if (user_boolean.admin_moderator_user ) {         //Returns Boolean: Is it administrator? (True or False   /      Devuelve booleano: ¿es administrador? (True o False

      if (client.prefix.length > 1) {
        if (!args.length)
        return message
          .reply(`${Command_add_moderator_3} ${message.client.prefix} ${Command_add_moderator_0} ${Command_add_moderator_4}`)
          .catch(console.error);
      } else {
        if (!args.length)
        return message
          .reply(`${Command_add_moderator_3} ${message.client.prefix}${Command_add_moderator_0} ${Command_add_moderator_4}`)
          .catch(console.error);
      }

      delete require.cache[require.resolve("../admin/config_moderator.json")];
      var obj = require ("../admin/config_moderator.json" ) ;
      var all_moderator_list= []; 
      for(i = 0; i < obj.MODERATOR.length; i++) {
        all_moderator_list.push(obj.MODERATOR[i]);
      }
      all_moderator_list.push(args[0])
      var all_moderator_list2= {"MODERATOR": all_moderator_list}; 
      delete require.cache[require.resolve("../admin/config_moderator.json")];

      //Se graba en el archivo el valor
      var fs = require('fs');
      fs.exists("./admin/config_moderator.json", function(exists){
        if(exists){
          console.log(`${Command_activate_command_4}`);
          fs.readFile( "./admin/config_moderator.json", function readFileCallback(error, data){
            if (error){
              console.log(error);  
            } else {
              var json = JSON.stringify(all_moderator_list2, null,1); 
              fs.renameSync( "./admin/config_moderator.json", "./admin/config_moderator.json.bak")
              fs.writeFile( "./admin/config_moderator.json", json, 'utf8', function (error2) {
                if (error2) return console.log(error2);
                console.log(`${Command_activate_command_5}`);
                translator_text3 = `${Command_activate_command_6}`;
                return ;
              });  
            }
          })
        } else {
          console.log(`${Command_activate_command_8}`);
          var json = JSON.stringify(obj, null,1);
          fs.writeFile( "./admin/config_moderator.json", json, 'utf8', function (error) {
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
