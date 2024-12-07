// JS discord bot 
require('dotenv').config(); 
const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('Bot is running!'));

app.listen(process.env.PORT || 3000, () => console.log('Server is running.'))

const { Client, GatewayIntentBits } = require('discord.js');

// Create a new client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

// 
client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

//
const PREFIX = '¬'; // Command prefix

//Needed to add spam protection

const messageCounts = new Map();
const SPAM_LIMIT = 5; // Max messages allowed
const TIME_FRAME = 10000; // Time frame in milliseconds (10 seconds)

// Respond to messages
client.on('messageCreate', message => {

    if (message.content === `${PREFIX}ping`) {
        message.channel.send('Pong!');
    }
    if (message.content === `${PREFIX}sigma`) {
        message.channel.send('brainrot...');
    }
});

// Login to Discord using the token from the .env file
client.login(process.env.DISCORD_TOKEN);
