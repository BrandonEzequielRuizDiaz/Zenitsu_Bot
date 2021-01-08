const Discord = require('discord.js');
const client = new Discord.Client();
const config = require ('../config.json')
const { Client, MessageEmbed } = require('discord.js');
var Flizz = require("flizz");
var flizz = new Flizz.login(config.flizz);

exports.run = async (client, message, args, prefix) => {
     var meme = await flizz.memes
     message.channel.send(meme);
     console.log('meme')
}