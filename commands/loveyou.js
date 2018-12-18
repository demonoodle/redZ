module.exports = {
	name: 'loveyou',
	description: 'loveyou',
	cooldown: 5,
	execute(message) {
const user = message.mentions.users.first();

		message.reply(`I Love You too :heart:`);

	},
};