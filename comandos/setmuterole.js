const Discord = require('discord.js')
const client = new Discord.Client
const config = require('../config.json')
const db = require('megadb')
const iServer = new db.crearDB('serverInfo')


exports.run = async (client, message, args, prefix) => {

    if(!message.member.hasPermission('ADMINISTRATOR')){
      message.channel.send('Te falta el permiso "ADMINISTRATOR"')
  }else if(!iServer.tiene(`${message.guild.id}`)){
      iServer.establecer(message.guild.id, {mutedRole: ''})
      message.channel.send('Hemos guardado tu server en nuestra base de datos porfavor vuelve a utilizar este comando')
  }else{
      let split = message.content.split(' ')
      iServer.establecer(`${message.guild.id}.mutedRole`, split[1])
       message.channel.send('El muted role de este server es '+ split[1])
  }
}