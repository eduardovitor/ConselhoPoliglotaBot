
const conselhos_list = require('./conselhos.js');
const TelegramBot = require('node-telegram-bot-api');
const token = process.env.TOKEN;
const bot = new TelegramBot(token, {polling: true});

let conselhos = conselhos_list;

bot.onText(/\/start/, (msg) => {
    bot.sendMessage(msg.chat.id, "Olá visitante, criado por Eduardo Vitor, eu sou o ConselhoPoliglotaBot e tenho o objetivo de fornecer atividades aleatórias para imersão no aprendizado em um idioma que você esteja aprendendo! Basta digitar /conselhoaleatorio e eu darei uma recomendação sobre como estudar no seu idioma alvo, divirta-se!");
});

bot.onText(/\/conselhoaleatorio/, (msg) => {
    let elemento_aleatorio_ind = Math.floor(Math.random() * conselhos.length); // Função para conseguir um elemento aleatório do array
    let conselho = conselhos[elemento_aleatorio_ind];
    bot.sendMessage(msg.chat.id, conselho);
});
