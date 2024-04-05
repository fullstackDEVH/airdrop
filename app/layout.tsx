'use client';

import { Inter } from 'next/font/google';
import './globals.css';

import { Footer, Header } from '@/components/Layout';
import { Web3Modal } from '@/context/Web3Modal';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Web3Modal>
          <Header />
          {children}
          <Footer />
        </Web3Modal>
      </body>
    </html>
  );
}
