import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Suspense } from "react";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/Footer/Footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Parisa Yazdi",
  description: "Articles and Art by Parisa Yazdi",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} w-full`}>
        <Navbar />
        <Suspense>
          <main>{children}</main>
        </Suspense>
        <Footer />
      </body>
    </html>
  );
}
