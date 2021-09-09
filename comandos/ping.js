const Discord = require("discord.js")

module.export = async (client, msg, args) => {
    if (msg.content === 'ping'){
        msg.reply('Pong!')
    }
}
