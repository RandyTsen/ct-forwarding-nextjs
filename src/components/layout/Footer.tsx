import Link from "next/link";
import { CTLogo } from "@/components/logo/CTLogo";
import { Container } from "@/components/ui/Container";
import { Phone, Mail, MapPin, ExternalLink, MessageCircle } from "lucide-react";

const serviceLinks = [
  { label: "Transportation",            href: "/services/transportation" },
  { label: "Freight Forwarding",        href: "/services/freight-forwarding" },
  { label: "Warehousing & Distribution",href: "/services/warehousing" },
  { label: "Container Depot & Yard",    href: "/services/container-depot" },
  { label: "Breakbulk & Project Cargo", href: "/services/breakbulk" },
  { label: "Other Services",            href: "/services/other" },
];

const quickLinks = [
  { label: "About Us",    href: "/about" },
  { label: "Our Fleet",   href: "/services/transportation" },
  { label: "Projects",    href: "/projects" },
  { label: "News",        href: "/news" },
  { label: "Careers",     href: "/news/careers" },
  { label: "FAQ",         href: "/faq" },
  { label: "Contact Us",  href: "/contact" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-primary-dark text-white">

      {/* ── Top CTA band ── */}
      <div className="bg-primary py-10">
        <Container>
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-display font-bold text-2xl lg:text-3xl tracking-wider uppercase text-white">
                Ready to Move Your Cargo?
              </h3>
              <p className="text-white/75 mt-1 text-sm">
                Contact our team for a competitive quote — Sabah-wide coverage, 24/7 reliability.
              </p>
            </div>
            <Link
              href="/contact"
              className="flex-shrink-0 inline-flex items-center gap-2 bg-white text-primary font-body font-bold px-8 py-3.5 rounded-sm text-sm tracking-wide hover:bg-gold hover:text-carbon transition-colors duration-200"
            >
              Get a Quote
              <ExternalLink size={14} />
            </Link>
          </div>
        </Container>
      </div>

      {/* ── Main footer grid ── */}
      <Container className="py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">

          {/* Column 1 — Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-5">
              <CTLogo variant="white" size={52} />
              <p className="text-white text-sm tracking-wide font-body leading-tight">
                <span className="font-extrabold">CT</span>
                <span className="font-light text-white/75"> Forwarding &amp; Transport Sdn Bhd</span>
              </p>
            </Link>
            <p className="text-white/55 text-sm leading-relaxed">
              Sabah&apos;s trusted logistics partner since 1999. Delivering reliability
              across the state — container haulage, freight forwarding, warehousing,
              and beyond.
            </p>
            <p className="text-white/30 text-xs mt-4 italic">
              &ldquo;Connecting businesses and communities through logistics for a better future.&rdquo;
            </p>
          </div>

          {/* Column 2 — Quick Links */}
          <div>
            <h4 className="font-display font-bold text-sm tracking-[0.25em] uppercase text-gold mb-5">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-primary-light text-sm transition-colors duration-150 hover:pl-1"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Services */}
          <div>
            <h4 className="font-display font-bold text-sm tracking-[0.25em] uppercase text-gold mb-5">
              Our Services
            </h4>
            <ul className="space-y-2.5">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-primary-light text-sm transition-colors duration-150 hover:pl-1"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 — Contact */}
          <div>
            <h4 className="font-display font-bold text-sm tracking-[0.25em] uppercase text-gold mb-5">
              Get in Touch
            </h4>
            <ul className="space-y-4 text-sm">
              <li>
                <a
                  href="tel:+60882596663"
                  className="flex items-start gap-3 text-white/60 hover:text-white transition-colors"
                >
                  <Phone size={15} className="text-primary-light mt-0.5 flex-shrink-0" />
                  <span>088-259663 / 258662</span>
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/6088259663"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-white/60 hover:text-white transition-colors cursor-pointer"
                >
                  <MessageCircle size={15} className="text-[#25D366] mt-0.5 flex-shrink-0" />
                  <span>WhatsApp Us</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:contact@ctforwarding.com.my"
                  className="flex items-start gap-3 text-white/60 hover:text-white transition-colors break-all"
                >
                  <Mail size={15} className="text-primary-light mt-0.5 flex-shrink-0" />
                  <span>contact@ctforwarding.com.my</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-white/50">
                <MapPin size={15} className="text-primary-light mt-0.5 flex-shrink-0" />
                <span className="leading-relaxed">
                  Unit A905, 9th Floor,<br />
                  Wisma Merdeka Phase 1,<br />
                  Jalan Tun Razak, 88000<br />
                  Kota Kinabalu, Sabah
                </span>
              </li>
            </ul>
          </div>
        </div>
      </Container>

      {/* ── Bottom bar ── */}
      <div className="border-t border-white/10">
        <Container className="py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/35">
            <p>
              © {year} CT Forwarding &amp; Transport Sdn Bhd. All rights reserved.
              &nbsp;&nbsp;
              <Link href="/privacy-policy" className="hover:text-white/60 transition-colors underline underline-offset-2">
                Privacy Policy
              </Link>
            </p>
            <p className="font-mono tracking-wider">
              Co. No: 199901025995 (500895-V) &nbsp;|&nbsp; SST: S10-1808-31012358
            </p>
          </div>
        </Container>
      </div>

    </footer>
  );
}
