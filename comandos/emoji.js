const Discord = require('discord.js');

exports.run = (client, message, args, prefix) =>{
    let spliter = message.content.split(prefix+'emoji ')
    message.guild.members.cache.get(client.user.id).setNickname(message.author.username)
    message.channel.send(spliter[1])
    message.delete()
    setTimeout(() => {
        message.guild.members.cache.get(client.user.id).setNickname('Tsuke Bot')
    }, 60000);
    
}

module.exports.config ={
    nombre: 'emoji',
    descripcion: 'Podras usar emojis animados que esten en este servidor(deshabilitado)'
}