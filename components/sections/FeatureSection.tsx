import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";

type Props = {
  id: string;
  index: string;
  title: string;
  lead: string;
  image: string;
  alt: string;
  /** Flip media to the start side for layout rhythm. */
  mediaFirst?: boolean;
};

/** Generic editorial feature block: copy + a real photograph. */
export function FeatureSection({
  id,
  index,
  title,
  lead,
  image,
  alt,
  mediaFirst,
}: Props) {
  return (
    <section id={id} className="container-tal scroll-mt-24 py-24 md:py-32">
      <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
        <Reveal className={`lg:col-span-5 ${mediaFirst ? "lg:order-2" : ""}`}>
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
          <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl ring-1 ring-bone-200/10">
            <Image
              src={image}
              alt={alt}
              fill
              sizes="(min-width: 1024px) 58vw, 100vw"
              className="object-cover"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
