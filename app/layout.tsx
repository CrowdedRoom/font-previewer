import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// import "./fonts/Alex.ttf";
// import "./fonts/Allura.ttf";
// import "./fonts/AMATIC.ttf";
// import "./fonts/Baby.ttf";
// import "./fonts/Buttery.ttf";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Font Previewer",
  description: "A simple tool to preview fonts for selection",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
