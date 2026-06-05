import { cn } from "@/lib/utils";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  /** Background preset */
  bg?: "white" | "smoke" | "carbon" | "forest" | "none";
}

const bgClasses = {
  white:  "bg-white",
  smoke:  "bg-smoke",
  carbon: "bg-carbon",
  forest: "bg-primary-dark",
  none:   "",
};

/** Section wrapper with consistent vertical padding and optional background preset. */
export function Section({ children, className, id, bg = "none" }: SectionProps) {
  return (
    <section
      id={id}
      className={cn("py-20 lg:py-28", bgClasses[bg], className)}
    >
      {children}
    </section>
  );
}
