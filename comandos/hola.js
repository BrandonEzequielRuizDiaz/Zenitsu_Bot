const Discord = require('discord.js');
const client = new Discord.Client();
const config = require ('../config.json')

exports.run = (client, message, args, prefix) =>{
    message.channel.send('adios');
    console.log('hola')
}