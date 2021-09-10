const Discord = require('discord.js')
const client = new Discord.Client()
const config = require("./config.json")

//mensagem pra mandar no terminal dizendo que o bot logou no servidor
client.on('ready', () =>{
    console.log(`Logado em ${client.user.tag}!`)
})

// codigo para executat os comandos com nomes dos arquivos
client.on('message', async msg => {
    //configurando quais mensagem vão ser lidas e caracteres
    if(msg.author.bot) return
    if(msg.channel.type === "dm") return
    if(!msg.content.startsWith(config.prefix)) return
    if(msg.content.startsWith(`<@!${client.user.id}`) || 
       msg.content.startsWith(`<@${client.user.id}`)) return
    //separando o argumento do comando
    let args = msg.content.split("  ").slice(1);
    let comando = msg.content.split(" ")[0];
    comando = comando.slice(config.prefix.length);
    //codigo para que os arquivos na pasta comandos sejam comandos
    try{
        let comandFile = require(`./comandos/${comando}.js` )
        delete require.cache[require.resolve(`./comandos/${comando}.js`)]
        return comandFile.set(client, msg, args)
    }catch(err){
        console.error("erro" + err)
    }
    console.log("ok3")
})
// logando o codigo no bot com o token
client.login(config.token)