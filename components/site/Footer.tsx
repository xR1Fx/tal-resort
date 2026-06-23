import { getTranslations } from "next-intl/server";
import { contacts } from "@/content/resort";

export async function Footer() {
  const t = await getTranslations("nav");

  const socials = [
    { href: contacts.whatsapp, label: "WhatsApp" },
    { href: contacts.instagram, label: "Instagram" },
    { href: contacts.tiktok, label: "TikTok" },
    { href: contacts.twogis, label: "2GIS" },
  ];

  return (
    <footer className="border-t border-bone-200/10 bg-ink-950">
      <div className="container-tal grid gap-10 py-16 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2.5">
            <img src="/logo.svg" alt="TAL RESORT" className="h-10 w-10" />
            <span className="font-display text-sm font-semibold uppercase tracking-[0.28em] text-bone-100">
              Tal Resort
            </span>
          </div>
          <p className="mt-4 max-w-[32ch] text-sm text-bone-400">
            Aqua &amp; SPA · {t("book")}
          </p>
        </div>

        <nav className="flex flex-col gap-2 text-sm text-bone-300">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-bone-100"
            >
              {s.label}
            </a>
          ))}
        </nav>

        <div className="text-sm text-bone-300">
          <a href={contacts.phoneHref} className="font-display text-lg text-bone-50 hover:text-brand-400">
            {contacts.phone}
          </a>
          <p className="mt-4 text-bone-400">
            © {new Date().getFullYear()} TAL RESORT
          </p>
        </div>
      </div>
    </footer>
  );
}
