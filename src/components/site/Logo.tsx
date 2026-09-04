import { cn } from "@/lib/utils";
import logoAsset from "@/assets/a1-logo-v3.png.asset.json";

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
      src={logoAsset.url}
      alt={title}
      className={cn("block object-contain", className)}
    />
  );
}
