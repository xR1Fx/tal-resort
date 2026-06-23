"use client";

import { useTranslations } from "next-intl";
import { contacts, sectionIds } from "@/content/resort";
import { LocaleSwitcher } from "./LocaleSwitcher";

export function Header() {
  const t = useTranslations("nav");

  const links: { id: string; label: string }[] = [
    { id: sectionIds.aqua, label: t("aqua") },
    { id: sectionIds.baths, label: t("baths") },
    { id: sectionIds.stay, label: t("hotel") },
    { id: sectionIds.restaurant, label: t("restaurant") },
    { id: sectionIds.prices, label: t("prices") },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="container-tal flex h-16 items-center justify-between md:h-[72px]">
        <a
          href={`#top`}
          className="font-display text-sm font-semibold uppercase tracking-[0.28em] text-bone-100"
        >
          Tal Resort
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className="text-sm text-bone-300 transition-colors hover:text-bone-100"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <LocaleSwitcher />
          <a
            href={contacts.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-ember-500 px-4 py-2 text-sm font-medium text-ink-950 transition-colors hover:bg-ember-400"
          >
            {t("book")}
          </a>
        </div>
      </div>
    </header>
  );
}
