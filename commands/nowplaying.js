const { EmbedBuilder } = require('discord.js');
const db = require("../mongoDB");
module.exports = {
  name: "tocando-agora",
  description: "Obter informações da música atual.",
  permissions: "0x0000000000000800",
  options: [],
  run: async (client, interaction) => {
    try {

      const queue = client.player.getQueue(interaction.guild.id);
      if (!queue || !queue.playing) return interaction.reply({ content: `**( ⚠️ )** Nenhuma música está tocando no momento.`, ephemeral: true }).catch(e => { })

      const track = queue.songs[0];
      if (!track) return interaction.reply({ content: `**( ⚠️ )** Nenhuma música está tocando no momento.`, ephemeral: true }).catch(e => { })

      const embed = new EmbedBuilder();
      embed.setColor(client.config.embedColor);
      embed.setThumbnail(track.thumbnail);
      embed.setTitle(track.name)
      embed.setDescription(`> **Áudio** \`%${queue.volume}\`
> **Duration :** \`${track.formattedDuration}\`
> **URL :** **${track.url}**
> **Loop Mode :** \`${queue.repeatMode ? (queue.repeatMode === 2 ? 'Todas as Filas' : 'Esta música') : 'Desligada'}\`
> **Filter**: \`${queue.filters.names.join(', ') || 'Desligada'}\`
> **By :** <@${track.user.id}>`);


      interaction.reply({ embeds: [embed] }).catch(e => { })

    }  catch (e) {
    console.error(e); 
  }
  },
};
