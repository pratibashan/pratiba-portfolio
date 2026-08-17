import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pratiba Shan | Senior Software Engineer",
  description:
    "Senior Software Engineer with 10+ years of experience developing web and mobile applications using React Native, React, TypeScript, Node.js, and AWS.",
  keywords: [
    "Pratiba Shan",
    "Senior Software Engineer",
    "React Native",
    "React",
    "TypeScript",
    "Mobile Engineer",
    "Full Stack Engineer",
    "AWS",
  ],
  authors: [
    {
      name: "Pratiba Shan",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geist.variable} antialiased`}>{children}</body>
    </html>
  );
}
