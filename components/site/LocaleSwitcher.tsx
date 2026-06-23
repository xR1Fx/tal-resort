"use client";

import { useLocale } from "next-intl";
import { useTransition } from "react";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

const LABELS: Record<string, string> = { ru: "RU", kz: "KZ", en: "EN" };

export function LocaleSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  return (
    <div className="flex items-center gap-1" aria-label="Language">
      {routing.locales.map((loc) => {
        const active = loc === locale;
        return (
          <button
            key={loc}
            type="button"
            disabled={active || isPending}
            onClick={() =>
              startTransition(() => router.replace(pathname, { locale: loc }))
            }
            className={`px-2 py-1 text-xs tracking-widest transition-colors ${
              active
                ? "text-ember-400"
                : "text-bone-400 hover:text-bone-100"
            }`}
          >
            {LABELS[loc]}
          </button>
        );
      })}
    </div>
  );
}
