const {                                           //Traducción    /     Translation
  Command_activate_command_4,
  Command_activate_command_5,
  Command_activate_command_6,
  Command_activate_command_7,
  Command_activate_command_8,
  Command_activate_command_9,
  Command_activate_command_10,
  Command_add_black_0,
  Command_add_black_1,
  Command_add_black_2,
  Command_add_black_3,
  Command_add_black_4
} = require("../languages/Config_Language.js");   //Traducción    /     Translation

module.exports = {
  name: `${Command_add_black_0}`,
  //cooldown: 3,
  aliases: [`${Command_add_black_1}`],
  description: `${Command_add_black_2}`,
  execute(message, args, client) {

    const function_Admin = require("../admin/function_Admin.js");
    var state_boolean = false
    user_boolean = {admin_moderator_user: state_boolean}   // Load in obj the value of TRANSLATOR_Enabled
    function_Admin.if_admin_moderator(message, user_boolean);

    if (user_boolean.admin_moderator_user ) {         //Returns Boolean: Is it administrator? (True or False   /      Devuelve booleano: ¿es administrador? (True o False

      if (client.prefix.length > 1) {
        if (!args.length)
        return message
          .reply(`${Command_add_black_3} ${message.client.prefix} ${Command_add_black_0} ${Command_add_black_4}`)
          .catch(console.error);
      } else {
        if (!args.length)
        return message
          .reply(`${Command_add_black_3} ${message.client.prefix}${Command_add_black_0} ${Command_add_black_4}`)
          .catch(console.error);
      }

      delete require.cache[require.resolve("../admin/config_black_list.json")];
      var obj = require ("../admin/config_black_list.json" ) ;
      var all_black_list= []; 
      for(i = 0; i < obj.BLACK_LIST.length; i++) {
        all_black_list.push(obj.BLACK_LIST[i]);
      }
      all_black_list.push(args[0])
      var all_black_list2= {"BLACK_LIST": all_black_list}; 
      delete require.cache[require.resolve("../admin/config_black_list.json")];

      //Se graba en el archivo el valor
      var fs = require('fs');
      fs.exists("./admin/config_black_list.json", function(exists){
        if(exists){
          console.log(`${Command_activate_command_4}`);
          fs.readFile( "./admin/config_black_list.json", function readFileCallback(error, data){
            if (error){
              console.log(error);  
            } else {
              var json = JSON.stringify(all_black_list2, null,1); 
              fs.renameSync( "./admin/config_black_list.json", "./admin/config_black_list.json.bak")
              fs.writeFile( "./admin/config_black_list.json", json, 'utf8', function (error2) {
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
          fs.writeFile( "./admin/config_black_list.json", json, 'utf8', function (error) {
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
