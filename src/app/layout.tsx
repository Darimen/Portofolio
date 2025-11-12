import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AppContextProvider from "./context";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tandea Sorin Darius",
  description: "Portfolio site of Tandea Sorin Darius - Software Developer",
  authors: [
    {
      name: "Tandea Sorin Darius",
      url: "https://dariustandea.com",
    },
  ],
  creator: "Tandea Sorin Darius",
  keywords: [
    "Tandea Sorin Darius",
    "Portfolio",
    "Software Developer",
    "Web Developer",
    "Programmer",
    "IT",
    "Programator",
    "Developer",
    "IT-ist",
    "ITist",
    "Junior Developer",
    "Frontend Developer",
    "Backend Developer",
    "Fullstack Developer",
    "Odaia IT",
  ]
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <AppContextProvider> 
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased pt-0 mt-0`}
        >
          {children}
        </body>
      </AppContextProvider>


    </html>
  );
}
