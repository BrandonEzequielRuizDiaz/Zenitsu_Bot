const db = require('megadb')
const iServer = new db.crearDB('serverInfo')
const Discord = require('discord.js')

exports.run = async (client, message, args, prefix) => {
    if (!message.member.hasPermission('ADMINISTRATOR')){
        message.channel.send('Necesitas permisos de admin para usar este comando')
    }else if(!message.mentions.members.first().roles.cache.has(await iServer.obtener(`${message.guild.id}.mutedRole`))){
        message.channel.send(message.mentions.users.first().username+' no esta muteado')
    }else{

    mencion.roles.remove(await iServer.obtener(`${message.guild.id}.mutedRole`))
    message.channel.send(message.mentions.users.first().username+' a sido desmuteado!')
    }
}

module.exports.config = {
    nombre: 'unmute',
    descripcion: 'Desmutea al usuario mencionado'
}