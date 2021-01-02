let config;

try {
  config = require("./config_connection_Example1.json");
  //config = require("./config_connection_Example2.json");
} catch (error) {
  config = null;
}

exports.TOKEN = config ? config.TOKEN : process.env.TOKEN;
exports.OWNER = config ? config.OWNER : process.env.OWNER;
exports.PLAYSTATUS = config ? config.PLAYSTATUS : process.env.PLAYSTATUS;
exports.PREFIX = config ? config.PREFIX : process.env.PREFIX;

