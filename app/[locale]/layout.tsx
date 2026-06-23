import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Onest, Manrope } from "next/font/google";
import { routing } from "@/i18n/routing";
import { SmoothScroll } from "@/components/providers/SmoothScroll";
import { Header } from "@/components/site/Header";
import "../globals.css";

// Display + body. Both ship cyrillic-ext, which carries the Kazakh-specific
// letters (Ә Ғ Қ Ң Ө Ұ Ү Һ) — required for the KZ locale.
const display = Onest({
  variable: "--font-display",
  subsets: ["latin", "cyrillic-ext"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const sans = Manrope({
  variable: "--font-sans",
  subsets: ["latin", "cyrillic-ext"],
  display: "swap",
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });
  return { title: t("title"), description: t("description") };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  setRequestLocale(locale);

  return (
    <html lang={locale} className={`${display.variable} ${sans.variable}`}>
      <body className="min-h-screen antialiased">
        <NextIntlClientProvider>
          <SmoothScroll>
            <Header />
            <main id="top">{children}</main>
          </SmoothScroll>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
