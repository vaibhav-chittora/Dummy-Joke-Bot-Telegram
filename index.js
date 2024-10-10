const axios = require('axios');
const TelegramBot = require('node-telegram-bot-api');
const dotenv = require('dotenv');
dotenv.config();

//token is coming from .env file, and we have used @BotFather to create the bot in telegram
const token = process.env.BOT_TOKEN;

// Create a new bot instance that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, { polling: true });

bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    const message = msg.text;

    console.log("Message is ", message);

    // Check if the message is "/start"
    if (message === '/start') {
        bot.sendMessage(chatId, 'Hello, I am a joke bot. Please type /joke to get a joke.');
    } 
    // Check if the message is "/joke"
    else if (message === '/joke') {
        bot.sendMessage(chatId, 'Here’s a funny joke: Why don’t skeletons fight each other? They don’t have the guts!');
    } 
    // Handle other messages
    else {
        bot.sendMessage(chatId, 'I did not understand that. Please type /start to start or /joke for a joke.');
    }
});


bot.onText(/\/start/, (msg) => {

    bot.sendMessage(msg.chat.id, 'Welcome to the Joke Bot!');
});

bot.onText(/\/joke/, async (msg) => {
    const joke = await axios.get('http://www.official-joke-api.appspot.com/random_joke')
    const setup = joke.data.setup;
    const punchline = joke.data.punchline;
    bot.sendMessage(msg.chat.id, setup);
    setTimeout(() => {
        bot.sendMessage(msg.chat.id, punchline);
    }, 3000);
})