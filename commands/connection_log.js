const {                                           //Traducción    /     Translation
  Command_connection_log_0,
  Command_connection_log_1,
  Command_connection_log_2
} = require("../languages/Config_Language.js");   //Traducción    /     Translation

module.exports = {
    name: `${Command_connection_log_0}`,
    cooldown: 3,
    aliases: [`${Command_connection_log_1}`],
    description: `${Command_connection_log_2}`,
    async execute(message, args, client) {

      const function_Admin = require("../admin/function_Admin.js");
      var state_boolean = false
      user_boolean = {admin_user: state_boolean}   // Load in obj the value of TRANSLATOR_Enabled
      function_Admin.detect_admin(message, user_boolean);
  
          if (user_boolean.admin_user ) {         //Returns Boolean: Is it administrator? (True or False   /      Devuelve booleano: ¿es administrador? (True o False
            const {TOKEN, OWNER, PLAYSTATUS, PREFIX} = require("../config_connection/Config_Connection.js");
            const function_Connection = require("../config_connection/function_Connection.js");
            function_Connection.connection_log(client, TOKEN, OWNER, PLAYSTATUS);     //client, TOKEN, OWNER, PLAYSTATUS //Loads connection data into the Log    /     Carga datos de la conexión en el Log
          }

    }
  };