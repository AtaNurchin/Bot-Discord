const commando = require('discord.js-commando');
const bot = new commando.Client();


bot.on('message',(message) => {

    if(message.content == 'sa') {
      //  message.reply('as');
      message.channel.sendMessage('as');

    }

    if(message.content == 'Hello') {
      //  message.reply('as');
      message.channel.sendMessage('Welcome Our Server');

    }
    if(message.content == 'Selamın Aleyküm') {
      //  message.reply('as');
      message.channel.sendMessage('Aleyküm Selam');

    }

    if(message.content == 'deneme') {
        message.reply('bana bak');

    }
    if(message.content == 'ne var lan') {
        message.reply('olum seni hacklerim');

    }
    if(message.content == 'hacklesene') {
        message.reply('bittin olum');

    }
    if(message.content == '!admin') {
        message.channel.sendMessage('Steam Grubumuza Baka Bilirsiniz...');
        

    }
    if(message.content == 'kameraya yaklaş') {
        message.reply('yaklaşdım geldimi ?');

    }


});



bot.login('');