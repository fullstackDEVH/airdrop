import Bot from 'node-telegram-bot-api';

export default async function handler(req?: any, res?: any) {
  // Replace 'YOUR_BOT_TOKEN' with your actual bot token
  const token = '7175923408:AAGIYrgawznFmqBtKXn8oaqVgKkbZhgcVWM';

  // Initialize the bot with your token
  const bot = new Bot(token);

  try {
    // Replace 'CHAT_ID' with the chat ID you want to send the message to
    const chatId = '-4116950572';

    // Replace 'YOUR_MESSAGE' with the message you want to send
    const message = 'YOUR_MESSAGE';

    // Send the message
    await bot.sendMessage(chatId, message);

    res.status(200).json({ success: true });
  } catch (error: any) {
    console.error('Error sending message:', error.message);
    res.status(500).json({ success: false, error: error.message });
  }
}
