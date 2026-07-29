import type { HTMLAttributes } from "react";

interface SectionProps extends HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  spacing?: "default" | "compact" | "large";
}

const spacingClasses = {
  compact: "py-16 sm:py-20",
  default: "py-20 sm:py-24 lg:py-28",
  large: "py-24 sm:py-32 lg:py-40",
};

export function Section({
  children,
  spacing = "default",
  className = "",
  ...props
}: SectionProps) {
  return (
    <section
      className={`${spacingClasses[spacing]} ${className}`}
      {...props}
    >
      {children}
    </section>
  );
}