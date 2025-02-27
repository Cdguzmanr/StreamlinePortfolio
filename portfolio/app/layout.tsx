import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer";
import { Poppins, Raleway, Playfair_Display } from "next/font/google";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Carlos Guzman | Portfolio",
  description: "Check out my latest projects, skills, and professional experience. Let's connect!",
  openGraph: {
    title: "Carlos Guzman | Portfolio",
    description: "Check out my latest projects, skills, and professional experience. Let's connect!",
    images: ["/images/profile-square.jpg"],
    url: "https://carlosguzmanr.com/",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/*  */}
      </head>

      <body 
        id="page"
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}