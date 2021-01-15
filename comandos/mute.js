const Discord = require("discord.js")
const client = new Discord.Client
const config = require('../config.json')
const db = require('megadb')
const iServer = new db.crearDB('serverInfo')


exports.run = async (client, message, args, prefix) =>{

var idrole = await iServer.obtener(`${message.guild.id}.mutedRole`)

    if(!message.member.hasPermission('KICK_MEMBERS')){
        message.reply('Necesitas el permiso KICK_MEMBERS para usar este comando');
    }else if(!message.content.includes('@')){
        message.reply('Debes mencionar a alguien');
    }else if(message.mentions.members.first().hasPermission('KICK_MEMBERS')){
        message.reply('No puedes mutear a esta persona')
    }else{
        message.mentions.members.first().roles.add(await iServer.obtener(`${message.guild.id}.mutedRole`));
        message.channel.send(''+message.mentions.users.first().username+' a sido muteado');
    }
    console.log('mute')
}
module.exports.config = {
    nombre: 'mute',
    descripcion: 'Mutea al usuario mencionado en el mensaje'
}