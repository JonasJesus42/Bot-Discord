const Discord = require('discord.js')
const client = new Discord.Client()

client.on('ready', () =>{
    console.log(`Logado em ${client.user.tag}!`)
})

client.on('message', msg =>{
    if (msg.content === 'ping'){
        msg.reply('Pong!')
    }
})

client.login('Nzk0NjE1NTE5NjMzODY2NzYy.X-9ZXw.Socz1jsweAtQKKiSOgD_PPgr9oA')