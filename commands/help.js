/*

  ██████╗░████████╗██╗░░██╗           
  ██╔══██╗╚══██╔══╝╚██╗██╔╝          
  ██████╔╝░░░██║░░░░╚███╔╝░          
  ██╔══██╗░░░██║░░░░██╔██╗░          
  ██║░░██║░░░██║░░░██╔╝╚██╗          
  ╚═╝░░╚═╝░░░╚═╝░░░╚═╝░░╚═╝          

   
   # MADE BY RTX!! FEEL FREE TO USE ANY PART OF CODE
   ## FOR HELP CONTACT ME ON DISCORD
   ## Contact    [ DISCORD SERVER :  https://discord.gg/FUEHs7RCqz ]
   ## YT : https://www.youtube.com/channel/UCPbAvYWBgnYhliJa1BIrv0A
*/
const { ApplicationCommandOptionType } = require('discord.js');
const db = require("../mongoDB");

const { EmbedBuilder, ActionRowBuilder, ButtonBuilder } = require('discord.js');
const { ButtonStyle } = require('discord.js');

module.exports = {
  name: "ajuda-dj",
  description: "Obtenha informações sobre bot e seus comandos",
  permissions: "0x0000000000000800",
  options: [],

  run: async (client, interaction) => {
    try {
      const musicCommandsEmbed = new EmbedBuilder()
        .setColor(client.config.embedColor)
        .setTitle('**( 🎻 ) ═══════ Comandos de música: ═══════**')
        .addFields(
          { name: '**[ 🎹 ]** Play:', value: '* Toca uma música de um determinado link ou texto.' },
          { name: '**[ ⏹️ ]** Parar:', value: '* Faz o bot parar de tocar música.' },
          { name: '**[ 📊 ]** Fila:', value: '* Visualize e gerencie a lista de músicas deste servidor.' },
          { name: '**[ ⏭️ ]** Pular:', value: '* Ignora a música que está sendo reproduzida no momento.' },
          { name: '**[ ⏸️ ]** Pause:', value: '* Pausar a música que está tocando.' },
          { name: '**[ ▶️ ]** Retomar:', value: '* Retomar a música pausada.' },
          { name: '**[ 🔁 ]** Loop:', value: '* Tocar a música ou a fila repedidas vezes.' },
          { name: '**[ 🔄 ]** Autoplay:', value: '* Ative ou desative a reprodução automática [reproduzir músicas aleatórias]' },
          { name: '**[ ⏩ ]** ProcurarMin:', value: '* Procure um minuto específico na música atual.' },
          { name: '**[ ⏮️ ]** Anterior:', value: '* Reproduzir a música anterior da fila.' },
          { name: '**[ 🔀 ]** Embaralhar:', value: '- Embaralhe as músicas na fila.' }
        )
        .setImage(`https://media.discordapp.net/attachments/1153816645106684096/1154791404464246814/standard_1.gif?ex=65f45fcd&is=65e1eacd&hm=db4548b9aa811de32b1852da0223dc813e61ad88a54d91530755a322046ca2be&=&width=832&height=468`); 

      const basicCommandsEmbed = new EmbedBuilder()
        .setColor(client.config.embedColor)
        .setTitle('**( 🧁 ) ═══════ Comandos básicos: ═══════**')
        .addFields(
          { name: '**[ 🏓 ]** Ping', value: "* Verifique a latência do bot." },
          { name: '**[ 🗑️ ]** Limpar', value: '* Limpe a fila de músicas deste servidor.' },
          { name: '**[ ⏱️ ]** Temp', value: '* Exibir o tempo de reprodução da música atual.' },
          { name: '**[ 🎧 ]** Filtro', value: '* Aplique filtros para aprimorar o som como você gosta.' },
           { name: '**[ 🎶 ]** Tocando Agora', value: '* Exibir as informações da música atualmente sendo reproduzida.' },
          { name: '**[ 🔊 ]** Volume', value: '- Ajuste o volume da música **[ouvir em volumes altos é arriscado]**.' },
        ) 

       .setImage('https://cdn.discordapp.com/attachments/1150827819547504741/1168917372267151370/standard.gif?ex=65538222&is=65410d22&hm=b4994392f44679da41fc9304eb69deaa3769e136057556deec0db69ae8d33a97&')
      /*
      const button1 = new ButtonBuilder()
        .setLabel('YouTube')
        .setURL('https://www.youtube.com/channel/UCPbAvYWBgnYhliJa1BIrv0A')
        .setStyle(ButtonStyle.Link);

      const button2 = new ButtonBuilder()
        .setLabel('Discord')
        .setURL('https://discord.gg/FUEHs7RCqz')
        .setStyle(ButtonStyle.Link);

      const button3 = new ButtonBuilder()
        .setLabel('Code')
        .setURL('https://replit.com/@BEASTGAMERS1?tab=community')
        .setStyle(ButtonStyle.Link);
      */

      
      
    } catch (e) {
      console.error(e);
    }
  },
};

/*

  ██████╗░████████╗██╗░░██╗           
  ██╔══██╗╚══██╔══╝╚██╗██╔╝          
  ██████╔╝░░░██║░░░░╚███╔╝░          
  ██╔══██╗░░░██║░░░░██╔██╗░          
  ██║░░██║░░░██║░░░██╔╝╚██╗          
  ╚═╝░░╚═╝░░░╚═╝░░░╚═╝░░╚═╝          

   
   # MADE BY RTX!! FEEL FREE TO USE ANY PART OF CODE
   ## FOR HELP CONTACT ME ON DISCORD
   ## Contact    [ DISCORD SERVER :  https://discord.gg/FUEHs7RCqz ]
   ## YT : https://www.youtube.com/channel/UCPbAvYWBgnYhliJa1BIrv0A
*/
