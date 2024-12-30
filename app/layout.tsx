import type { Metadata } from 'next';
import { Inter } from 'next/font/google'
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './global.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Dev M Patel',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <main className='dark'>
          <div className='min-h-screen bg-background-light dark:bg-background-dark text-txt-light dark:text-txt-dark'>
            <Header />
            {children}
            <Footer />
          </div>
        </main>
      </body>
    </html>
  );
}
