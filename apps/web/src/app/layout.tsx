import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Тендерный AI-ассистент",
  description: "AI-помощник для поиска и анализа закупок",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className="antialiased min-h-screen">
        {children}
      </body>
    </html>
  );
}
