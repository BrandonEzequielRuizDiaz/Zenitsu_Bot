const Discord = require('discord.js')
const client = new Discord.Client
const db = require('megadb')
const buyRole = new db.crearDB('BuyRole')
const economiaDB = new db.crearDB('economiaDB')

exports.run = async (client,message,args,prefix) => {
    let spliter = message.content.split(prefix+'buy ')
    let precio = await buyRole.obtener(`${message.guild.id}.precio`)
    let nombre = await buyRole.obtener(`${message.guild.id}.nombre`)
    let idRol = await buyRole.obtener(`${message.guild.id}.roles`)
    let dineroUser = await economiaDB.obtener(`${message.author.id}.dinero`)
    let splitingo = await economiaDB.obtener(`${message.author.id}.dinero`) - precio[spliter[1]]
    if (message.author.bot){
        return;
    }else if(spliter.length < 1){
       message.channel.send('Debes poner el numero de rol(Aparece en la tienda)')
    }else if(dineroUser < precio[spliter[1]]){
        message.channel.send('No tienes dinero suficiente')
    }else{
        economiaDB.establecer(`${message.author.id}.dinero`, splitingo)
        message.member.roles.add(idRol[spliter[1]])
        const embed = new Discord.MessageEmbed()
        .setColor('YELLOW')
        .setFooter('Compra realizada por: '+message.author.username)
        .setTitle(':tada:Transaccion:tada:')
        .addField('Rol Comprado', nombre[spliter[1]])
        .addField('Precio', precio[spliter[1]])
        .setThumbnail('https://mamawonderwoman.files.wordpress.com/2015/04/dj-anime-girl.jpg')

        message.channel.send(embed)
    }
}

module.exports.config = {
    nombre: 'buy',
    descripcion: 'Podras comprar roles de la tienda con este comandos'
}