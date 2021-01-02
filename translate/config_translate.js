let config;

try {
  config = require("./config_translate.json");
} catch (error) {
  config = null;
}

exports.TRANSLATOR_Enabled = config ? config.TRANSLATOR_Enabled : process.env.TRANSLATOR_Enabled;
exports.TSCHANNELS_Enabled = config ? config.TSCHANNELS_Enabled : process.env.TSCHANNELS_Enabled;
exports.SEPARATE_LANGUAGE = config ? config.SEPARATE_LANGUAGE : process.env.SEPARATE_LANGUAGE;
exports.MAX_TRANSLATE = config ? config.MAX_TRANSLATE : process.env.MAX_TRANSLATE;
exports.MAX_TEXT_ICON = config ? config.MAX_TEXT_ICON : process.env.MAX_TEXT_ICON;
exports.STRING_TEXT_NO_CLEAR = config ? config.STRING_TEXT_NO_CLEAR : process.env.STRING_TEXT_NO_CLEAR;

