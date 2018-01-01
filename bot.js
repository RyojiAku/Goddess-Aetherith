const Discord = require('discord.js');
const client = new Discord.Client();
var currentHour = new Date().getHours();
var currentMin = new Date().getMinutes();

client.on('message', (message) => {

    if(message.content == '~~test') {
        message.channel.send(1 + ':' + 1);
    }

});

client.on('ready', () => {
    console.log('I am ready!')
    client.user.setPresence({ game: { name: 'Type !help', type: 0 } });
});

client.on('message', message => {
    if (message.content === 'Hi Goddess') {
    	message.channel.send('Hello my Child.');
  	}
});

client.on('message', message => {
    if (message.content === '!newbieguide') {
    	message.reply('Follow this path: https://puu.sh/yRHnV/48c7ded27a.png');
  	}
});

client.on('message', message => {
    if (message.content === '!help') {
    	message.reply('Only guides available: !newbieguide');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
