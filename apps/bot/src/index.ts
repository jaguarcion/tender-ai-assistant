import { Telegraf, Markup } from 'telegraf';
import dotenv from 'dotenv';

dotenv.config({ path: '../../.env' });

const bot = new Telegraf(process.env.TELEGRAM_BOT_TOKEN || '');

bot.start((ctx) => {
  ctx.reply(
    `Привет! Я помогаю находить подходящие закупки и тендеры для бизнеса.\n\n` +
    `Я могу каждый день присылать тебе в Telegram:\n` +
    `— новые подходящие закупки;\n` +
    `— краткое описание;\n` +
    `— сумму и дедлайн;\n` +
    `— AI-анализ требований;\n` +
    `— рекомендацию, стоит ли участвовать.\n\n` +
    `Давай создадим первый профиль поиска.`,
    Markup.inlineKeyboard([
      [Markup.button.callback('Создать профиль', 'CREATE_PROFILE')],
      [Markup.button.url('Открыть веб-кабинет', process.env.APP_URL || 'http://localhost:3000')]
    ])
  );
});

bot.action('CREATE_PROFILE', (ctx) => {
  ctx.reply('Отлично! Как назовем профиль поиска? (Напиши название)');
});

bot.on('text', (ctx) => {
  if (ctx.message.text.startsWith('/')) return;
  
  ctx.reply(`Сохранил! (В MVP тут будет сценарий пошагового сбора данных профиля)`);
});

bot.launch().then(() => {
  console.log('Telegram bot is running...');
});

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
