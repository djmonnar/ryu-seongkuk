type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({ eyebrow, title, description, align = "left" }: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"} data-reveal>
      <p className="civic-eyebrow">{eyebrow}</p>
      <h2 className="mt-4 text-4xl font-black leading-snug text-ink sm:text-5xl">{title}</h2>
      {description ? <p className="mt-5 max-w-[65ch] text-base font-semibold leading-8 text-slate-600 md:text-lg">{description}</p> : null}
    </div>
  );
}
