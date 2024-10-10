# Telegram Joke Bot

This Telegram bot delivers random jokes to users on demand. It uses the Joke API to fetch jokes and Axios for making network calls.

## Features

- Fetch random jokes from an external API
- Easy-to-use commands for joke retrieval
- Seamless integration with Telegram

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js installed on your machine
- A Telegram account
- Bot token from BotFather on Telegram

## Setup

1. Clone this repository:

```bash
git clone https://github.com/yourusername/telegram-joke-bot.git
```
2. Navigate to the project directory:
```bash
cd telegram-joke-bot
```
3. Install the dependencies:
```bash
npm install
```
4. Create a `.env` file in the root directory and add your Telegram bot token:
```bash
BOT_TOKEN="Your token here"
```
5. Start the bot:
```bash
node index.js
```

Usage
Once the bot is running, you can interact with it on Telegram using the following commands:


```/start``` - Initiate the bot and receive a welcome message

```/joke``` - Receive a random joke