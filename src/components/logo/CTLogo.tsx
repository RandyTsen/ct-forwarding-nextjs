import Image from "next/image";
import { cn } from "@/lib/utils";

export type LogoVariant = "default" | "white" | "green";

interface CTLogoProps {
  variant?: LogoVariant;
  /** Width in pixels — height auto-calculated from aspect ratio (≈ 1.026:1) */
  size?: number;
  className?: string;
  priority?: boolean;
}

const LOGO_SRC: Record<LogoVariant, string> = {
  default: "/images/logo/ct-logo.svg",
  white:   "/images/logo/ct-logo-white.svg",
  green:   "/images/logo/ct-logo-green.svg",
};

/** CT Forwarding & Transport logo — scalable SVG, three colour variants. */
export function CTLogo({
  variant = "default",
  size = 56,
  className,
  priority = false,
}: CTLogoProps) {
  // Maintain the SVG's native viewBox ratio: 800/780 ≈ 1.026
  const height = Math.round(size / 1.026);

  return (
    <Image
      src={LOGO_SRC[variant]}
      alt="CT Forwarding & Transport Sdn Bhd"
      width={size}
      height={height}
      className={cn("select-none", className)}
      priority={priority}
      draggable={false}
    />
  );
}
