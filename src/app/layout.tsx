import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Репетитор по математике ОГЭ | Никитина София Дмитриевна",
  description: "Профессиональная подготовка к ОГЭ по математике онлайн. Первое занятие бесплатно! 95% учеников сдают на 4 и 5. Индивидуальный подход, гибкое расписание. Записывайтесь!",
  keywords: ["репетитор по математике", "подготовка к ОГЭ", "ОГЭ математика", "онлайн репетитор", "математика 9 класс", "репетитор Новосибирск"],
  authors: [{ name: "Никитина София Дмитриевна" }],
  creator: "Никитина София Дмитриевна",
  publisher: "Никитина София Дмитриевна",
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: "https://same-228gzkhba51-latest.netlify.app",
    title: "Репетитор по математике ОГЭ | Никитина София Дмитриевна",
    description: "Профессиональная подготовка к ОГЭ по математике онлайн. Первое занятие бесплатно! 95% учеников сдают на 4 и 5.",
    siteName: "Репетитор по математике - София Никитина",
  },
  twitter: {
    card: "summary_large_image",
    title: "Репетитор по математике ОГЭ | Никитина София Дмитриевна",
    description: "Профессиональная подготовка к ОГЭ по математике онлайн. Первое занятие бесплатно!",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "google-site-verification-code",
    yandex: "yandex-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <Script
          crossOrigin="anonymous"
          src="//unpkg.com/same-runtime/dist/index.global.js"
        />
      </head>
      <body suppressHydrationWarning className="antialiased">
        <ClientBody>{children}</ClientBody>
      </body>
    </html>
  );
}
