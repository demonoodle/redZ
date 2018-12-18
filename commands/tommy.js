const Discord = require("discord.js");

module.exports = {
	name: 'tommy',
	description: 'tommy gun',
	cooldown: 5,
	execute(message) {

		const aEmbed = new Discord.RichEmbed()
    .setColor('#0099ff')
    .setTitle('Tommy GUN | .45ACP')
    .setDescription('Tommy Gun is a type of Submachine Gun  in PlayerUnknowns Battlegrounds, It shoots 45 ACP rounds and has a starting mag size of 30, though this can be taken to 50 with the extended magazine.')
    .setThumbnail('https://cdn.discordapp.com/attachments/434615656692973569/518797010992889858/LOGO.png')
    .setImage('https://cdn.discordapp.com/attachments/434615656692973569/519005445029888030/latest16.jpg')

const bEmbed = new Discord.RichEmbed()
    .setColor('#0099ff')
    .setThumbnail('https://cdn.discordapp.com/attachments/434615656692973569/518797010992889858/LOGO.png')
    .addField('TYPE', 'Submachine Gun', true)
    .addField('AMMO TYPE', '.45ACP', true)
    .addField('DAMAGE', '38', true)
    .addField('BULLET SPEED', '?', true)
    .addField('ATTACHMENTS', '3', true)
    .addField('MAG CAPACITY', '30', true)
    .addField('EXT.MAG CAPACITY', '50', true)
    .addField('FIRING MODES', 'Semi-auto & Full auto', true)
    .setTimestamp()
    .setFooter('RedZone PUBGM by Kousei', 'https://cdn.discordapp.com/attachments/434615656692973569/518797010992889858/LOGO.png');

message.channel.send(aEmbed)
message.channel.send(bEmbed)
	},
};