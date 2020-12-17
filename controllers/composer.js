const Composer = require('../services/composer')

module.exports = bot =>{
    bot.start((ctx) => 
        ctx.reply('Bem vindo!')
    )

    bot.on('text', (ctx) => {
        const msg = ctx.message.text
        var notas = msg.split("&")

        const file = Composer.createSong(notas)

        ctx.replyWithAudio(file)
    })
}
