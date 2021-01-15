const Discord = require('discord.js')
const client = new Discord.Client
const db = require('megadb')
const buyRole = new db.crearDB('BuyRole')

exports.run = (client, message, args, prefix) => {
    let spliter = message.content.split(' ')
    var splinger = spliter[1]
    if(!message.member.hasPermission('ADMINISTRATOR')){
        message.channel.send('Necesitas permiso de administrador para usar este comando')
    }else if(message.author.bot){
        return;
    }else if (spliter.length < 1){
        message.channel.send('Debes poner el id del role[Para saber su id escribe el comando de ayuda idrole]')
    }else if(!buyRole.tiene(`${message.guild.id}`)) {
        buyRole.establecer(`${message.guild.id}`, {roles: [splinger],  nombre: [spliter[2]], precio: [spliter[3]]})
        message.channel.send('Has añadido a la tienda el rol: '+ spliter[2]+' Con el precio: '+spliter[3]+'!!')
    }else{
        buyRole.push(`${message.guild.id}.roles`, splinger)
        buyRole.push(`${message.guild.id}.precio`, spliter[3])
        buyRole.push(`${message.guild.id}.nombre`, spliter[2])
        message.channel.send('Has añadido a la tienda el rol: '+ spliter[2]+' Con el precio: '+spliter[3]+'!!')
    }
}

module.exports.config = {
    nombre: 'setbuyroles',
    descripcion:'Si eres admin podras establecer los roles comprables con este comando'
}