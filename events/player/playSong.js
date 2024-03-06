const db = require("../../mongoDB");
const { EmbedBuilder } = require("discord.js");

module.exports = async (client, queue, song) => {
  if (queue) {
    if (!client.config.opt.loopMessage && queue?.repeatMode !== 0) return;
    if (queue?.textChannel) {
      const embed = new EmbedBuilder()
      .setAuthor({
        name: 'Reproduzindo a música',
        iconURL: 'https://images-ext-1.discordapp.net/external/4-hSFPrG3_z4qHJNmNz3G8YrYNKyQy9c2Iem_dbFusY/https/miro.medium.com/v2/resize%3Afit%3A1400/1%2ANvBN4a23YP0Xlci9ZgKusw.gif', 
    })
    .setDescription(`\n ‎ \n▶️ **Detalhes :** **${song?.name}**\n▶️ **Aproveite a melhor experiência musical. ** \n▶️ **Se o link quebrar a reprodução, avise em: <#1154901442814025860>.**`)
.setImage(queue.songs[0].thumbnail)
    .setColor('#5b2980')
    .setFooter({ text: 'Para mais informações, use /ajuda-dj.' });
     
      queue?.textChannel?.send({ embeds: [embed] }).catch(e => { });
    }
  }
}

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
