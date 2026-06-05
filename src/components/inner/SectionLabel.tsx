interface SectionLabelProps {
  children: React.ReactNode;
  light?: boolean;
}

export function SectionLabel({ children, light }: SectionLabelProps) {
  return (
    <p
      className={`text-[11px] tracking-[0.45em] uppercase font-body font-semibold mb-3 flex items-center gap-2 ${
        light ? "text-primary-light" : "text-primary"
      }`}
    >
      <span className={`w-8 h-px ${light ? "bg-primary-light" : "bg-primary"}`} />
      {children}
    </p>
  );
}
