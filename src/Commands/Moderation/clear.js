/**@format */

const Command = require("../../Structures/Command");
const { run } = require("../../Events/ready");

module.exports = new Command({
    name: "clear",
    description: "Clear X amount of messages",
    permission: "MANAGE_MESSAGES",
    async run(message, args, client){

        const amount = args[1];

        if (!amount || isNaN(amount)) 
            return message.reply(`${amount == undefined ? "Nothing" : amount
        } is not a valid number!`);

        const amountParsed = parseInt(amount);

        if (amountParsed > 500) return message.reply("You cannot clear more than 500 messages");

        message.channel.bulkDelete(amountParsed);

        const msg = await message.channel.send(`Cleared ${amountParsed} messages.`);

        setTimeout(() => msg.delete(), 1000);
    }
})