/** @format */

const Command = require("../../Structures/Command.js");
var Atago = [
    'https://cdn.discordapp.com/attachments/565677506703917079/882455675568001044/atakao.jpg',
    'https://cdn.discordapp.com/attachments/565677506703917079/882455684594163762/atago_and_atago_azur_lane_drawn_by_ninsaki_9saki__56c37fca7ed9f41faa1e6ac4157564d5.jpg',
    'https://cdn.discordapp.com/attachments/565677506703917079/882455687173656614/Du02UERUwAAcvAs.jpg',
    'https://cdn.discordapp.com/attachments/565677506703917079/882455691602837614/Ara_ara_pfp.jpg',
    'https://cdn.discordapp.com/attachments/565677506703917079/882455700603809822/450f374ca32f4e173ba7e97cffed85e3.jpg',
    'https://cdn.discordapp.com/attachments/565677506703917079/882455712964411433/sample_cb5bbb76199033ae7a499966f5291831.jpg',
    'https://cdn.discordapp.com/attachments/565677506703917079/882455716693155901/b3180cb8310b9dbb3dde6ee836c0ea8c.jpg',
    'https://cdn.discordapp.com/attachments/565677506703917079/882455720426110976/sample_0b723ba0190a4c16d2a5be20ce4c3d31.jpg',
    'https://cdn.discordapp.com/attachments/565677506703917079/882455720656797746/Atago__Takao_Uniforms_Ready.jpg',
    'https://cdn.discordapp.com/attachments/565677506703917079/882455733722046484/315.png',
    'https://cdn.discordapp.com/attachments/565677506703917079/882455733797535774/illust_66515503_20200505_145411.jpg',
    
]


module.exports = new Command({
	name: "atago",
	description: "it's just...atago",
	async run(message, args, client) {
        randomizer = Atago[Math.floor(Math.random() * Atago.length)];
		const msg = await message.channel.send(`${randomizer}`);
	}
});