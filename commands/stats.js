const {                                           //Traducción    /     Translation
  Command_stats_0,
  Command_stats_1,
  Command_stats_2
} = require("../languages/Config_Language.js");   //Traducción    /     Translation

module.exports = {
    name: `${Command_stats_0}`,
    //cooldown: 3,
    //aliases: [`${Command_stats_1}`],
    description: `${Command_stats_2}`,
    async execute(message, args, client) {
      
      const function_Connection = require("../config_connection/function_Connection.js");
      function_Connection.connection_stats(message ,client);

    }
  };








