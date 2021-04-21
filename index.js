const Discord = require('discord.js')//Faz aquisição da livraria Discord.js, que é a livraria que vamos usar para criar esse bot tutorial

const client = new Discord.Client()//Cria um novo Client, usando a livraria Discord.js

//Evento de Ready (Pronto), podendo adicionar aqui uma setStatus no seu bot, que será basicamente o Status que o bot irá mostrar quando estiver online
client.on('ready', () => {
console.log('Estou online!')//Notifica no console que o bot está online

})

//Evento message (Mensagem) | Nota: na parte que tem "!ping", o "!" seria o prefix do seu bot, você pode mudar para o prefix que quiser, por exemplo: "prefixping"
client.on('message', async message => {
if(message.content === '!ping') {
  return message.channel.send(`${message.author}, pong!\nGateway: ${Date.now()-message.createdTimestamp}ms\nAPI: ${client.ws.ping}ms`)//Retorna no canal o Ping do bot
}
})

client.login(process.env.TOKEN)//Ligando o bot
