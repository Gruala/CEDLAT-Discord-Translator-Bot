const {                                           //Traducción    /     Translation
  Command_connection_0,
  Command_connection_1,
  Command_connection_2
} = require("../languages/Config_Language.js");   //Traducción    /     Translation

module.exports = {
    name: `${Command_connection_0}`,
    //cooldown: 3,
    //aliases: [`${Command_connection_1}`],
    description: `${Command_connection_2}`,
    async execute(message, args, client) {

      const function_Connection = require("../config_connection/function_Connection.js");
      function_Connection.connection_txt(message ,client);

    }
  };