import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "WorkTrace — Every Job. Every Hour. Every Document. Tracked.",
  description:
    "The modern field service platform for contractors, utilities, and industrial teams. Dispatch, execute, report, invoice — one auditable workflow.",
  openGraph: {
    title: "WorkTrace — Field Service, Reimagined",
    description:
      "Dispatch, DLRs, inventory, and invoicing in a single, beautifully designed platform.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={inter.variable}>{children}</body>
    </html>
  );
}
