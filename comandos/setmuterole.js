const Discord = require('discord.js')
const client = new Discord.Client
const config = require('../config.json')
const db = require('megadb')
const iServer = new db.crearDB('serverInfo')


exports.run = async (client, message, args, prefix) => {

    let split = message.content.split(' ')
    if(!message.member.hasPermission('ADMINISTRATOR')){
      message.channel.send('Te falta el permiso "ADMINISTRATOR"')
  }else if(!iServer.tiene(`${message.guild.id}`)){
      iServer.establecer(message.guild.id, {mutedRole: ''})
      iServer.establecer(`${message.guild.id}.mutedRole`, split[1])
      message.channel.send('El muted role de este server es '+ split[1])
    }else{
      
      iServer.establecer(`${message.guild.id}.mutedRole`, split[1])
       message.channel.send('El muted role de este server es '+ split[1])
  }
}