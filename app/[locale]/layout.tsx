import "./globals.css";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import Footer from '@/components/Footer';
import { Poppins } from 'next/font/google';
import {NextIntlClientProvider} from 'next-intl'
import { getLocale, getMessages } from "next-intl/server";

const inter = Poppins({ subsets: ["latin"], weight:['200','400','700'] });

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body
        suppressHydrationWarning
        className={`${inter.className} antialiased`}
      >
        <NextIntlClientProvider messages={messages}>
        <Header />
        {children}
        <Footer />
        <ScrollToTop />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
