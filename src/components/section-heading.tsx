type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center">
      <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-cyan-300">
        {eyebrow}
      </p>
      <h2 className="text-balance text-3xl font-bold text-white md:text-4xl">{title}</h2>
      <p className="mt-4 text-pretty text-zinc-300">{description}</p>
    </div>
  );
}
