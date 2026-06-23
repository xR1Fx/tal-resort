import Image from "next/image";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Hero } from "@/components/sections/Hero";
import { FeatureSection } from "@/components/sections/FeatureSection";
import { Reveal } from "@/components/motion/Reveal";
import { dayPass, contacts, sectionIds } from "@/content/resort";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("sections");
  const c = await getTranslations("common");

  const fmt = (n: number) => new Intl.NumberFormat("ru-RU").format(n);

  return (
    <>
      <Hero />

      <FeatureSection
        id={sectionIds.aqua}
        index="01"
        title={t("aqua.title")}
        lead={t("aqua.lead")}
        image="/images/aqua-pool.jpg"
        alt={t("aqua.title")}
      />
      <FeatureSection
        id={sectionIds.baths}
        index="02"
        title={t("baths.title")}
        lead={t("baths.lead")}
        image="/images/baths-salt.jpg"
        alt={t("baths.title")}
        mediaFirst
      />
      <FeatureSection
        id={sectionIds.stay}
        index="03"
        title={t("stay.title")}
        lead={t("stay.lead")}
        image="/images/stay-room.jpg"
        alt={t("stay.title")}
      />
      <FeatureSection
        id={sectionIds.restaurant}
        index="04"
        title={t("restaurant.title")}
        lead={t("restaurant.lead")}
        image="/images/restaurant-fireplace.jpg"
        alt={t("restaurant.title")}
        mediaFirst
      />

      {/* Day pass — clear pricing CTA. */}
      <section
        id={sectionIds.prices}
        className="container-tal scroll-mt-24 py-24 md:py-32"
      >
        <Reveal>
          <span className="font-display text-sm text-ember-400">05</span>
          <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight text-bone-50 md:text-5xl">
            {t("prices.title")}
          </h2>
          <p className="mt-5 max-w-[42ch] text-lg text-bone-300">
            {t("prices.lead")} · {dayPass.hours}
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-3">
          {[
            { label: "Будни", value: dayPass.adultWeekday },
            { label: "Выходные", value: dayPass.adultWeekend },
            { label: "Дети 3–12", value: dayPass.child },
          ].map((p, i) => (
            <Reveal
              key={p.label}
              delay={i * 0.08}
              className="rounded-2xl bg-ink-800 p-7 ring-1 ring-bone-200/10"
            >
              <p className="text-sm text-bone-400">{p.label}</p>
              <p className="mt-3 font-display text-3xl font-semibold text-bone-50">
                {fmt(p.value)} {c("tenge")}
              </p>
              <p className="mt-1 text-sm text-bone-400">{c("perDay")}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Location & contacts. */}
      <section
        id={sectionIds.location}
        className="container-tal scroll-mt-24 border-t border-bone-200/10 py-24 md:py-32"
      >
        <Reveal className="mb-12 overflow-hidden rounded-2xl ring-1 ring-bone-200/10">
          <div className="relative aspect-[21/9] w-full">
            <Image
              src="/images/building-logo.jpg"
              alt="TAL RESORT"
              fill
              sizes="(min-width: 1400px) 1400px, 100vw"
              className="object-cover"
            />
          </div>
        </Reveal>

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <h2 className="font-display text-4xl font-semibold tracking-tight text-bone-50 md:text-5xl">
              {t("location.title")}
            </h2>
            <p className="mt-5 max-w-[42ch] text-lg text-bone-300">
              {t("location.lead")}
            </p>
          </Reveal>
          <Reveal delay={0.1} className="flex flex-col justify-center gap-3">
            <a
              href={contacts.phoneHref}
              className="font-display text-2xl text-bone-50 hover:text-ember-400"
            >
              {contacts.phone}
            </a>
            <div className="flex flex-wrap gap-4 text-sm text-bone-400">
              <a href={contacts.whatsapp} target="_blank" rel="noopener noreferrer" className="hover:text-bone-100">
                WhatsApp
              </a>
              <a href={contacts.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-bone-100">
                Instagram
              </a>
              <a href={contacts.tiktok} target="_blank" rel="noopener noreferrer" className="hover:text-bone-100">
                TikTok
              </a>
              <a href={contacts.twogis} target="_blank" rel="noopener noreferrer" className="hover:text-bone-100">
                2GIS
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
