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

module.exports = {
  name: "dono",
  description: "Obtenha informações sobre o proprietário e o tradutor do bot.",
  permissions: "0x0000000000000800",
  options: [],

  run: async (client, interaction) => {
    try {
      const youtubeLink = 'https://discord.gg/FUEHs7RCqz';
      const InstagramLink = 'https://www.instagram.com/rtxxgg/';
      const { EmbedBuilder } = require('discord.js')
        const embed = new EmbedBuilder()
            .setColor('#da2a41')
            .setAuthor({
          name: 'Dono e tradutor.',
          iconURL: 'https://static.wikia.nocookie.net/2021fa06-849e-4a6d-bb3b-7d3f545aa6a6',
        })
            .setDescription(`### Sobre o proprietário:\n\n **▶** Eu mesmo, Shiva, também conhecido como RTX. Eu sou um desenvolvedor de bot discord e desenvolvedor web. Adoro jogar, assistir animes e construir diferentes aplicações de servidor web. Você obterá respostas mais rápidas no Instagram do que em outras mídias sociais. Sinta-se livre para me contatar!\n### Redes sociais:\n * **( ❤️ ) YouTube:** [RTX GAMING](${youtubeLink})\n * **( 💙 ) Instagram:** [rtxxgg](${InstagramLink})\n\n **>> A __<@1214377811104763944>__ foi traduzida por:** __<@771829068961153034>__.`)
            .setTimestamp();
      interaction.reply({ embeds: [embed] }).catch(e => {});

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
