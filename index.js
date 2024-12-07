// JS discord bot 

require('dotenv').config(); 

const { Client, GatewayIntentBits } = require('discord.js');

// Create a new client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

// 
client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

// Respond to messages
client.on('messageCreate', message => {
    if (message.content === '!ping') {
        message.channel.send('Pong!');
    }
    if (message.content === '!sigma') {
        message.channel.send('brainrot...');
    }
});

// Login to Discord using the token from the .env file
client.login(process.env.DISCORD_TOKEN);
