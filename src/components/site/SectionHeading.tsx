import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  tone = "light",
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  tone?: "light" | "dark";
}) {
  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center")}>
      {eyebrow && (
        <p
          className={cn(
            "text-xs font-semibold uppercase tracking-[0.22em]",
            tone === "dark" ? "text-gold" : "text-cyan-accent",
          )}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          "mt-3 text-3xl font-semibold sm:text-4xl",
          tone === "dark" ? "text-navy-foreground" : "text-primary",
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-4 text-base leading-relaxed",
            tone === "dark" ? "text-navy-foreground/75" : "text-muted-foreground",
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
