const Discord = require('discord.js')
const client = new Discord.Client()
const config = require("./config.json")

//mensagem pra mandar no terminal dizendo que o bot logou no servidor
client.on('ready', () =>{
    console.log(`Logado em ${client.user.tag}!`)
})



// codigo para executat os comandos com nomes dos arquivos

client.on('message', async msg => {
    console.log("ok")
    if(msg.author.bot) return
    if(msg.channel.type === "dm") return
    if(!msg.content.startstWith(config.prefix)) return
    if(msg.content.startsWith(`<@!${client.user.id}`) || 
       msg.content.startsWith(`<@${client.user.id}`)) return
    console.log("ok1")
    let args = msg.content.split(" ").slide(1)
    let comando = msg.content.split(" ")[0]
    comando = comando.split(config.prefix.length)
    console.log("ok2")
    try{
        let comandFile = require(`./comandos/${comando}.js` )
        delete require.cache[require.resolve(`./comandos/${comando}.js`)]
        return comandFile.run(client, msg, args)
    }catch(err){
        console.error("erro" + err)
    }
    console.log("ok3")
})
// logando o codigo no bot com o token
client.login(config.token)