const Discord = require('discord.js')
const client = new Discord.Client
const db = require('megadb')
const economiaDB = new db.crearDB('economiaDB')
const cooldown = new db.crearDB('cooldown')

exports.run = async (client, message, args, prefix)=>{
    if(!economiaDB.tiene(`${message.author.id}`)){
        economiaDB.establecer(`${message.author.id}`, {dinero: 0, banco: 0})
        let dineros = [10, 50, 70, 150, 10, 50, 70, 150, 10, 50, 70, 150, 10, 50, 70, 150, 10, 50, 70, 150, 10, 50, 70, 150, 10, 50, 70, 150, 10, 50, 70, 150, 10, 50, 70, 150, 10, 50, 70, 150, 50, 70, 150, 10, 999]
        let random = Math.floor(Math.random()*(dineros.length))
        let s = dineros[random]
        let antes = await economiaDB.obtener(`${message.author.id}.dinero`)
        economiaDB.sumar(`${message.author.id}.dinero`, s)
        let despues = await economiaDB.obtener(`${message.author.id}.dinero`) - antes
        cooldown.establecer(`${message.author.id}`, {true: 'si'})
        if(antes === 0){ 
           const embed = new Discord.MessageEmbed()
           .setColor('YELLOW')
           .setTitle(message.author.username+' a trabajado y ganado '+await economiaDB.obtener(`${message.author.id}.dinero`))
           .setTimestamp()
           .addField('Buen', 'Trabajo :D')
           .setImage('https://media1.tenor.com/images/0272552629fe0cf1c8c701de6a364f2f/tenor.gif?itemid=12746884')
           .setFooter(message.author.username)
           .setThumbnail('https://bloodstainedritualofthenight.wiki.fextralife.com/file/Bloodstained-Ritual-of-The-Night/16-bit-coin-material-bloodstained-wiki-guide.png')
            message.channel.send(embed)
           
        }else{
            const embed = new Discord.MessageEmbed()
           .setColor('YELLOW')
           .setTitle(message.author.username+' a trabajado y ganado '+despues)
           .setTimestamp()
           .addField('Buen', 'Trabajo :D')
           .setImage('https://media1.tenor.com/images/0272552629fe0cf1c8c701de6a364f2f/tenor.gif?itemid=12746884')
           .setFooter(message.author.username)
           .setThumbnail('https://bloodstainedritualofthenight.wiki.fextralife.com/file/Bloodstained-Ritual-of-The-Night/16-bit-coin-material-bloodstained-wiki-guide.png')
        message.channel.send(embed)
    }
       
        setTimeout(() => {
            cooldown.eliminar(message.author.id)
        }, 1800000);
    }else if (cooldown.tiene(`${message.author.id}`)){
        message.channel.send('Estas en cooldown de 30 mins')
    }else{
        let dineros = [10, 50, 70, 150, 10, 50, 70, 150, 10, 50, 70, 150, 10, 50, 70, 150, 10, 50, 70, 150, 10, 50, 70, 150, 10, 50, 70, 150, 10, 50, 70, 150, 10, 50, 70, 150, 10, 50, 70, 150, 50, 70, 150, 10, 999]
        let random = Math.floor(Math.random()*(dineros.length))
        let s = dineros[random]
        let antes = await economiaDB.obtener(`${message.author.id}.dinero`)
        economiaDB.sumar(`${message.author.id}.dinero`, s)
        let despues = await economiaDB.obtener(`${message.author.id}.dinero`) - antes
        cooldown.establecer(`${message.author.id}`, {true: 'si'})
        if(antes === 0){ 
            const embed = new Discord.MessageEmbed()
            .setColor('YELLOW')
            .setTitle(message.author.username+' a trabajado y ganado '+await economiaDB.obtener(`${message.author.id}.dinero`))
            .setTimestamp()
            .addField('Buen', 'Trabajo :D')
            .setImage('https://media1.tenor.com/images/0272552629fe0cf1c8c701de6a364f2f/tenor.gif?itemid=12746884')
            .setFooter(message.author.username)
            .setThumbnail('https://bloodstainedritualofthenight.wiki.fextralife.com/file/Bloodstained-Ritual-of-The-Night/16-bit-coin-material-bloodstained-wiki-guide.png')
             message.channel.send(embed)
            
         }else{
             const embed = new Discord.MessageEmbed()
            .setColor('YELLOW')
            .setTitle(message.author.username+' a trabajado y ganado '+despues)
            .setTimestamp()
            .addField('Buen', 'Trabajo :D')
            .setImage('https://media1.tenor.com/images/0272552629fe0cf1c8c701de6a364f2f/tenor.gif?itemid=12746884')
            .setFooter(message.author.username)
            .setThumbnail('https://bloodstainedritualofthenight.wiki.fextralife.com/file/Bloodstained-Ritual-of-The-Night/16-bit-coin-material-bloodstained-wiki-guide.png')
         message.channel.send(embed)
     }
        setTimeout(() => {
            cooldown.eliminar(message.author.id)
        }, 1800000);
    }
}
module.exports.config = {
    nombre: 'work',
     descripcion: 'Podras ganar dinero con este comando'
}