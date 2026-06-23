import { defineRouting } from "next-intl/routing";

// RU is the primary language; KZ (Kazakh) and EN are full alternates.
export const routing = defineRouting({
  locales: ["ru", "kz", "en"],
  defaultLocale: "ru",
  // Keep the default locale visible in the URL (/ru) for clean SEO hreflang.
  localePrefix: "always",
});

export type Locale = (typeof routing.locales)[number];
