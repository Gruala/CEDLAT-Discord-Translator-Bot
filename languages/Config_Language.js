let config;

try {
  //config = require("./Language_Chinese.json");
  //config = require("./Language_Czech.json");
  config = require("./Language_English.json");
  //config = require("./Language_French.json");
  //config = require("./Language_German.json");
  //config = require("./Language_Hungarian.json");
  //config = require("./Language_Italian.json");
  //config = require("./Language_Russian.json");
  //config = require("./Language_Spanish.json");
  //config = require("./Language_Ukrainian.json");
} catch (error) {
  config = null;
}
exports.Events_Ready = config ? config.Events_Ready : process.env.Events_Ready;
exports.Events_Reconnecting = config ? config.Events_Reconnecting : process.env.Events_Reconnecting;
exports.Events_Disconnect = config ? config.Events_Disconnect : process.env.Events_Disconnect;

exports.Error_Client = config ? config.Error_Client : process.env.Error_Client;
exports.Error_ShardError = config ? config.Error_ShardError : process.env.Error_ShardError;
exports.Error_Warn = config ? config.Error_Warn : process.env.Error_Warn;
exports.Error_UnhandledRejection = config ? config.Error_UnhandledRejection : process.env.Error_UnhandledRejection;
exports.Error_UncaughtException = config ? config.Error_UncaughtException : process.env.Error_UncaughtException;

exports.Connection_As = config ? config.Connection_As : process.env.Connection_As;
exports.Connection_Servers = config ? config.Connection_Servers : process.env.Connection_Servers;
exports.Connection_Total_Servers = config ? config.Connection_Total_Servers : process.env.Connection_Total_Servers;
exports.Connection_Channels = config ? config.Connection_Channels : process.env.Connection_Channels;
exports.Connection_Categories = config ? config.Connection_Categories : process.env.Connection_Categories;
exports.Connection_Voice = config ? config.Connection_Voice : process.env.Connection_Voice;
exports.Connection_Text = config ? config.Connection_Text : process.env.Connection_Text;
exports.Connection_members_total = config ? config.Connection_members_total : process.env.Connection_members_total;
exports.Connection_users_total = config ? config.Connection_users_total : process.env.Connection_users_total;
exports.Connection_Members_online = config ? config.Connection_Members_online : process.env.Connection_Members_online;
exports.Connection_Users_online = config ? config.Connection_Users_online : process.env.Connection_Users_online;
exports.Connection_Client_online = config ? config.Connection_Client_online : process.env.Connection_Client_online;
exports.Connection_Server_online = config ? config.Connection_Server_online : process.env.Connection_Server_online;
exports.Connection_Time_Client = config ? config.Connection_Time_Client : process.env.Connection_Time_Client;
exports.Connection_Time_Server = config ? config.Connection_Time_Server : process.env.Connection_Time_Server;
exports.Connection_Days = config ? config.Connection_Days : process.env.Connection_Days;
exports.Connection_Hours = config ? config.Connection_Hours : process.env.Connection_Hours;
exports.Connection_Minutes = config ? config.Connection_Minutes : process.env.Connection_Minutes;
exports.Connection_Seconds = config ? config.Connection_Seconds : process.env.Connection_Seconds;
exports.Connection_Total_Seconds_Bot = config ? config.Connection_Total_Seconds_Bot : process.env.Connection_Total_Seconds_Bot;
exports.Connection_Total_Seconds_Server = config ? config.Connection_Total_Seconds_Server : process.env.Connection_Total_Seconds_Server;
exports.Connection_Token = config ? config.Connection_Token : process.env.Connection_Token;
exports.Connection_Owner = config ? config.Connection_Owner : process.env.Connection_Owner;
exports.Connection_URL = config ? config.Connection_URL : process.env.Connection_URL;

exports.Header_Team = config ? config.Header_Team : process.env.Header_Team;
exports.Header_LINE1 = config ? config.Header_LINE1 : process.env.Header_LINE1;
exports.Header_LINE2 = config ? config.Header_LINE2 : process.env.Header_LINE2;
exports.Header_LINE3 = config ? config.Header_LINE3 : process.env.Header_LINE3;
exports.Header_LINE4 = config ? config.Header_LINE4 : process.env.Header_LINE4;
exports.Header_LINE5 = config ? config.Header_LINE5 : process.env.Header_LINE5;

exports.Stats_Getting = config ? config.Stats_Getting : process.env.Stats_Getting;
exports.Stats_STATISTICS = config ? config.Stats_STATISTICS : process.env.Stats_STATISTICS;
exports.Stats_Server_Memory = config ? config.Stats_Server_Memory : process.env.Stats_Server_Memory;
exports.Stats_Nodejs_Memory = config ? config.Stats_Nodejs_Memory : process.env.Stats_Nodejs_Memory;
exports.Stats_Nodejs_Version = config ? config.Stats_Nodejs_Version : process.env.Stats_Nodejs_Version;
exports.Stats_Region = config ? config.Stats_Region : process.env.Stats_Region;
exports.Stats_Connected_Server = config ? config.Stats_Connected_Server : process.env.Stats_Connected_Server;

exports.Region_America = config ? config.Region_America : process.env.Region_America;
exports.Region_Europe = config ? config.Region_Europe : process.env.Region_Europe;
exports.Region_Russia = config ? config.Region_Russia : process.env.Region_Russia;
exports.Region_Asia = config ? config.Region_Asia : process.env.Region_Asia;
exports.Region_China = config ? config.Region_China : process.env.Region_China;
exports.Region_Japan = config ? config.Region_Japan : process.env.Region_Japan;
exports.Region_Signapore = config ? config.Region_Signapore : process.env.Region_Signapore;
exports.Region_South_America = config ? config.Region_South_America : process.env.Region_South_America;
exports.Region_Australia = config ? config.Region_Australia : process.env.Region_Australia;
exports.Region_Percentages = config ? config.Region_Percentages : process.env.Region_Percentages;
exports.Region_Server_are = config ? config.Region_Server_are : process.env.Region_Server_are;

exports.Admin_Report = config ? config.Admin_Report : process.env.Admin_Report;
exports.Admin_Not_Admin = config ? config.Admin_Not_Admin : process.env.Admin_Not_Admin;
exports.Admin_Not_Command_0 = config ? config.Admin_Not_Command_0 : process.env.Admin_Not_Command_0;
exports.Admin_Not_Command_1 = config ? config.Admin_Not_Command_1 : process.env.Admin_Not_Command_1;
exports.Admin_Not_Command_2 = config ? config.Admin_Not_Command_2 : process.env.Admin_Not_Command_2;

exports.Command_wait = config ? config.Command_wait : process.env.Command_wait;
exports.Command_before = config ? config.Command_before : process.env.Command_before;
exports.Command_error = config ? config.Command_error : process.env.Command_error;

exports.Command_activate_command_0 = config ? config.Command_activate_command_0 : process.env.Command_activate_command_0;
exports.Command_activate_command_1 = config ? config.Command_activate_command_1 : process.env.Command_activate_command_1;
exports.Command_activate_command_2 = config ? config.Command_activate_command_2 : process.env.Command_activate_command_2;
exports.Command_activate_command_3 = config ? config.Command_activate_command_3 : process.env.Command_activate_command_3;
exports.Command_activate_command_4 = config ? config.Command_activate_command_4 : process.env.Command_activate_command_4;
exports.Command_activate_command_5 = config ? config.Command_activate_command_5 : process.env.Command_activate_command_5;
exports.Command_activate_command_6 = config ? config.Command_activate_command_6 : process.env.Command_activate_command_6;
exports.Command_activate_command_7 = config ? config.Command_activate_command_7 : process.env.Command_activate_command_7;
exports.Command_activate_command_8 = config ? config.Command_activate_command_8 : process.env.Command_activate_command_8;
exports.Command_activate_command_9 = config ? config.Command_activate_command_9 : process.env.Command_activate_command_9;
exports.Command_activate_command_10 = config ? config.Command_activate_command_10 : process.env.Command_activate_command_10;

exports.Command_activate_black_list_0 = config ? config.Command_activate_black_list_0 : process.env.Command_activate_black_list_0;
exports.Command_activate_black_list_1 = config ? config.Command_activate_black_list_1 : process.env.Command_activate_black_list_1;
exports.Command_activate_black_list_2 = config ? config.Command_activate_black_list_2 : process.env.Command_activate_black_list_2;

exports.Command_activate_command_moderator_0 = config ? config.Command_activate_command_moderator_0 : process.env.Command_activate_command_moderator_0;
exports.Command_activate_command_moderator_1 = config ? config.Command_activate_command_moderator_1 : process.env.Command_activate_command_moderator_1;
exports.Command_activate_command_moderator_2 = config ? config.Command_activate_command_moderator_2 : process.env.Command_activate_command_moderator_2;

exports.Command_activate_command_user_0 = config ? config.Command_activate_command_user_0 : process.env.Command_activate_command_user_0;
exports.Command_activate_command_user_1 = config ? config.Command_activate_command_user_1 : process.env.Command_activate_command_user_1;
exports.Command_activate_command_user_2 = config ? config.Command_activate_command_user_2 : process.env.Command_activate_command_user_2;

exports.Command_add_black_0 = config ? config.Command_add_black_0 : process.env.Command_add_black_0;
exports.Command_add_black_1 = config ? config.Command_add_black_1 : process.env.Command_add_black_1;
exports.Command_add_black_2 = config ? config.Command_add_black_2 : process.env.Command_add_black_2;
exports.Command_add_black_3 = config ? config.Command_add_black_3 : process.env.Command_add_black_3;
exports.Command_add_black_4 = config ? config.Command_add_black_4 : process.env.Command_add_black_4;

exports.Command_add_moderator_0 = config ? config.Command_add_moderator_0 : process.env.Command_add_moderator_0;
exports.Command_add_moderator_1 = config ? config.Command_add_moderator_1 : process.env.Command_add_moderator_1;
exports.Command_add_moderator_2 = config ? config.Command_add_moderator_2 : process.env.Command_add_moderator_2;
exports.Command_add_moderator_3 = config ? config.Command_add_moderator_3 : process.env.Command_add_moderator_3;
exports.Command_add_moderator_4 = config ? config.Command_add_moderator_4 : process.env.Command_add_moderator_4;

exports.Command_clear_0 = config ? config.Command_clear_0 : process.env.Command_clear_0;
exports.Command_clear_1 = config ? config.Command_clear_1 : process.env.Command_clear_1;
exports.Command_clear_2 = config ? config.Command_clear_2 : process.env.Command_clear_2;

exports.Command_connection_0 = config ? config.Command_connection_0 : process.env.Command_connection_0;
exports.Command_connection_1 = config ? config.Command_connection_1 : process.env.Command_connection_1;
exports.Command_connection_2 = config ? config.Command_connection_2 : process.env.Command_connection_2;

exports.Command_connection_log_0 = config ? config.Command_connection_log_0 : process.env.Command_connection_log_0;
exports.Command_connection_log_1 = config ? config.Command_connection_log_1 : process.env.Command_connection_log_1;
exports.Command_connection_log_2 = config ? config.Command_connection_log_2 : process.env.Command_connection_log_2;

exports.Command_help_0 = config ? config.Command_help_0 : process.env.Command_help_0;
exports.Command_help_1 = config ? config.Command_help_1 : process.env.Command_help_1;
exports.Command_help_2 = config ? config.Command_help_2 : process.env.Command_help_2;
exports.Command_help_3 = config ? config.Command_help_3 : process.env.Command_help_3;
exports.Command_help_4 = config ? config.Command_help_4 : process.env.Command_help_4;

exports.Command_invite_0 = config ? config.Command_invite_0 : process.env.Command_invite_0;
exports.Command_invite_1 = config ? config.Command_invite_1 : process.env.Command_invite_1;
exports.Command_invite_2 = config ? config.Command_invite_2 : process.env.Command_invite_2;
exports.Command_invite_3 = config ? config.Command_invite_3 : process.env.Command_invite_3;

exports.Command_ping_0 = config ? config.Command_ping_0 : process.env.Command_ping_0;
exports.Command_ping_1 = config ? config.Command_ping_1 : process.env.Command_ping_1;
exports.Command_ping_2 = config ? config.Command_ping_2 : process.env.Command_ping_2;
exports.Command_ping_3 = config ? config.Command_ping_3 : process.env.Command_ping_3;

exports.Command_stats_0 = config ? config.Command_stats_0 : process.env.Command_stats_0;
exports.Command_stats_1 = config ? config.Command_stats_1 : process.env.Command_stats_1;
exports.Command_stats_2 = config ? config.Command_stats_2 : process.env.Command_stats_2;

exports.Command_uptime_0 = config ? config.Command_uptime_0 : process.env.Command_uptime_0;
exports.Command_uptime_1 = config ? config.Command_uptime_1 : process.env.Command_uptime_1;
exports.Command_uptime_2 = config ? config.Command_uptime_2 : process.env.Command_uptime_2;
exports.Command_uptime_3 = config ? config.Command_uptime_3 : process.env.Command_uptime_3;
exports.Command_uptime_4 = config ? config.Command_uptime_4 : process.env.Command_uptime_4;
exports.Command_uptime_5 = config ? config.Command_uptime_5 : process.env.Command_uptime_5;
exports.Command_uptime_6 = config ? config.Command_uptime_6 : process.env.Command_uptime_6;
exports.Command_uptime_7 = config ? config.Command_uptime_7 : process.env.Command_uptime_7;

exports.Command_version_0 = config ? config.Command_version_0 : process.env.Command_version_0;
exports.Command_version_1 = config ? config.Command_version_1 : process.env.Command_version_1;
exports.Command_version_2 = config ? config.Command_version_2 : process.env.Command_version_2;
exports.Command_version_3 = config ? config.Command_version_3 : process.env.Command_version_3;

// Texto del reproductor y texto para los comandos del reproductor    //     Player text and text for player commands
exports.Config_Sound_0 = config ? config.Config_Sound_0 : process.env.Config_Sound_0;

exports.Config_Sound_play_0 = config ? config.Config_Sound_play_0 : process.env.Config_Sound_play_0;
exports.Config_Sound_play_1 = config ? config.Config_Sound_play_1 : process.env.Config_Sound_play_1;
exports.Config_Sound_play_2 = config ? config.Config_Sound_play_2 : process.env.Config_Sound_play_2;
exports.Config_Sound_play_3 = config ? config.Config_Sound_play_3 : process.env.Config_Sound_play_3;
exports.Config_Sound_play_4 = config ? config.Config_Sound_play_4 : process.env.Config_Sound_play_4;
exports.Config_Sound_play_5 = config ? config.Config_Sound_play_5 : process.env.Config_Sound_play_5;
exports.Config_Sound_play_6 = config ? config.Config_Sound_play_6 : process.env.Config_Sound_play_6;
exports.Config_Sound_play_7 = config ? config.Config_Sound_play_7 : process.env.Config_Sound_play_7;
exports.Config_Sound_play_8 = config ? config.Config_Sound_play_8 : process.env.Config_Sound_play_8;
exports.Config_Sound_play_9 = config ? config.Config_Sound_play_9 : process.env.Config_Sound_play_9;
exports.Config_Sound_play_10 = config ? config.Config_Sound_play_10 : process.env.Config_Sound_play_10;
exports.Config_Sound_play_11 = config ? config.Config_Sound_play_11 : process.env.Config_Sound_play_11;
exports.Config_Sound_play_12 = config ? config.Config_Sound_play_12 : process.env.Config_Sound_play_12;

exports.Command_clip_0 = config ? config.Command_clip_0 : process.env.Command_clip_0;
exports.Command_clip_1 = config ? config.Command_clip_1 : process.env.Command_clip_1;
exports.Command_clip_2 = config ? config.Command_clip_2 : process.env.Command_clip_2;
exports.Command_clip_3 = config ? config.Command_clip_3 : process.env.Command_clip_3;
exports.Command_clip_4 = config ? config.Command_clip_4 : process.env.Command_clip_4;
exports.Command_clip_5 = config ? config.Command_clip_5 : process.env.Command_clip_5;
exports.Command_clip_6 = config ? config.Command_clip_6 : process.env.Command_clip_6;

exports.Command_clips_0 = config ? config.Command_clips_0 : process.env.Command_clips_0;
exports.Command_clips_1 = config ? config.Command_clips_1 : process.env.Command_clips_1;
exports.Command_clips_2 = config ? config.Command_clips_2 : process.env.Command_clips_2;
exports.Command_clips_3 = config ? config.Command_clips_3 : process.env.Command_clips_3;

exports.Command_loop_0 = config ? config.Command_loop_0 : process.env.Command_loop_0;
exports.Command_loop_1 = config ? config.Command_loop_1 : process.env.Command_loop_1;
exports.Command_loop_2 = config ? config.Command_loop_2 : process.env.Command_loop_2;
exports.Command_loop_3 = config ? config.Command_loop_3 : process.env.Command_loop_3;
exports.Command_loop_4 = config ? config.Command_loop_4 : process.env.Command_loop_4;

exports.Command_lyrics_0 = config ? config.Command_lyrics_0 : process.env.Command_lyrics_0;
exports.Command_lyrics_1 = config ? config.Command_lyrics_1 : process.env.Command_lyrics_1;
exports.Command_lyrics_2 = config ? config.Command_lyrics_2 : process.env.Command_lyrics_2;
exports.Command_lyrics_3 = config ? config.Command_lyrics_3 : process.env.Command_lyrics_3;
exports.Command_lyrics_4 = config ? config.Command_lyrics_4 : process.env.Command_lyrics_4;
exports.Command_lyrics_5 = config ? config.Command_lyrics_5 : process.env.Command_lyrics_5;

exports.Command_move_0 = config ? config.Command_move_0 : process.env.Command_move_0;
exports.Command_move_1 = config ? config.Command_move_1 : process.env.Command_move_1;
exports.Command_move_2 = config ? config.Command_move_2 : process.env.Command_move_2;
exports.Command_move_3 = config ? config.Command_move_3 : process.env.Command_move_3;
exports.Command_move_4 = config ? config.Command_move_4 : process.env.Command_move_4;
exports.Command_move_5 = config ? config.Command_move_5 : process.env.Command_move_5;
exports.Command_move_6 = config ? config.Command_move_6 : process.env.Command_move_6;
exports.Command_move_7 = config ? config.Command_move_7 : process.env.Command_move_7;
exports.Command_move_8 = config ? config.Command_move_8 : process.env.Command_move_8;

exports.Command_np_0 = config ? config.Command_np_0 : process.env.Command_np_0;
exports.Command_np_1 = config ? config.Command_np_1 : process.env.Command_np_1;
exports.Command_np_2 = config ? config.Command_np_2 : process.env.Command_np_2;
exports.Command_np_3 = config ? config.Command_np_3 : process.env.Command_np_3;
exports.Command_np_4 = config ? config.Command_np_4 : process.env.Command_np_4;
exports.Command_np_5 = config ? config.Command_np_5 : process.env.Command_np_5;
exports.Command_np_6 = config ? config.Command_np_6 : process.env.Command_np_6;

exports.Command_pause_0 = config ? config.Command_pause_0 : process.env.Command_pause_0;
exports.Command_pause_1 = config ? config.Command_pause_1 : process.env.Command_pause_1;
exports.Command_pause_2 = config ? config.Command_pause_2 : process.env.Command_pause_2;
exports.Command_pause_3 = config ? config.Command_pause_3 : process.env.Command_pause_3;
exports.Command_pause_4 = config ? config.Command_pause_4 : process.env.Command_pause_4;

exports.Command_play_0 = config ? config.Command_play_0 : process.env.Command_play_0;
exports.Command_play_1 = config ? config.Command_play_1 : process.env.Command_play_1;
exports.Command_play_2 = config ? config.Command_play_2 : process.env.Command_play_2;
exports.Command_play_3 = config ? config.Command_play_3 : process.env.Command_play_3;
exports.Command_play_4 = config ? config.Command_play_4 : process.env.Command_play_4;
exports.Command_play_5 = config ? config.Command_play_5 : process.env.Command_play_5;
exports.Command_play_6 = config ? config.Command_play_6 : process.env.Command_play_6;
exports.Command_play_7 = config ? config.Command_play_7 : process.env.Command_play_7;
exports.Command_play_8 = config ? config.Command_play_8 : process.env.Command_play_8;
exports.Command_play_9 = config ? config.Command_play_9 : process.env.Command_play_9;
exports.Command_play_10 = config ? config.Command_play_10 : process.env.Command_play_10;
exports.Command_play_11 = config ? config.Command_play_11 : process.env.Command_play_11;
exports.Command_play_12 = config ? config.Command_play_12 : process.env.Command_play_12;

exports.Command_playlist_0 = config ? config.Command_playlist_0 : process.env.Command_playlist_0;
exports.Command_playlist_1 = config ? config.Command_playlist_1 : process.env.Command_playlist_1;
exports.Command_playlist_2 = config ? config.Command_playlist_2 : process.env.Command_playlist_2;
exports.Command_playlist_3 = config ? config.Command_playlist_3 : process.env.Command_playlist_3;
exports.Command_playlist_4 = config ? config.Command_playlist_4 : process.env.Command_playlist_4;
exports.Command_playlist_5 = config ? config.Command_playlist_5 : process.env.Command_playlist_5;
exports.Command_playlist_6 = config ? config.Command_playlist_6 : process.env.Command_playlist_6;
exports.Command_playlist_7 = config ? config.Command_playlist_7 : process.env.Command_playlist_7;
exports.Command_playlist_8 = config ? config.Command_playlist_8 : process.env.Command_playlist_8;
exports.Command_playlist_9 = config ? config.Command_playlist_9 : process.env.Command_playlist_9;
exports.Command_playlist_10 = config ? config.Command_playlist_10 : process.env.Command_playlist_10;
exports.Command_playlist_11 = config ? config.Command_playlist_11 : process.env.Command_playlist_11;
exports.Command_playlist_12 = config ? config.Command_playlist_12 : process.env.Command_playlist_12;
exports.Command_playlist_13 = config ? config.Command_playlist_13 : process.env.Command_playlist_13;

exports.Command_pruning_0 = config ? config.Command_pruning_0 : process.env.Command_pruning_0;
exports.Command_pruning_1 = config ? config.Command_pruning_1 : process.env.Command_pruning_1;
exports.Command_pruning_2 = config ? config.Command_pruning_2 : process.env.Command_pruning_2;
exports.Command_pruning_3 = config ? config.Command_pruning_3 : process.env.Command_pruning_3;
exports.Command_pruning_4 = config ? config.Command_pruning_4 : process.env.Command_pruning_4;

exports.Command_queue_0 = config ? config.Command_queue_0 : process.env.Command_queue_0;
exports.Command_queue_1 = config ? config.Command_queue_1 : process.env.Command_queue_1;
exports.Command_queue_2 = config ? config.Command_queue_2 : process.env.Command_queue_2;
exports.Command_queue_3 = config ? config.Command_queue_3 : process.env.Command_queue_3;
exports.Command_queue_4 = config ? config.Command_queue_4 : process.env.Command_queue_4;
exports.Command_queue_5 = config ? config.Command_queue_5 : process.env.Command_queue_5;
exports.Command_queue_6 = config ? config.Command_queue_6 : process.env.Command_queue_6;
exports.Command_queue_7 = config ? config.Command_queue_7 : process.env.Command_queue_7;

exports.Command_remove_0 = config ? config.Command_remove_0 : process.env.Command_remove_0;
exports.Command_remove_1 = config ? config.Command_remove_1 : process.env.Command_remove_1;
exports.Command_remove_2 = config ? config.Command_remove_2 : process.env.Command_remove_2;
exports.Command_remove_3 = config ? config.Command_remove_3 : process.env.Command_remove_3;
exports.Command_remove_4 = config ? config.Command_remove_4 : process.env.Command_remove_4;
exports.Command_remove_5 = config ? config.Command_remove_5 : process.env.Command_remove_5;
exports.Command_remove_6 = config ? config.Command_remove_6 : process.env.Command_remove_6;
exports.Command_remove_7 = config ? config.Command_remove_7 : process.env.Command_remove_7;

exports.Command_resume_0 = config ? config.Command_resume_0 : process.env.Command_resume_0;
exports.Command_resume_1 = config ? config.Command_resume_1 : process.env.Command_resume_1;
exports.Command_resume_2 = config ? config.Command_resume_2 : process.env.Command_resume_2;
exports.Command_resume_3 = config ? config.Command_resume_3 : process.env.Command_resume_3;
exports.Command_resume_4 = config ? config.Command_resume_4 : process.env.Command_resume_4;
exports.Command_resume_5 = config ? config.Command_resume_5 : process.env.Command_resume_5;

exports.Command_search_0 = config ? config.Command_search_0 : process.env.Command_search_0;
exports.Command_search_1 = config ? config.Command_search_1 : process.env.Command_search_1;
exports.Command_search_2 = config ? config.Command_search_2 : process.env.Command_search_2;
exports.Command_search_3 = config ? config.Command_search_3 : process.env.Command_search_3;
exports.Command_search_4 = config ? config.Command_search_4 : process.env.Command_search_4;
exports.Command_search_5 = config ? config.Command_search_5 : process.env.Command_search_5;
exports.Command_search_6 = config ? config.Command_search_6 : process.env.Command_search_6;
exports.Command_search_7 = config ? config.Command_search_7 : process.env.Command_search_7;
exports.Command_search_8 = config ? config.Command_search_8 : process.env.Command_search_8;
exports.Command_search_9 = config ? config.Command_search_9 : process.env.Command_search_9;

exports.Command_shuffle_0 = config ? config.Command_shuffle_0 : process.env.Command_shuffle_0;
exports.Command_shuffle_1 = config ? config.Command_shuffle_1 : process.env.Command_shuffle_1;
exports.Command_shuffle_2 = config ? config.Command_shuffle_2 : process.env.Command_shuffle_2;
exports.Command_shuffle_3 = config ? config.Command_shuffle_3 : process.env.Command_shuffle_3;
exports.Command_shuffle_4 = config ? config.Command_shuffle_4 : process.env.Command_shuffle_4;

exports.Command_skip_0 = config ? config.Command_skip_0 : process.env.Command_skip_0;
exports.Command_skip_1 = config ? config.Command_skip_1 : process.env.Command_skip_1;
exports.Command_skip_2 = config ? config.Command_skip_2 : process.env.Command_skip_2;
exports.Command_skip_3 = config ? config.Command_skip_3 : process.env.Command_skip_3;
exports.Command_skip_4 = config ? config.Command_skip_4 : process.env.Command_skip_4;

exports.Command_skipto_0 = config ? config.Command_skipto_0 : process.env.Command_skipto_0;
exports.Command_skipto_1 = config ? config.Command_skipto_1 : process.env.Command_skipto_1;
exports.Command_skipto_2 = config ? config.Command_skipto_2 : process.env.Command_skipto_2;
exports.Command_skipto_3 = config ? config.Command_skipto_3 : process.env.Command_skipto_3;
exports.Command_skipto_4 = config ? config.Command_skipto_4 : process.env.Command_skipto_4;
exports.Command_skipto_5 = config ? config.Command_skipto_5 : process.env.Command_skipto_5;
exports.Command_skipto_6 = config ? config.Command_skipto_6 : process.env.Command_skipto_6;
exports.Command_skipto_7 = config ? config.Command_skipto_7 : process.env.Command_skipto_7;
exports.Command_skipto_8 = config ? config.Command_skipto_8 : process.env.Command_skipto_8;
exports.Command_skipto_9 = config ? config.Command_skipto_9 : process.env.Command_skipto_9;

exports.Command_stop_0 = config ? config.Command_stop_0 : process.env.Command_stop_0;
exports.Command_stop_1 = config ? config.Command_stop_1 : process.env.Command_stop_1;
exports.Command_stop_2 = config ? config.Command_stop_2 : process.env.Command_stop_2;
exports.Command_stop_3 = config ? config.Command_stop_3 : process.env.Command_stop_3;
exports.Command_stop_4 = config ? config.Command_stop_4 : process.env.Command_stop_4;


exports.Command_volume_0 = config ? config.Command_volume_0 : process.env.Command_volume_0;
exports.Command_volume_1 = config ? config.Command_volume_1 : process.env.Command_volume_1;
exports.Command_volume_2 = config ? config.Command_volume_2 : process.env.Command_volume_2;
exports.Command_volume_3 = config ? config.Command_volume_3 : process.env.Command_volume_3;
exports.Command_volume_4 = config ? config.Command_volume_4 : process.env.Command_volume_4;
exports.Command_volume_5 = config ? config.Command_volume_5 : process.env.Command_volume_5;
exports.Command_volume_6 = config ? config.Command_volume_6 : process.env.Command_volume_6;
exports.Command_volume_7 = config ? config.Command_volume_7 : process.env.Command_volume_7;
exports.Command_volume_8 = config ? config.Command_volume_8 : process.env.Command_volume_8;

// Texto del traductor y texto para los comandos del traductor    //     Translator text and text for translator commands
exports.translate_Nothing = config ? config.translate_Nothing : process.env.translate_Nothing;
exports.translate_Analyze = config ? config.translate_Analyze : process.env.translate_Analyze;
exports.translate_Detected = config ? config.translate_Detected : process.env.translate_Detected;
exports.translate_Report = config ? config.translate_Report : process.env.translate_Report;
exports.translate_Long = config ? config.translate_Long : process.env.translate_Long;
exports.translate_characters = config ? config.translate_characters : process.env.translate_characters;

exports.Command_activate_translation_0 = config ? config.Command_activate_translation_0 : process.env.Command_activate_translation_0;
exports.Command_activate_translation_1 = config ? config.Command_activate_translation_1 : process.env.Command_activate_translation_1;
exports.Command_activate_translation_2 = config ? config.Command_activate_translation_2 : process.env.Command_activate_translation_2;

exports.Command_activate_ts_channels_0 = config ? config.Command_activate_ts_channels_0 : process.env.Command_activate_ts_channels_0;
exports.Command_activate_ts_channels_1 = config ? config.Command_activate_ts_channels_1 : process.env.Command_activate_ts_channels_1;
exports.Command_activate_ts_channels_2 = config ? config.Command_activate_ts_channels_2 : process.env.Command_activate_ts_channels_2;

exports.Command_languages_0 = config ? config.Command_languages_0 : process.env.Command_languages_0;
exports.Command_languages_1 = config ? config.Command_languages_1 : process.env.Command_languages_1;
exports.Command_languages_2 = config ? config.Command_languages_2 : process.env.Command_languages_2;
exports.Command_languages_3 = config ? config.Command_languages_3 : process.env.Command_languages_3;

exports.Command_translation_0 = config ? config.Command_translation_0 : process.env.Command_translation_0;
exports.Command_translation_1 = config ? config.Command_translation_1 : process.env.Command_translation_1;
exports.Command_translation_2 = config ? config.Command_translation_2 : process.env.Command_translation_2;
exports.Command_translation_3 = config ? config.Command_translation_3 : process.env.Command_translation_3;
exports.Command_translation_4 = config ? config.Command_translation_4 : process.env.Command_translation_4;
exports.Command_translation_5 = config ? config.Command_translation_5 : process.env.Command_translation_5;

