const { prefix } = require('../config.json');

module.exports = {
	name: 'help',
	description: 'Semua command yang tersedia.',
	aliases: ['commands'],
	usage: '[command name]',
	cooldown: 5,
	execute(message, args) {
		const data = [];
		const { commands } = message.client;

		if (!args.length) {
			data.push('Gunakan ![nama command] contoh: \`!akm\`\n');
			data.push(commands.map(command => `\`${command.name}\``).join(', '));
			data.push(`\nkamu bisa juga menggunakan \`${prefix}help [nama command]\` untuk mendapatkan info dari command tertentu!\n`);

			return message.author.send(data, { split: true })
				.then(() => {
					if (message.channel.type === 'dm') return;
					message.reply('Udah gue DM ya cuy!');
				})
				.catch(error => {
					console.error(`Gak bisa kirim help lewat DM to ${message.author.tag}.\n`, error);
					message.reply('Kayaknya gue gak bisa kirim DM ke kamu deh!');
				});
		}

		const name = args[0].toLowerCase();
		const command = commands.get(name) || commands.find(c => c.aliases && c.aliases.includes(name));

		if (!command) {
			return message.reply('Salah command cuy!');
		}

		data.push(`**Name:** ${command.name}`);

		if (command.aliases) data.push(`**Aliases:** ${command.aliases.join(', ')}`);
		if (command.description) data.push(`**Description:** ${command.description}`);
		if (command.usage) data.push(`**Usage:** ${prefix}${command.name} ${command.usage}`);

		data.push(`**Cooldown:** ${command.cooldown || 3} second(s)`);

		message.channel.send(data, { split: true });
	},
};