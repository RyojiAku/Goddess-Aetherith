var Discord = require('discord.js');
var bot = new Discord.Client()

bot.on('ready', function() {
    console.log(bot.user.username);
});

bot.on('message', function() {
    if (message.content === "$loop") { 
      var interval = setInterval (function () {
        bot.sendMessage(message.channel, "123")
      }, 1 * 1000); 
    }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
