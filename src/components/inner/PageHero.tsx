import { cn } from "@/lib/utils";

interface PageHeroProps {
  label: string;
  title: string;
  titleAccent?: string;
  subtitle?: string;
  bgImage?: string;
  dark?: boolean;
  className?: string;
}

export function PageHero({
  label,
  title,
  titleAccent,
  subtitle,
  bgImage,
  dark = true,
  className,
}: PageHeroProps) {
  return (
    <section
      className={cn(
        "relative flex items-end pb-16 pt-40 overflow-hidden",
        dark ? "bg-carbon text-white" : "bg-smoke text-carbon",
        className
      )}
      style={{ minHeight: "38vh" }}
    >
      {bgImage && (
        <>
          <div className="absolute inset-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={bgImage}
              alt=""
              aria-hidden
              className="w-full h-full object-cover opacity-20"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-carbon/60 to-carbon/95" />
        </>
      )}
      {!bgImage && dark && (
        <div className="absolute inset-0 bg-gradient-to-br from-carbon via-slate/80 to-carbon" />
      )}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <p
          className={cn(
            "text-[11px] tracking-[0.45em] uppercase font-body font-semibold mb-3 flex items-center gap-2",
            dark ? "text-primary-light" : "text-primary"
          )}
        >
          <span className={cn("w-8 h-px", dark ? "bg-primary-light/60" : "bg-primary")} />
          {label}
        </p>
        <h1
          className="font-display font-extrabold uppercase tracking-wide leading-none mb-4"
          style={{ fontSize: "clamp(2.6rem, 6vw, 5rem)" }}
        >
          {title}
          {titleAccent && (
            <>
              <br />
              <span className="text-primary-light">{titleAccent}</span>
            </>
          )}
        </h1>
        {subtitle && (
          <p
            className={cn(
              "font-body leading-relaxed max-w-2xl",
              dark ? "text-white/55" : "text-slate/55"
            )}
            style={{ fontSize: "clamp(0.9rem, 1.2vw, 1.05rem)" }}
          >
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
