import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { MedicineProvider } from "@/contexts/MedicineContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BulaJá",
  description: "Uma bula online de fácil entedimento",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MedicineProvider>
          {children}
        </MedicineProvider>
      </body>
    </html>
  );
}
