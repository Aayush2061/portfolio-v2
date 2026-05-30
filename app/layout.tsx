import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aayush Bhandari — Full Stack & AI Developer",
  description:
    "Computer Engineering student at IOE, Tribhuvan University. Building full-stack and AI-powered applications. Open to internships and junior engineering roles.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
