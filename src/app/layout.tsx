import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google"; // Assuming Outfit is used for headings
import "./globals.css";
import MainLayoutWrapper from "@/components/layout/MainLayoutWrapper";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
// Using Outfit as the heading font as per previous context
const outfit = Outfit({ subsets: ["latin"], variable: "--font-heading" });

export const metadata: Metadata = {
  title: "Department of Computer Science - DSVV",
  description: "Official website of the Computer Science Department, Dev Sanskriti Vishwavidyalaya.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${outfit.variable} font-sans antialiased bg-slate-50`}>
        <MainLayoutWrapper>
          {children}
        </MainLayoutWrapper>
      </body>
    </html>
  );
}
