type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
};

export function SectionHeading({ eyebrow, title, description, align = "left", tone = "light" }: SectionHeadingProps) {
  const titleClass = tone === "dark" ? "text-white" : "text-ink";
  const descriptionClass = tone === "dark" ? "text-white/68" : "text-slate-600";

  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"} data-reveal>
      <p className="civic-eyebrow">{eyebrow}</p>
      <h2 className={`mt-4 text-4xl font-black leading-snug sm:text-5xl ${titleClass}`}>{title}</h2>
      {description ? <p className={`mt-5 max-w-[65ch] text-base font-semibold leading-8 md:text-lg ${descriptionClass}`}>{description}</p> : null}
    </div>
  );
}
