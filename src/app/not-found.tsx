import Link from "next/link";
import { ArrowLeft, MapPin } from "lucide-react";

export default function NotFound() {
  return (
    <div
      className="min-h-screen bg-carbon flex flex-col items-center justify-center px-6 text-center relative overflow-hidden"
    >
      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(11,122,58,1) 1px, transparent 1px), linear-gradient(90deg, rgba(11,122,58,1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-primary/6 blur-[140px] pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-2xl mx-auto">
        {/* Giant 404 */}
        <p
          className="font-display font-extrabold text-primary-light/15 select-none leading-none"
          style={{ fontSize: "clamp(9rem, 28vw, 20rem)" }}
        >
          404
        </p>

        {/* Pill badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/5 px-4 py-2 backdrop-blur-sm -mt-8 mb-6">
          <MapPin size={12} className="text-primary-light" />
          <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-white/55 font-body">
            Page Not Found
          </span>
        </div>

        {/* Heading */}
        <h1
          className="font-display font-extrabold text-white uppercase tracking-wide leading-none mb-4"
          style={{ fontSize: "clamp(2rem, 5.5vw, 3.8rem)" }}
        >
          This route has gone
          <br />
          <span className="text-primary-light">off the map.</span>
        </h1>

        <p className="font-body text-white/35 text-base leading-relaxed mb-10 max-w-sm mx-auto">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
          Let&apos;s get you back on track.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="group inline-flex items-center gap-3 bg-primary text-white font-body font-semibold px-8 py-4 rounded-xl text-sm tracking-widest uppercase hover:bg-primary-dark transition-all duration-300 hover:shadow-xl hover:shadow-primary/20 cursor-pointer"
          >
            <ArrowLeft
              size={15}
              className="transition-transform duration-300 group-hover:-translate-x-1"
            />
            Back to Home
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 border border-white/18 text-white/65 hover:text-white hover:border-white/35 font-body font-semibold px-8 py-4 rounded-xl text-sm tracking-widest uppercase transition-all duration-300 cursor-pointer"
          >
            Contact Us
          </Link>
        </div>

        <p className="mt-14 font-body text-white/20 text-xs tracking-widest uppercase">
          CT Forwarding &amp; Transport · Kota Kinabalu, Sabah · Est. 1999
        </p>
      </div>
    </div>
  );
}
