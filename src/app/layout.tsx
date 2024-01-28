import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Heebo } from 'next/font/google';
import './globals.css';
import { Suspense } from 'react';
import Navbar from '@/components/NavBar/Navbar';
import Footer from '@/components/Footer/Footer';
import { HydrationOverlay } from '@builder.io/react-hydration-overlay';

const heebo = Heebo({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Parisa Yazdi',
  description: 'Articles and Art by Parisa Yazdi'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${heebo.className} w-full`}>
        <Navbar />
        <Suspense>
          <main>{children}</main>
        </Suspense>
        <Footer />
      </body>
    </html>
  );
}
