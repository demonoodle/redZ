const Discord = require("discord.js");

module.exports = {
	name: 'awm',
	description: 'awm',
	cooldown: 5,
	execute(message) {

		const aEmbed = new Discord.RichEmbed()
    .setColor('#0099ff')
    .setTitle('AWM | .300 Magnum')
    .setDescription('AWM is a Sniper Rifle in PlayerUnknowns Battlegrounds. It is recognized as one of the best weapons in the game.')
    .setThumbnail('https://cdn.discordapp.com/attachments/434615656692973569/518797010992889858/LOGO.png')
    .setImage('https://cdn.discordapp.com/attachments/434615656692973569/518882685129850880/latest6.jpg')

const bEmbed = new Discord.RichEmbed()
    .setColor('#0099ff')
    .setThumbnail('https://cdn.discordapp.com/attachments/434615656692973569/518797010992889858/LOGO.png')
    .addField('TYPE', 'Sniper Rifle', true)
    .addField('AMMO TYPE', '.300 Magnum', true)
    .addField('DAMAGE', '132', true)
    .addField('BULLET SPEED', '910', true)
    .addField('ATTACHMENTS', '4', true)
    .addField('MAG CAPACITY', '5', true)
    .addField('EXT.MAG CAPACITY', '7', true)
    .addField('FIRING MODES', 'Single', true)
    .setTimestamp()
    .setFooter('RedZone PUBGM by Kousei', 'https://cdn.discordapp.com/attachments/434615656692973569/518797010992889858/LOGO.png');

message.channel.send(aEmbed)
message.channel.send(bEmbed)
	},
};