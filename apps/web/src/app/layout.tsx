import type { Metadata } from "next";
import Link from "next/link";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["cyrillic", "latin"], variable: "--font-sans" });

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
    <html lang="ru" className={`${inter.variable}`}>
      <body className="antialiased min-h-screen flex flex-col bg-background text-foreground font-sans">
        <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container flex h-14 max-w-screen-2xl items-center px-4 mx-auto">
            <div className="mr-4 flex">
              <Link href="/" className="mr-6 flex items-center space-x-2">
                <span className="font-bold sm:inline-block">Tender AI</span>
              </Link>
              <nav className="flex items-center gap-6 text-sm font-medium">
                <Link href="/tenders" className="transition-colors hover:text-foreground/80 text-foreground/60">Поиск</Link>
                <Link href="/profiles" className="transition-colors hover:text-foreground/80 text-foreground/60">Управление</Link>
                <Link href="/dashboard" className="transition-colors hover:text-foreground/80 text-foreground/60">Аналитика</Link>
                <Link href="/pricing" className="transition-colors hover:text-foreground/80 text-foreground/60">Тарифы</Link>
              </nav>
            </div>
            <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
              <nav className="flex items-center gap-2">
                <Link href="/login" className="text-sm font-medium transition-colors hover:text-foreground/80">Войти</Link>
              </nav>
            </div>
          </div>
        </header>
        <main className="flex-1">
          {children}
        </main>
      </body>
    </html>
  );
}
