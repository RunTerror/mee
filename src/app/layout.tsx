import type { Metadata } from "next";
import { IBM_Plex_Mono, Lato } from "next/font/google";
import "./globals.css";

const ibmPlexMono = IBM_Plex_Mono({
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-mono",
  subsets: ["latin"],
});

const lato = Lato({
  weight: ["300", "400", "700"],
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Your Name — Designer",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${ibmPlexMono.variable} ${lato.variable}`}>
        {children}
      </body>
    </html>
  );
}
