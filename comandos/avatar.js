const Discord = require("discord.js")
const client = new Discord.Client
const config = require('../config.json')


exports.run = (client, message, args, prefix) =>{
   if(message.content.includes('@')){  
    const embed = new Discord.MessageEmbed()
        .setTitle(`Este es el avatar de ${message.mentions.users.first().username}`)
        .setImage(message.mentions.users.first().avatarURL())
        .setColor(120, 0, 150)
     
    message.channel.send(embed)
    console.log('avatar')
   }else{
       const embed = new Discord.MessageEmbed()
          .setTitle(`Este es tu avatar`)
          .setImage(message.author.avatarURL())
          .setColor(120, 0, 150)
          message.channel.send(embed)
          console.log('avatar')
   }
}