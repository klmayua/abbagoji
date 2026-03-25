import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Alhaji Abba Goji for Senate 2027 | Yobe East Zone B",
  description: "Building Yobe East Together. Alhaji Abba Goji's campaign for Senate 2027 - Jobs, Education, Healthcare, Infrastructure.",
  keywords: ["Alhaji Abba Goji", "Senate 2027", "Yobe East", "Zone B", "Campaign", "Nigeria"],
  openGraph: {
    title: "Alhaji Abba Goji for Senate 2027",
    description: "Building Yobe East Together",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-surface text-on-surface">
        {children}
      </body>
    </html>
  );
}
