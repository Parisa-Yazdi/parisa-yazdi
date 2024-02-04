import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Heebo } from 'next/font/google';
import './globals.css';
import { Suspense } from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer/Footer';
import { HydrationOverlay } from '@builder.io/react-hydration-overlay';
import { Newsletter } from '@/components/newsletter';

const heebo = Heebo({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Parisa Yazdi',
  description: 'Articles and Art by Parisa Yazdi'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${heebo.className} w-full`}>
        <Suspense>
          <NavBar />
          <main>{children}</main>
          <Newsletter />
          <Footer />
        </Suspense>
      </body>
    </html>
  );
}
