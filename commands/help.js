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
  name: "ajuda",
  description: "Obtenha informações sobre bot e seus comandos.",
  permissions: "0x0000000000000800",
  options: [],

  run: async (client, interaction) => {
    try {
      const musicCommandsEmbed = new EmbedBuilder()
        .setColor(client.config.embedColor)
        .setTitle('**( 🎻 ) ══════ Comandos de música: ══════**')
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
        .setImage(`https://media.discordapp.net/attachments/732337957876269098/1206725808589250620/Tumblr_l_223755323429725.gif`); 

      const basicCommandsEmbed = new EmbedBuilder()
        .setColor('#cd67f5')
        .setTitle('**( 🧁 ) ══════ Comandos básicos: ══════**')
        .addFields(
          { name: '**[ 👑 ]** Dono', value: "* Mostra o proprietário do código e do tradutor." },
          { name: '**[ 🏓 ]** Ping', value: "* Verifique a latência do bot." },
          { name: '**[ 🗑️ ]** Limpar', value: '* Limpe a fila de músicas deste servidor.' },
          { name: '**[ ⏱️ ]** Tempo', value: '* Exibir o tempo de reprodução da música atual.' },
          { name: '**[ 🎧 ]** Filtro', value: '* Aplique filtros para aprimorar o som como você gosta.' },
          { name: '**[ 🎶 ]** Tocando Agora', value: '* Exibir as informações da música atualmente sendo reproduzida.' },
          { name: '**[ 🔊 ]** Volume', value: '- Ajuste o volume da música **[ouvir em volumes altos é arriscado]**.' }
        ) 

       .setImage('https://media.discordapp.net/attachments/1103470110523531284/1215675265175257148/YuriDJBanner.png')
       //.setTimestamp();

      //const button1 = new ButtonBuilder()
       // .setLabel('YouTube')
        //.setURL('https://www.youtube.com/channel/UCPbAvYWBgnYhliJa1BIrv0A')
        //.setStyle(ButtonStyle.Link);

    // const button2 = new ButtonBuilder()
   //     .setLabel('Discord')
    //    .setURL('https://discord.gg/FUEHs7RCqz')
     //   .setStyle(ButtonStyle.Link);

   //   const button3 = new ButtonBuilder()
   //     .setLabel('Code')
    //    .setURL('https://replit.com/@BEASTGAMERS1?tab=community')
     //   .setStyle(ButtonStyle.Link);
      
    //  const row = new ActionRowBuilder()
     //   .addComponents(button1, button2, button3);
      
      interaction.reply({
        embeds: [musicCommandsEmbed, basicCommandsEmbed],
        //components: [row]
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
