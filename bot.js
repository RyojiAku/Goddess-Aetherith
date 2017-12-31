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
    if (message.content === '!newbieguide') {
    	message.reply('Follow this path: https://puu.sh/yRHnV/48c7ded27a.png');
  	}
});

client.on('message', message => {
    if (message.content === '!help') {
    	message.reply('Guides: !newbieguide, !ankouguide, !kheldorguide, !kalgasguide, !snowyguide, !skyguide, !deathwingguide, !gardenguide, !ragefireguide, !startholmeguide');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
