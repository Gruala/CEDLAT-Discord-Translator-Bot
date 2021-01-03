const {                                           //Traducción    /     Translation
    Command_clear_0,
    Command_clear_1,
    Command_clear_2
  } = require("../languages/Config_Language.js");   //Traducción    /     Translation
const {STRING_TEXT_NO_CLEAR} = require("../commands_function/config_command.json");

module.exports = {
    name: `${Command_clear_0}`,
    cooldown: 3,
    aliases: [`${Command_clear_1}`],
    description: `${Command_clear_2} ${STRING_TEXT_NO_CLEAR}`,
    async execute(message, args, client, GENERAL_ENABLED) {
    
    const function_Admin = require("../admin/function_Admin.js");
    var state_boolean = false
    user_boolean = {admin_moderator_user: state_boolean}   // Load in obj the value of TRANSLATOR_Enabled
    function_Admin.if_admin_moderator(message, user_boolean);

        if (user_boolean.admin_moderator_user ) {         //Returns Boolean: Is it administrator? (True or False   /      Devuelve booleano: ¿es administrador? (True o False
            //Delete all messages on the channel except those you have the keyword: STRING_TEXT_NO_CLEAR      
            //Borra todos los mensajes del canal menos los que tienes la palabra clave: STRING_TEXT_NO_CLEAR
            var canalActual = {}
            canalActual.topic = message.channel.topic
            canalActual.id = message.channel.id
            canalActual.canal = message.channel
            canalABorrar = [canalActual]
            for(i = 0; i < [canalABorrar.length]; i++) {
                canalABorrar[i].canal.messages.fetch({ limit:100}).then( messages => {
                    messages.forEach(message => {
                    if(message.content != undefined && message.content.includes(GENERAL_ENABLED.string_Text_No_Clear)) {
                        return; // Si el texto del mensaje incluye el caracter designado, no se borrado, se continua.
                    } else { //  block of code to be executed if the condition is false
                        message.delete();  //Borra el mensaje. Comentado temporalmente
                    }
                    });
                })   
            } 
        }
        return ;
    }
  };
