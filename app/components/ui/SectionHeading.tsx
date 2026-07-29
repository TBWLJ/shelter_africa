interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const alignment =
    align === "center"
      ? "mx-auto text-center"
      : "text-left";

  return (
    <div className={`max-w-2xl ${alignment}`}>
      {eyebrow && (
        <p className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-brand-primary">
          {eyebrow}
        </p>
      )}

      <h2 className="text-3xl font-extrabold tracking-[-0.03em] text-text-primary sm:text-4xl lg:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mt-5 text-base leading-7 text-text-secondary sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}