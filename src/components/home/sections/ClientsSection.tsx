"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, ExternalLink } from "lucide-react";
import { CTLogo } from "@/components/logo/CTLogo";

const CLIENTS = [
  "Telekom Malaysia","Petronas Carigali","Ranhill Engineering",
  "Bersatu Integrated Logistics","Focus Lumber Bhd","MTT Shipping",
  "Harbour Agencies (Sabah)","Viking Packaging","Live Water Industries",
  "Trans Borneo Marketing","Unity Marketing (M)","Veracity Corporation",
];

const ROW1 = [...CLIENTS.slice(0, 6),  ...CLIENTS.slice(0, 6)];
const ROW2 = [...CLIENTS.slice(6),     ...CLIENTS.slice(6)];

const QUICK = [
  { label: "About Us",  href: "/about" },
  { label: "Services",  href: "/services" },
  { label: "Projects",  href: "/projects" },
  { label: "Careers",   href: "/news/careers" },
  { label: "Contact",   href: "/contact" },
];

export function ClientsSection() {
  const year = new Date().getFullYear();

  return (
    <div className="bg-white flex flex-col" style={{ height: "100dvh", overflowY: "auto" }}>

      {/* ── Clients marquee ── */}
      <div className="flex-1 flex flex-col justify-center border-b border-slate/10 py-6 overflow-hidden">

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-7 px-5"
        >
          <p className="text-primary text-[10px] tracking-[0.45em] uppercase font-body font-semibold mb-2 flex items-center justify-center gap-2">
            <span className="w-6 h-px bg-primary" />Trusted By<span className="w-6 h-px bg-primary" />
          </p>
          <h2 className="font-display font-extrabold text-carbon uppercase tracking-wide"
            style={{ fontSize: "clamp(1.6rem, 4vw, 2.8rem)" }}>
            Our Valued <span className="text-primary">Clients &amp; Partners</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="overflow-hidden mb-3">
            <div className="flex gap-4 w-max" style={{ animation: "marquee-left 26s linear infinite" }}>
              {ROW1.map((name, i) => (
                <div key={`r1-${i}`} className="flex-shrink-0 px-6 py-3 border border-slate/12 rounded-sm bg-smoke hover:border-primary/35 hover:bg-white transition-all duration-200">
                  <p className="font-body font-semibold text-slate/65 text-sm whitespace-nowrap">{name}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="overflow-hidden">
            <div className="flex gap-4 w-max" style={{ animation: "marquee-right 30s linear infinite" }}>
              {ROW2.map((name, i) => (
                <div key={`r2-${i}`} className="flex-shrink-0 px-6 py-3 border border-slate/12 rounded-sm bg-smoke hover:border-primary/35 hover:bg-white transition-all duration-200">
                  <p className="font-body font-semibold text-slate/65 text-sm whitespace-nowrap">{name}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* ── CTA band ── */}
      <div className="bg-primary py-4 px-5 sm:px-8 lg:px-12 flex-shrink-0">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-display font-bold text-xl uppercase tracking-wide text-white">Ready to Move Your Cargo?</p>
            <p className="text-white/65 text-xs font-body mt-0.5">Sabah-wide coverage · 25+ years expertise · Reliable, every time.</p>
          </div>
          <Link href="/contact"
            className="flex-shrink-0 inline-flex items-center gap-2 bg-white text-primary font-body font-bold px-7 py-3 rounded-sm text-sm tracking-wide hover:bg-gold hover:text-carbon transition-colors duration-200">
            Get a Quote <ExternalLink size={13} />
          </Link>
        </div>
      </div>

      {/* ── Footer ── */}
      <footer className="bg-primary-dark text-white flex-shrink-0">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-4 sm:py-5">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">

            <div className="col-span-2 lg:col-span-1">
              <Link href="/" className="flex items-center gap-2.5 mb-3">
                <CTLogo variant="white" size={38} />
                <p className="text-white text-sm font-body leading-tight">
                  <span className="font-extrabold">CT</span>
                  <span className="font-light text-white/65"> Forwarding &amp; Transport Sdn Bhd</span>
                </p>
              </Link>
              <p className="text-white/40 text-xs font-body leading-relaxed">
                Sabah&apos;s trusted logistics partner since 1999. Container haulage, freight forwarding, warehousing, and project cargo.
              </p>
            </div>

            <div>
              <p className="text-gold text-[10px] tracking-[0.3em] uppercase font-body font-bold mb-3">Navigate</p>
              <ul className="space-y-1.5">
                {QUICK.map((l) => (
                  <li key={l.href}><Link href={l.href} className="text-white/45 hover:text-primary-light text-xs font-body transition-colors">{l.label}</Link></li>
                ))}
              </ul>
            </div>

            <div className="col-span-2">
              <p className="text-gold text-[10px] tracking-[0.3em] uppercase font-body font-bold mb-3">Contact Us</p>
              <div className="grid sm:grid-cols-2 gap-2.5 text-xs">
                <a href="tel:+60882596663" className="flex items-center gap-2 text-white/45 hover:text-white transition-colors">
                  <Phone size={11} className="text-primary-light flex-shrink-0" />088-259663 / 258662
                </a>
                <a href="mailto:contact@ctforwarding.com.my" className="flex items-center gap-2 text-white/45 hover:text-white transition-colors">
                  <Mail size={11} className="text-primary-light flex-shrink-0" />contact@ctforwarding.com.my
                </a>
                <div className="flex items-start gap-2 text-white/35 sm:col-span-2">
                  <MapPin size={11} className="text-primary-light flex-shrink-0 mt-0.5" />
                  Unit A905, 9th Floor, Wisma Merdeka Phase 1, Jalan Tun Razak, 88000 Kota Kinabalu, Sabah
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-3 flex flex-col sm:flex-row items-center justify-between gap-2 text-[10px] text-white/30 font-body">
            <p>© {year} CT Forwarding &amp; Transport Sdn Bhd. All rights reserved.</p>
            <p className="font-mono tracking-wider">Co. No: 199901025995 (500895-V) · SST: S10-1808-31012358 · TIN: C7877772000</p>
          </div>
        </div>
      </footer>

      <style>{`
        @keyframes marquee-left  { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        @keyframes marquee-right { 0% { transform: translateX(-50%); } 100% { transform: translateX(0); } }
      `}</style>
    </div>
  );
}
