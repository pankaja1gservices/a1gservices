import { cn } from "@/lib/utils";
import logoUrl from "@/assets/a1-logo-v3.png";

type LogoProps = {
  className?: string;
  title?: string;
};

export function Logo({
  className,
  title = "A1 Global Financial Consultant logo",
}: LogoProps) {
  return (
    <img
      src={logoUrl}
      alt={title}
      className={cn("block object-contain", className)}
    />
  );
}
