const Discord = require('discord.js')
const client = new Discord.Client
const db = require('megadb')
const economiaDB = new db.crearDB('economiaDB')

exports.run = async (client, message, args, prefix) =>{
   
    if(!economiaDB.tiene(`${message.author.id}`)){
        economiaDB.establecer(`${message.author.id}`, {dinero: 0, banco: 0})
        const embed = new Discord.MessageEmbed()
        .setTitle('Dinero de '+message.author.username)
        .addField('Dinero', await economiaDB.obtener(`${message.author.id}.dinero`))
        .addField('Banco', await economiaDB.obtener(`${message.author.id}.banco`))
        .setTimestamp()
        .setThumbnail(message.author.avatarURL())
        .setColor('YELLOW')
        .setFooter(message.author.username)
        message.channel.send(embed)
        message.channel.send('prueba')
    }else{
        const embed = new Discord.MessageEmbed()
        .setTitle('Dinero de '+message.author.username)
        .addField('Dinero', await economiaDB.obtener(`${message.author.id}.dinero`))
        .addField('Banco', await economiaDB.obtener(`${message.author.id}.banco`))
        .setTimestamp()
        .setThumbnail(message.author.avatarURL())
        .setColor('YELLOW')
        .setFooter(message.author.username)
        message.channel.send(embed)
       
    }
}
module.exports.config = {
    nombre: 'cash',
    descripcion: 'Podras ver tu balance en esta economia'
}
