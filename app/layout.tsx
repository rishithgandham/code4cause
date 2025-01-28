import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';


import Navbar from '@/components/function/navbar';
import { Footer } from '@/components/function/footer';

const poppins = Poppins({ weight: ["100", '200', '300', '400', '500', '600', '700', '800', '900'], subsets: ['latin'] });



export const metadata: Metadata = {
  title: 'Code 4 Cause',
  description: 'Code 4 Cause is a dedicated non-profit organization creating impactful websites for smaller organizations, bridging the digital divide one line of code at a time.',
  twitter: {
    card: 'summary_large_image',
    description: 'Code 4 Cause is a dedicated non-profit organization creating impactful websites for smaller organizations, bridging the digital divide one line of code at a time.',
  },
  openGraph: {
    title: 'Code 4 Cause',
    description: 'Code 4 Cause is a dedicated non-profit organization creating impactful websites for smaller organizations, bridging the digital divide one line of code at a time.',
    url: './',
    type: 'website',
    images: {
      url: '/c4clogo.png',
      alt: 'Code 4 Cause'
    },


  },
  verification: {
    google: '0zfOAU0qbnlRhCVbRzPgffHu34kpXfnEDLOcsVV1PZ8',
  }



};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} font-sans  antialiased bg-white`}>
        <Navbar />
        {children}
        <Footer />

      </body>
    </html>
  );
}
