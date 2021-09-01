const Event = require("../Structures/Event.js");
const Discord = require("discord.js")

module.exports = new Event("guildMemberRemove", (client, member) => {

    const channel = member.guild.channels.cache.find(c => c.name == "logs");

    if (!channel) return;

    const embed = new Discord.MessageEmbed();

    embed.setTitle("Member Left")
        .setColor("RED")
        .setAuthor(member.user.tag)
        .setThumbnail(member.user.avatarURL ({ dynamic: true}))
        .addField("User Joined", member.joinedAt.toUTCString())

    channel.send({embeds: embed});
});