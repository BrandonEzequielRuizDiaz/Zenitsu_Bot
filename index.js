const Discord = require('discord.js');
const client = new Discord.Client();
const config = require ('./config.json')
const permissions = new Discord.Permissions();
const db = require('megadb')
const fs = require('fs')
const commandFiles = fs.readdirSync('./comandos').filter(file => file.endsWith('.js'));
const economyFiles = fs.readdirSync('./economia').filter(file => file.endsWith('.js'));
const economiaDB = new db.crearDB('economiaDB')
let niveles = new db.crearDB('niveles')
let prefijo = new db.crearDB('prefijos')
let prefix = 'ts;'


client.on('ready', () =>{
  console.log('estoy listo')
  console.log(`┏------------------┓`)
  for(files of commandFiles){
    let comando = require(`./comandos/${files}`)
    console.log(`    ${comando.config.nombre}`)
    
  }
  console.log(`┗------------------┙`)
})

client.on('message', async (message) =>{
  if (message.content.startsWith(prefix+'setprefix'))
  {
    if(!message.member.hasPermission('ADMINISTRATOR'))
    {
      message.channel.send('No tienes permiso de usar este comando')
    }else if(!prefijo.tiene(`${message.guild.id}`))
    {
      prefijo.establecer(`${message.guild.id}`, {prefixx: 'ts;'})
      message.channel.send('Hemos guardado este server en nuestra base de datos vuelve a usar este comando porfavor')
    }else
    {
      var mensaje = message.content
      a = mensaje.split(' ')
      prefijo.establecer('message.author.id.prefixx', a[1])
      var prueba = await prefijo.obtener('message.author.id.prefixx')
      prefix = prueba
      message.channel.send('Tu nuevo prefix es: '+prueba)
    }       
  }

  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  try{
    for (const file of commandFiles) {
      const command = require(`./comandos/${file}`);
      if(message.content.startsWith(prefix+command.config.nombre)){
        command.run(client, message, args, prefix);
      }
      
  }
  for(const fileng of economyFiles){
    const commando = require(`./economia/${fileng}`);
    if(message.content.startsWith(prefix+commando.config.nombre)){
      commando.run(client, message, args, prefix);
    }
  }
}catch(err){
   console.log(err)
   message.reply(err)
}

})

//funciones//////////

client.on('message', (message)=>{ //mandar invitaciones
    if (message.content.includes('discord.gg')){
      if ((message.member.hasPermission('MENTION_EVERYONE' )) || (message.author.bot)){
           return;
        }else{
          message.delete();
          message.reply('Necesitas el permiso: MENTION_EVERYONE para poder enviar invitaciones');
        }
      }
      })

//funciones/////////
client.login(config.token);