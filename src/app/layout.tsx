import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google"; 
import "./globals.css";
import MainLayoutWrapper from "@/components/layout/MainLayoutWrapper";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
// Plus Jakarta Sans: modern, geometric sans-serif similar to Inter but optimized for display/headings
const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-heading" });

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
    <html lang="en" className="light">
      <body className={`${inter.variable} ${jakarta.variable} font-sans antialiased bg-slate-50`}>
        <MainLayoutWrapper>
          {children}
        </MainLayoutWrapper>
      </body>
    </html>
  );
}
