module.exports = {
	name: 'say',
	description: 'saying',
	cooldown: 5,
	execute(message,args) {
const sayMessage = args.join(" ");
		
    message.delete(); 
  
    // And we get the bot to say the thing: 
    message.channel.send(`\`\`\`${sayMessage}\`\`\``);
	},
};