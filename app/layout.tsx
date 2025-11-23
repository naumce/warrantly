import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Warrantly - Never Lose a Warranty Again",
  description: "Track warranties, file claims, and get smart reminders—all powered by AI. Your digital warranty assistant.",
  keywords: ["warranty", "tracker", "warranty management", "receipt OCR", "AI claims", "warranty app"],
  authors: [{ name: "Warrantly" }],
  openGraph: {
    title: "Warrantly - Never Lose a Warranty Again",
    description: "Track warranties, file claims, and get smart reminders—all powered by AI.",
    type: "website",
    locale: "en_US",
    siteName: "Warrantly",
  },
  twitter: {
    card: "summary_large_image",
    title: "Warrantly",
    description: "Your digital warranty assistant powered by AI",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
