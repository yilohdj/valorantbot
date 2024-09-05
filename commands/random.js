const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('random')
		.setDescription('Selects a random Valorant Agent for you to play'),
	async execute(interaction) {
        x = Math.ceil(Math.random()*20);
        if (x === 1){
		    await interaction.reply('Astra');
        }
        if (x === 2){
            await interaction.reply('Breach ');
        }
        if (x === 3){
            await interaction.reply('Brimstone');
        }
        if (x === 4){
            await interaction.reply('Chamber');
        }
        if (x === 5){
		    await interaction.reply('Cypher');
        }
        if (x === 6){
		    await interaction.reply('Fade');
        }
        if (x === 7){
		    await interaction.reply('Harbor');
        }
        if (x === 8){
		    await interaction.reply('Jett');
        }
        if (x === 9){
		    await interaction.reply('KAY/O');
        }
        if (x === 10){
		    await interaction.reply('Killjoy');
        }
        if (x === 11){
		    await interaction.reply('Neon');
        }
        if (x === 12){
		    await interaction.reply('Omen');
        }
        if (x === 13){
		    await interaction.reply('Phoenix');
        }
        if (x === 14){
		    await interaction.reply('Raze');
        }
        if (x === 15){
		    await interaction.reply('Reyna');
        }
        if (x === 16){
		    await interaction.reply('Sage');
        }
        if (x === 17){
		    await interaction.reply('Skye');
        }
        if (x === 18){
		    await interaction.reply('Sova');
        }
        if (x === 19){
		    await interaction.reply('Viper');
        }
        if (x === 20){
		    await interaction.reply('Yoru');
        }

	},
};