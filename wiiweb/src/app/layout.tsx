import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "WIIWEB",
  description: "wiiweb search engine",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header
          style={{
            backgroundColor: "coral",
            color: "white",
            padding: "15px 20px",
            textAlign: "center",
          }}
        >
          <p>wiiweb</p>
        </header>
        <main>{children}</main>
        <footer
          style={{
            backgroundColor: "#333",
            color: "white",
            textAlign: "center",
            padding: "10px 20px",
            position: "fixed",
            width: "100%",
            bottom: "0",
          }}
        >
          <p>all rights reserved</p>
        </footer>
      </body>
    </html>
  );
}
