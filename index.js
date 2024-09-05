// Require the necessary discord.js classes
const { Client, Collection, Events, GatewayIntentBits, ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder } = require('discord.js');
const { token } = require('./config.json');
const path = require('node:path');
const fs = require('node:fs');
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});
require('dotenv').config();
// Create a new client instance
client.commands = new Collection();
const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const filePath = path.join(commandsPath, file);
	const command = require(filePath);
	// Set a new item in the Collection with the key as the command name and the value as the exported module
	if ('data' in command && 'execute' in command) {
		client.commands.set(command.data.name, command);
	} else {
		console.log(`[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`);
	}
}
const eventsPath = path.join(__dirname, 'events');
const eventFiles = fs.readdirSync(eventsPath).filter(file => file.endsWith('.js'));

for (const file of eventFiles) {
	const filePath = path.join(eventsPath, file);
	const event = require(filePath);
	if (event.once) {
		client.once(event.name, (...args) => event.execute(...args));
	} else {
		client.on(event.name, (...args) => event.execute(...args));
	}
}

client.on(Events.InteractionCreate, interaction => {
	if (!interaction.isStringSelectMenu()) return;
	console.log(interaction);
});

//spike library
client.on(Events.InteractionCreate, async interaction => {
	if (!interaction.isStringSelectMenu()) return;
	if (interaction.customId === 'spike') {
		const selected = interaction.values[0];
		if (selected === 'first_option') {
			const row = new ActionRowBuilder()
			.addComponents(
				new ButtonBuilder()
					.setCustomId('AscentA')
					.setLabel('A Site')
					.setStyle(ButtonStyle.Primary),
				new ButtonBuilder()
					.setCustomId('AscentB')
					.setLabel('B Site')
					.setStyle(ButtonStyle.Success),
			);
			const embed = new EmbedBuilder()
			.setColor(0x0099FF)
			.setTitle('Ascent')
			.setDescription('Select a Site');
		await interaction.update({embeds: [embed], components: [row] });
		} else if (selected === 'second_option') {
			const row = new ActionRowBuilder()
			.addComponents(
				new ButtonBuilder()
					.setCustomId('BindA')
					.setLabel('A Site')
					.setStyle(ButtonStyle.Primary),
				new ButtonBuilder()
					.setCustomId('BindB')
					.setLabel('B Site')
					.setStyle(ButtonStyle.Success),
			);
			const embed = new EmbedBuilder()
			.setColor(0x0099FF)
			.setTitle('Bind')
			.setDescription('Select a Site');
		await interaction.update({embeds: [embed], components: [row] });
		}
		else if (selected === 'third_option') {
			const row = new ActionRowBuilder()
			.addComponents(
				new ButtonBuilder()
					.setCustomId('BreezeA')
					.setLabel('A Site')
					.setStyle(ButtonStyle.Primary),
				new ButtonBuilder()
					.setCustomId('BreezeB')
					.setLabel('B Site')
					.setStyle(ButtonStyle.Success),
			);
			const embed = new EmbedBuilder()
			.setColor(0x0099FF)
			.setTitle('Breeze')
			.setDescription('Select a Site');
		await interaction.update({embeds: [embed], components: [row] });
		}
		else if (selected === 'fourth_option') {
			const row = new ActionRowBuilder()
			.addComponents(
				new ButtonBuilder()
					.setCustomId('FractureA')
					.setLabel('A Site')
					.setStyle(ButtonStyle.Primary),
				new ButtonBuilder()
					.setCustomId('FractureB')
					.setLabel('B Site')
					.setStyle(ButtonStyle.Success),
			);
			const embed = new EmbedBuilder()
			.setColor(0x0099FF)
			.setTitle('Fracture')
			.setDescription('Select a Site');
		await interaction.update({embeds: [embed], components: [row] });
		}
		else if (selected === 'fifth_option') {
			const row = new ActionRowBuilder()
			.addComponents(
				new ButtonBuilder()
					.setCustomId('HavenA')
					.setLabel('A Site')
					.setStyle(ButtonStyle.Primary),
				new ButtonBuilder()
					.setCustomId('HavenB')
					.setLabel('B Site')
					.setStyle(ButtonStyle.Success),
				new ButtonBuilder()
					.setCustomId('HavenC')
					.setLabel('C Site')
					.setStyle(ButtonStyle.Secondary),
			);
			const embed = new EmbedBuilder()
			.setColor(0x0099FF)
			.setTitle('Haven')
			.setDescription('Select a Site');
		await interaction.update({embeds: [embed], components: [row] });
		}
		else if (selected === 'sixth_option') {
			const row = new ActionRowBuilder()
			.addComponents(
				new ButtonBuilder()
					.setCustomId('IceboxA')
					.setLabel('A Site')
					.setStyle(ButtonStyle.Primary),
				new ButtonBuilder()
					.setCustomId('IceboxB')
					.setLabel('B Site')
					.setStyle(ButtonStyle.Success),
			);
			const embed = new EmbedBuilder()
			.setColor(0x0099FF)
			.setTitle('Icebox')
			.setDescription('Select a Site');
		await interaction.update({embeds: [embed], components: [row] });
		}
		else if (selected === 'seventh_option') {
			const row = new ActionRowBuilder()
			.addComponents(
				new ButtonBuilder()
					.setCustomId('LotusA')
					.setLabel('A Site')
					.setStyle(ButtonStyle.Primary),
				new ButtonBuilder()
					.setCustomId('LotusB')
					.setLabel('B Site')
					.setStyle(ButtonStyle.Success),
				new ButtonBuilder()
					.setCustomId('LotusC')
					.setLabel('C Site')
					.setStyle(ButtonStyle.Secondary),
			);
			const embed = new EmbedBuilder()
			.setColor(0x0099FF)
			.setTitle('Lotus')
			.setDescription('Select a Site');
		await interaction.update({embeds: [embed], components: [row] });
		}
		else if (selected === 'eighth_option') {
			const row = new ActionRowBuilder()
			.addComponents(
				new ButtonBuilder()
					.setCustomId('PearlA')
					.setLabel('A Site')
					.setStyle(ButtonStyle.Primary),
				new ButtonBuilder()
					.setCustomId('PearlB')
					.setLabel('B Site')
					.setStyle(ButtonStyle.Success),
			);
			const embed = new EmbedBuilder()
			.setColor(0x0099FF)
			.setTitle('Pearl')
			.setDescription('Select a Site');
		await interaction.update({embeds: [embed], components: [row] });
		}
		else if (selected === 'ninth_option') {
			const row = new ActionRowBuilder()
			.addComponents(
				new ButtonBuilder()
					.setCustomId('SplitA')
					.setLabel('A Site')
					.setStyle(ButtonStyle.Primary),
				new ButtonBuilder()
					.setCustomId('SplitB')
					.setLabel('B Site')
					.setStyle(ButtonStyle.Success),
			);
			const embed = new EmbedBuilder()
			.setColor(0x0099FF)
			.setTitle('Split')
			.setDescription('Select a Site');
		await interaction.update({embeds: [embed], components: [row] });
		}
	}
});
//spike button library
client.on(Events.InteractionCreate, async interaction => {
	if (!interaction.isButton()) return;
	if (interaction.customId === 'AscentA') {
		await interaction.reply({ content: 'https://cdn.discordapp.com/attachments/1068409566179639337/1070795973003063306/AscentA.png', ephemeral: true});
	}
	if (interaction.customId === 'AscentB') {
		await interaction.reply({ content: 'https://cdn.discordapp.com/attachments/1068409566179639337/1070544414910447656/AscentB.png', ephemeral: true});
	}
	if (interaction.customId === 'BindA') {
		await interaction.reply({ content: 'https://cdn.discordapp.com/attachments/1068409566179639337/1070796091144024104/BindA.png', ephemeral: true});
	}
	if (interaction.customId === 'BindB') {
		await interaction.reply({ content: 'https://cdn.discordapp.com/attachments/1068409566179639337/1070796279338258562/BindB.png', ephemeral: true});
	}
	if (interaction.customId === 'BreezeA') {
		await interaction.reply({ content: 'https://cdn.discordapp.com/attachments/1068409566179639337/1070796471915515935/BreezeA.png', ephemeral: true});
	}
	if (interaction.customId === 'BreezeB') {
		await interaction.reply({ content: 'https://cdn.discordapp.com/attachments/1068409566179639337/1070796489305116702/BreezeB.png', ephemeral: true});
	}
	if (interaction.customId === 'FractureA') {
		await interaction.reply({ content: 'https://cdn.discordapp.com/attachments/1068409566179639337/1070796510003990528/FractureA.png', ephemeral: true});
	}
	if (interaction.customId === 'FractureB') {
		await interaction.reply({ content: 'https://cdn.discordapp.com/attachments/1068409566179639337/1070796529041952880/FractureB.png', ephemeral: true});
	}
	if (interaction.customId === 'HavenA') {
		await interaction.reply({ content: 'https://cdn.discordapp.com/attachments/1068409566179639337/1070796547161333781/HavenA.png', ephemeral: true});
	}
	if (interaction.customId === 'HavenB') {
		await interaction.reply({ content: 'https://cdn.discordapp.com/attachments/1068409566179639337/1070796583542734939/HavenB.png', ephemeral: true});
	}
	if (interaction.customId === 'HavenC') {
		await interaction.reply({ content: 'https://cdn.discordapp.com/attachments/1068409566179639337/1070796603876720712/HavenC.png', ephemeral: true});
	}
	if (interaction.customId === 'IceboxA') {
		await interaction.reply({ content: 'https://cdn.discordapp.com/attachments/1068409566179639337/1070799843917836338/IceboxA.png', ephemeral: true});
	}
	if (interaction.customId === 'IceboxB') {
		await interaction.reply({ content: 'https://cdn.discordapp.com/attachments/1068409566179639337/1070796718364430386/IceboxB.png', ephemeral: true});
	}
	if (interaction.customId === 'LotusA') {
		await interaction.reply({ content: 'https://cdn.discordapp.com/attachments/1068409566179639337/1070796742360039516/LotusA.png', ephemeral: true});
	}
	if (interaction.customId === 'LotusB') {
		await interaction.reply({ content: 'https://cdn.discordapp.com/attachments/1068409566179639337/1070796762392039504/LotusB.png', ephemeral: true});
	}
	if (interaction.customId === 'LotusC') {
		await interaction.reply({ content: 'No lineup currently available. Sorry!', ephemeral: true});
	}
	if (interaction.customId === 'PearlA') {
		await interaction.reply({ content: 'https://cdn.discordapp.com/attachments/1068409566179639337/1070796786085658665/PearlA.png', ephemeral: true});
	}
	if (interaction.customId === 'PearlB') {
		await interaction.reply({ content: 'https://cdn.discordapp.com/attachments/1068409566179639337/1070796804091818027/PearlB.png', ephemeral: true});
	}
	if (interaction.customId === 'SplitA') {
		await interaction.reply({ content: 'No lineup currently available. Sorry!', ephemeral: true});
	}
	if (interaction.customId === 'SplitB') {
		await interaction.reply({ content: 'https://cdn.discordapp.com/attachments/1068409566179639337/1070796825348558868/SplitB.png', ephemeral: true});
	}
});
// Log in to Discord with your client's token
client.login(process.env.TOKEN);