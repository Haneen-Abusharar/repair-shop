import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";
import { Roboto, Roboto_Mono  } from "next/font/google";

const roboto = Roboto({
  variable: "--font-roboto",
  weight: '400',
  subsets: ['latin'],
  display: 'swap'
});

const robotoMonoBold = Roboto_Mono({
  variable: "--font-roboto-mono-bold",
  weight: '700',
  subsets: ['latin'],
  display: 'swap'
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${robotoMonoBold.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
