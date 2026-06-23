import { createNavigation } from "next-intl/navigation";
import { routing } from "./routing";

// Locale-aware Link, useRouter, usePathname, redirect — use these everywhere
// instead of the next/navigation equivalents so locale prefixes stay correct.
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
