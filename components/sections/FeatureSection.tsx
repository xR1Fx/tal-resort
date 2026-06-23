import { Reveal } from "@/components/motion/Reveal";

type Props = {
  id: string;
  index: string;
  title: string;
  lead: string;
  /** Flip media to the start side for layout rhythm. */
  mediaFirst?: boolean;
};

/**
 * Generic editorial feature block (text + media slot). The media area is a
 * clearly-labelled placeholder until real photo/video is exported from Tilda.
 */
export function FeatureSection({ id, index, title, lead, mediaFirst }: Props) {
  return (
    <section id={id} className="container-tal scroll-mt-24 py-24 md:py-32">
      <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
        <Reveal
          className={`lg:col-span-5 ${mediaFirst ? "lg:order-2" : ""}`}
        >
          <span className="font-display text-sm text-ember-400">{index}</span>
          <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight text-bone-50 md:text-5xl">
            {title}
          </h2>
          <p className="mt-5 max-w-[42ch] text-lg text-bone-300">{lead}</p>
        </Reveal>

        <Reveal
          delay={0.1}
          className={`lg:col-span-7 ${mediaFirst ? "lg:order-1" : ""}`}
        >
          {/* TODO: replace with real photography/video (1600×1000). */}
          <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-gradient-to-br from-ink-700 to-ink-900 ring-1 ring-bone-200/10">
            <span className="absolute bottom-4 left-5 text-xs uppercase tracking-[0.2em] text-bone-400">
              {title}
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
