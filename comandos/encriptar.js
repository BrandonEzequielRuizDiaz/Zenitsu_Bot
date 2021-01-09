const Discord = require('discord.js')
const client = new Discord.Client

function encodeBase64(textoPlano) {
    let base64s = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
    textoPlano = escape(textoPlano);
    let bits, dual, i = 0, encOut = '';
    while (textoPlano.length >= i + 3) {
        bits =
            (textoPlano.charCodeAt(i++) & 0xff) << 16 |
            (textoPlano.charCodeAt(i++) & 0xff) << 8 |
            textoPlano.charCodeAt(i++) & 0xff;
        encOut +=
            base64s.charAt((bits & 0x00fc0000) >> 18) +
            base64s.charAt((bits & 0x0003f000) >> 12) +
            base64s.charAt((bits & 0x00000fc0) >> 6) +
            base64s.charAt((bits & 0x0000003f));
    }
    if (textoPlano.length - i > 0 && textoPlano.length - i < 3) {
        dual = Boolean(textoPlano.length - i - 1);
        bits =
            ((textoPlano.charCodeAt(i++) & 0xff) << 16) |
            (dual ? (textoPlano.charCodeAt(i) & 0xff) << 8 : 0);
        encOut +=
            base64s.charAt((bits & 0x00fc0000) >> 18) +
            base64s.charAt((bits & 0x0003f000) >> 12) +
            (dual ? base64s.charAt((bits & 0x00000fc0) >> 6) : '=') +
            '=';
    }
    return encOut
}

exports.run = (client, message, args, prefix) =>{
    let split = message.content.split(' ')
    if (split.length > 2){
        message.channel.send('El texto debe ser plano, EJ: Eduardo');
    }else if(split.length <= 1){
        message.channel.send('Debes poner un texto, EJ: ts;encriptar Eduardo');
    }else{
        const embed = new Discord.MessageEmbed()
        .setTitle('El texto es: '+encodeBase64(split[1]))
        .setImage('https://media1.tenor.com/images/0272552629fe0cf1c8c701de6a364f2f/tenor.gif?itemid=12746884')
        .setColor(230, 0, 255)
     message.channel.send(embed);
        message.delete();
    }
}
module.exports.config = {
    nombre: 'encriptar',
    descripcion: 'Encripta un texto plano a Base64 EJ: Eduardo'
}