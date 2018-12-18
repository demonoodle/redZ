const Discord = require("discord.js");

module.exports = {
	name: 'm24',
	description: 'm24',
	cooldown: 5,
	execute(message) {

		const aEmbed = new Discord.RichEmbed()
    .setColor('#0099ff')
    .setTitle('M24 | 7.62mm')
    .setDescription('M24 its one of the best weapons in the game, it doesnt kill with 1 headshot if the enemy has a level 3 helmet, but it kills with 1 shot to people with level 1/2 helmets.')
    .setThumbnail('https://cdn.discordapp.com/attachments/434615656692973569/518797010992889858/LOGO.png')
    .setImage('https://cdn.discordapp.com/attachments/434615656692973569/518883158704259106/latest8.jpg')

const bEmbed = new Discord.RichEmbed()
    .setColor('#0099ff')
    .setThumbnail('https://cdn.discordapp.com/attachments/434615656692973569/518797010992889858/LOGO.png')
    .addField('TYPE', 'Sniper Rifle', true)
    .addField('AMMO TYPE', '7.62mm', true)
    .addField('DAMAGE', '84', true)
    .addField('BULLET SPEED', '790', true)
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