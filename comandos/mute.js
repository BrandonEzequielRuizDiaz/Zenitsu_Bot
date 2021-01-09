const Discord = require("discord.js")
const client = new Discord.Client
const config = require('../config.json')
const db = require('megadb')
const serverinfo = require('../mega_databases/serverInfo.json');


exports.run = async (client, message, args, prefix) =>{

    
    
   try{ console.log(serverinfo)
}catch(err){
    console.log(err)
}
try{ console.log(serverinfo, message.guild.id, {mutedRole})
}catch(err){
    console.log(err)
}


    if(!message.member.hasPermission('KICK_MEMBERS')){
        message.reply('Necesitas el permiso KICK_MEMBERS para usar este comando');
    }else if(!message.content.includes('@')){
        message.reply('Debes mencionar a alguien');
    }else if(message.mentions.members.first().hasPermission('KICK_MEMBERS')){
        message.reply('No puedes mutear a esta persona')
    }else{
        message.mentions.members.first().roles.add(serverinfo, message.channel.id, mutedRole);
        message.channel.send(''+message.mentions.users.first().username+' a sido muteado'+` Esto es una prueba(${message.channel.send(mute)})`);
    }
    console.log('mute')
}