const fs = require('fs')
const Discord = require('discord.js')
const client = new Discord.Client
exports.run = (client, message, args, prefix)=>{
    const commandFiles = fs.readdirSync('./comandos').filter(file => file.endsWith('.js'));

    var comandohelp = {
        infonombre: [],
        infodesc: []
    }

    for (const file of commandFiles) {
        const command = require(`./${file}`);
        comandohelp.infonombre.push(`${command.config.nombre}`)
        comandohelp.infodesc.push(`${command.config.descripcion}`)
        
    }
    const embed = new Discord.MessageEmbed()
    .setTitle('Lista de comandos')
    .setFooter('Tsuke Bot')
    .setTimestamp()
    .setColor('RANDOM')
    .setThumbnail('https://i.pinimg.com/originals/8d/dd/0c/8ddd0ce16bb09cbbeaae38e4cf1c6ba6.jpg');
   let i = 0;
    while(true){
        embed.addField(`${prefix}${comandohelp.infonombre[i]}`, `${comandohelp.infodesc[i]}`);
        i++
        if(i >= comandohelp.infonombre.length ){
            break;
        }
    }
    embed.addField('Este bot tambien puede', 'Eliminar invitaciones de discord segun tus permisos')
    embed.addField('ts;setprefix', 'Cambia el prefijo')
    message.channel.send(embed)

    
}
module.exports.config = {
    nombre: 'help',
    descripcion: 'Muestra el menu de comandos'
}