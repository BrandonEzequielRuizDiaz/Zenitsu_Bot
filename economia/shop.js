const Discord = require('discord.js')
const client = new Discord.Client
const db = require('megadb')
const buyRole = new db.crearDB('BuyRole')

exports.run = async (client, message, args, prefix) =>{
   
    if(!buyRole.tiene(`${message.guild.id}`)){
        message.channel.send('No hay roles para comprar en este server :sob:')
    }else{
        let roleishon = await buyRole.obtener(`${message.guild.id}.nombre`)
        const embed = new Discord.MessageEmbed()
        .setTitle('Tienda De Roles')
        .setTimestamp()
        .setColor('YELLOW')
        .setThumbnail('https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2020/06/anime-dinero-1962003.jpg?itok=h4zcxI0V')
        .setFooter('Pedido Por: ' +message.author.username)
        var rol = await buyRole.obtener(`${message.guild.id}.nombre`)
        var precio = await buyRole.obtener(`${message.guild.id}.precio`)
        for(let i = 0; i < roleishon.length; i++){
            embed.addField(i+': '+rol[i],'Precio: '+ precio[i])
        }
        message.channel.send(embed)
    }
}

module.exports.config = {
    nombre:'shop',
    descripcion: 'Mostrara la tienda de roles de este server'
}