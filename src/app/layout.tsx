import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import { Toaster } from 'react-hot-toast';
import "./globals.css";

const noto = Noto_Sans({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Zedny platform",
  description: "Zedny platform for e learning and training",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${noto.variable} antialiased `}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
