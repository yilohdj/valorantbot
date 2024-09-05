const { SlashCommandBuilder } = require('discord.js');
const { ActionRowBuilder, Events, StringSelectMenuBuilder, EmbedBuilder } = require('discord.js');
const embed = new EmbedBuilder()
			.setColor(0x0099FF)
			.setTitle('Spike Lineups')
			.setDescription('Select your map\nNote: Lineups work for all Viper-esque mollies as well as Brimstone mollies');
		const row = new ActionRowBuilder()
			.addComponents(
				new StringSelectMenuBuilder()
					.setCustomId('spike')
					.setPlaceholder('Nothing selected')
					.setMinValues(1)
            		.setMaxValues(1)
					.addOptions(
						{
							label: 'Ascent',
							value: 'first_option',
						},
						{
							label: 'Bind',
							value: 'second_option',
						},
                        {
							label: 'Breeze',
							value: 'third_option',
						},
                        {
							label: 'Fracture',
							value: 'fourth_option',
						},
                        {
							label: 'Haven',
							value: 'fifth_option',
						},
                        {
							label: 'Icebox',
							value: 'sixth_option',
						},
                        {
							label: 'Lotus',
							value: 'seventh_option',
						},
                        {
							label: 'Pearl',
							value: 'eighth_option',
						},
                        {
							label: 'Split',
							value: 'ninth_option',
						},
					),
			);
module.exports = {
	data: new SlashCommandBuilder()
		.setName('spike')
		.setDescription('A library of default spike lineups'),
	async execute(interaction) {
		await interaction.reply({ embeds: [embed], components: [row] });
	},
}