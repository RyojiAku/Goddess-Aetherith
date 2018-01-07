const Discord = require('discord.js');
const client = new Discord.Client();

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
    if (message.content === '!kheldorguide') {
    	message.reply('Here my Child: https://puu.sh/yW7O2/6bd554ad5d.png');
  	}
});

client.on('message', message => {
    if (message.content === '!help') {
    	message.reply('Only guides available: !kheldorguide');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
