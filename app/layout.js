import { Inter } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'SkyTrade Alpha - Premium Crypto Trading Platform',
  description: 'Access exclusive crypto trading insights with SkyTrade Alpha',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow py-8">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}