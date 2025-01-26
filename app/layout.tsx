import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';


import Navbar from '@/components/function/navbar';
import { Footer } from '@/components/function/footer';

const poppins = Poppins({ weight: ["100", '200', '300', '400', '500', '600', '700', '800', '900'], subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Code 4 Cause',
  description: 'Empowering Communities Through Technology',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} font-sans antialiased bg-white`}>
        <Navbar />
        {children}
        <Footer />

      </body>
    </html>
  );
}
