const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!')
    bot.user.setPresence({ game: { name: 'hello', type: 0 } });
});

client.on('message', message => {
    if (message.content === 'Hi Goddess') {
    	message.channel.send('Hello my Child.');
  	}
});

client.on('message', message => {
    if (message.content === '!newbieguide') {
    	message.reply('Follow this path: https://puu.sh/yRswX/7ab72087f2.png');
  	}
});

client.on('message', message => {
    if (message.content === 'bing') {
    	message.reply('BONG!');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
