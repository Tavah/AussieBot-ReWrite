const Command = require("../Structures/Command.js");

const Discord = require("discord.js");

module.exports = new Command({
    name: "embed",
    description: "shows ab enbed",
    async run(message, args, client) {

        const embed = new Discord.MessageEmbed();

        embed.setTitle("Test embed")
            .setAuthor(
                message.author.username,
                message.author.avatarURL({ dynamic: true}),
                )
            .setDescription("plain text, \nhere is a link: [test link](https://nhentai.net/g/)")
            .setColor("BLURPLE")
            .setThumbnail(client.user.avatarURL({ dynamic: true}))
            .setTimestamp()
            /**.setImage(<link>) */
            .addField("Bot Version", "1.0.0", true);

    

        message.channel.send({ embeds: [embed] });
        /** message.reply({embeds: [embed]}) */
    }
});