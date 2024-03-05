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
  name: "AjudaDJ",
  description: "Obtenha informações sobre bot e seus comandos.",
  permissions: "0x0000000000000800",
  options: [],

  run: async (client, interaction) => {
    try {
      const musicCommandsEmbed = new EmbedBuilder()
        .setColor(client.config.embedColor)
        .setTitle('🎸 **Comandos de música**')
        .addFields(
          { name: '* 🎹 Play', value: 'Toca uma música de um determinado link ou texto.' },
          { name: '* ⏹️ Stop', value: 'Faz o bot parar de tocar música.' },
          { name: '* 📊 Queue', value: 'Visualize e gerencie a lista de músicas deste servidor.' },
          { name: '* ⏭️ Skip', value: 'Ignora a música que está sendo reproduzida no momento.' },
          { name: '* ⏸️ Pause', value: 'Pausar a música que está tocando.' },
          { name: '* ▶️ Resume', value: 'Retomar a música pausada.' },
          { name: '* 🔁 Loop', value: 'Tocar a música ou a fila repedidas vezes.' },
          { name: '* 🔄 Autoplay', value: 'Ative ou desative a reprodução automática [reproduzir músicas aleatórias]' },
          { name: '* ⏩ Seek', value: 'Procure um minuto específico na música atual.' },
          { name: '* ⏮️ Previous', value: 'Reproduzir a música anterior da fila.' },
          { name: '- 🔀 Shuffle', value: 'Embaralhe as músicas na fila.' }
        )
        .setImage(`https://cdn.discordapp.com/attachments/1004341381784944703/1165201249331855380/RainbowLine.gif?ex=654f37ba&is=653cc2ba&hm=648a2e070fab36155f4171962e9c3bcef94857aca3987a181634837231500177&`); 

      const basicCommandsEmbed = new EmbedBuilder()
        .setColor(client.config.embedColor)
        .setTitle('✨ **Comandos básicos**')
        .addFields(
          { name: '🏓 Ping', value: "Verifique a latência do bot." },
          { name: '🗑️ Clear', value: 'Limpe a fila de músicas deste servidor.' },
          { name: '⏱️ Time', value: 'Exibir o tempo de reprodução da música atual.' },
          { name: '🎧 Filter', value: 'Aplique filtros para aprimorar o som como você gosta.' },
           { name: '🎵 Now Playing', value: 'Exibir as informações da música atualmente sendo reproduzida.' },
          { name: '🔊 Volume', value: 'Ajuste o volume da música **[ouvir em volumes altos é arriscado]**.' },
        ) 
       .setImage('https://cdn.discordapp.com/attachments/1150827819547504741/1168917372267151370/standard.gif?ex=65538222&is=65410d22&hm=b4994392f44679da41fc9304eb69deaa3769e136057556deec0db69ae8d33a97&')
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

      const row = new ActionRowBuilder()
        .addComponents(button1, button2, button3);

      interaction.reply({
        embeds: [musicCommandsEmbed, basicCommandsEmbed],
        components: [row]
      }).catch(e => {});
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
