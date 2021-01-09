const Discord = require('discord.js');
const client = new Discord.Client;

function decodeBase64(textoBase64) {
    let base64s = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
    let bits, decOut = '', i = 0;
    let undecOut = null;
    for (; i < textoBase64.length; i += 4) {
        bits =
            (base64s.indexOf(textoBase64.charAt(i)) & 0xff) << 18 |
            (base64s.indexOf(textoBase64.charAt(i + 1)) & 0xff) << 12 |
            (base64s.indexOf(textoBase64.charAt(i + 2)) & 0xff) << 6 |
            base64s.indexOf(textoBase64.charAt(i + 3)) & 0xff;
        decOut += String.fromCharCode((bits & 0xff0000) >> 16, (bits & 0xff00) >> 8, bits & 0xff);
    }
    if (textoBase64.charCodeAt(i - 2) === 61) {
        undecOut = decOut.substring(0, decOut.length - 2);
    } else if (textoBase64.charCodeAt(i - 1) === 61) {
        undecOut = decOut.substring(0, decOut.length - 1);
    } else {
        undecOut = decOut;
    }
    return unescape(undecOut);
}

exports.run = (client, message, args, prefix) =>{
    let split = message.content.split(' ')
    if (split.length > 2){
        message.channel.send('El texto debe ser plano');
    }else if(split.length <= 1){
        message.channel.send('Debes poner un texto encriptado');
    }else{
        const embed = new Discord.MessageEmbed()
           .setTitle('El texto es: '+decodeBase64(split[1]))
           .setImage('https://media1.tenor.com/images/9132a203c7031bd534eaccdc2f8d92de/tenor.gif?itemid=17694217')
           .setColor(0, 0, 255)
        message.channel.send(embed);
        
    
    }
};