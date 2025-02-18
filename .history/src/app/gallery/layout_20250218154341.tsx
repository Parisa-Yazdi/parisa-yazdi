import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Heebo } from 'next/font/google';
import '../globals.css';
import { Suspense } from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer/Footer';
import { HydrationOverlay } from '@builder.io/react-hydration-overlay';
import { Newsletter } from '@/components/newsletter';
import StickySocialMediaBar from '@/components/sticky-sm-side-bar';

const heebo = Heebo({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Parisa Yazdi',
  description: 'Articles and Art by Parisa Yazdi'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // <html lang="en">
    <div className={`${heebo.className} flex min-h-screen w-full flex-col bg-black`}>
      <Suspense>
        <NavBar />

        <div className="flex flex-grow flex-col">
          <main className="flex-grow">{children}</main>
          <Newsletter />
          <Footer />
        </div>

        <StickySocialMediaBar />
      </Suspense>
    </div>
    // </html>
  );
}
