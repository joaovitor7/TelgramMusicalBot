require('dotenv').config()
const { Telegraf } = require('telegraf')
const consign = require('consign')
const { TOKEN } = process.env

module.exports = () => {
    
    const bot = new Telegraf(TOKEN)

    consign()
        .include('controllers')
        .into(bot)

    return bot
}

