const Discord = require('discord.js')

exports.run = (client, message, args, prefix) =>{
    spliter = message.content.split(prefix+'hablar ')
    message.channel.send(spliter[1])
    message.delete()
}

module.exports.config ={
    nombre: ['hablar'],
    descripcion: ['Haras que el bot hable']
}