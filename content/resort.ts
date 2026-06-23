/**
 * Structured resort data — the single source of truth for facts, prices and
 * contacts. Translatable UI copy lives in /messages; this file holds
 * locale-independent data (numbers, handles, coordinates) plus i18n keys.
 *
 * CMS-ready: when a headless CMS is added, replace these constants with a typed
 * fetch returning the same shapes. Components import from here, never inline.
 */

export type Money = number; // tenge

export interface DayPass {
  adultWeekday: Money;
  adultWeekend: Money;
  child: Money; // ages 3–12, includes animation
  hours: string;
}

export interface StayOption {
  /** i18n key under `stay.options` for the localized name. */
  key: string;
  priceFrom: Money;
  priceTo: Money;
  capacity: string;
}

export interface Contacts {
  phone: string;
  phoneHref: string;
  whatsapp: string;
  instagram: string;
  tiktok: string;
  twogis: string;
  addressKey: string; // i18n key for the human-readable address
  geo: { lat: number; lng: number };
}

export const dayPass: DayPass = {
  adultWeekday: 15000,
  adultWeekend: 20000,
  child: 10000,
  hours: "10:00–23:00",
};

export const rooms: StayOption[] = [
  { key: "single", priceFrom: 45000, priceTo: 60000, capacity: "1–2" },
  { key: "standard", priceFrom: 75000, priceTo: 95000, capacity: "2" },
  { key: "semiLux", priceFrom: 95000, priceTo: 115000, capacity: "2–3" },
  { key: "family", priceFrom: 105000, priceTo: 140000, capacity: "3–4" },
  { key: "lux", priceFrom: 105000, priceTo: 140000, capacity: "2–4" },
];

export const houses: StayOption[] = [
  { key: "guestHouse", priceFrom: 80000, priceTo: 95000, capacity: "4–5" },
  { key: "celebrity", priceFrom: 190000, priceTo: 230000, capacity: "6+" },
];

export const contacts: Contacts = {
  phone: "+7 701 100 28 27",
  phoneHref: "tel:+77011002827",
  whatsapp: "https://wa.me/77011002827",
  instagram: "https://instagram.com/tal_resort",
  tiktok: "https://www.tiktok.com/@tal.resort",
  twogis: "https://2gis.kz/almaty/firm/tal_resort",
  addressKey: "location.address",
  // Approximate; refine with the exact pin before launch.
  geo: { lat: 43.2986, lng: 77.2297 },
};

/** Anchor ids used by the nav and section components. */
export const sectionIds = {
  aqua: "aqua",
  baths: "baths",
  stay: "stay",
  restaurant: "restaurant",
  prices: "prices",
  location: "location",
} as const;
