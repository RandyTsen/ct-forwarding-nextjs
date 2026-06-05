import { cn } from "@/lib/utils";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  /** "default" = max-w-7xl (1280px), "narrow" = max-w-5xl, "wide" = max-w-screen-2xl */
  size?: "narrow" | "default" | "wide";
}

const sizeClasses = {
  narrow:  "max-w-5xl",
  default: "max-w-7xl",
  wide:    "max-w-screen-2xl",
};

/** Standard centred container with responsive horizontal padding. */
export function Container({ children, className, size = "default" }: ContainerProps) {
  return (
    <div className={cn("mx-auto w-full px-5 sm:px-8 lg:px-12", sizeClasses[size], className)}>
      {children}
    </div>
  );
}
