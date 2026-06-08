"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, Phone } from "lucide-react";
import { CTLogo } from "@/components/logo/CTLogo";
import { Button } from "@/components/ui/Button";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { useSlideTheme } from "@/hooks/useSlideTheme";
import { cn } from "@/lib/utils";
import type { NavItem } from "@/types";

const NAV_ITEMS: NavItem[] = [
  { label: "Home",     href: "/" },
  { label: "About",    href: "/about" },
  {
    label: "Services", href: "/services",
    children: [
      { label: "Transportation",                    href: "/services/transportation" },
      { label: "Freight Forwarding & Customs",      href: "/services/freight-forwarding" },
      { label: "Warehousing & Distribution",        href: "/services/warehousing" },
      { label: "Container Depot & Open Yard",       href: "/services/container-depot" },
      { label: "Breakbulk & Project Cargo",         href: "/services/breakbulk" },
      { label: "Other Services",                    href: "/services/other" },
    ],
  },
  { label: "Projects", href: "/projects" },
  {
    label: "News", href: "/news",
    children: [
      { label: "Announcements", href: "/news#announcements" },
      { label: "Careers",       href: "/news#careers" },
      { label: "Resources",     href: "/news#resources" },
    ],
  },
  { label: "Contact",  href: "/contact" },
];

export function Navbar() {
  const pathname  = usePathname();
  const isLight   = useSlideTheme(); // true on white-bg slides (services, why-ct, clients)
  const [mobileOpen,     setMobileOpen]     = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  // On light slides: solid white navbar with dark text
  // On dark slides:  semi-transparent dark navbar with white text
  const bgColor   = isLight ? "rgba(255,255,255,0.97)" : "rgba(13,17,23,0.82)";
  const textColor = isLight ? "text-carbon"            : "text-white";
  const subColor  = isLight ? "text-carbon/60"         : "text-white/80";
  const logoVariant = isLight ? "default" : "white" as const;

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-30 border-b"
        style={{ borderColor: isLight ? "rgba(0,0,0,0.08)" : "rgba(255,255,255,0.08)" }}
        animate={{ backgroundColor: bgColor, backdropFilter: "blur(14px)" }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="flex items-center justify-between h-20">

            {/* ── Logo ── */}
            <Link href="/" className="flex items-center gap-3 group flex-shrink-0">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                <CTLogo variant={logoVariant} size={52} priority />
              </motion.div>
              <p className={`hidden sm:block text-sm tracking-wide whitespace-nowrap font-body ${textColor}`}>
                <span className="font-extrabold">CT</span>
                <span className={`font-light ${subColor}`}> Forwarding &amp; Transport Sdn Bhd</span>
              </p>
            </Link>

            {/* ── Desktop Nav ── */}
            <nav className="hidden lg:flex items-center gap-1">
              {NAV_ITEMS.map((item) => (
                <div
                  key={item.href}
                  className="relative"
                  onMouseEnter={() => item.children && setActiveDropdown(item.href)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className={cn(
                      "nav-link flex items-center gap-1 px-4 py-2 text-sm font-body font-medium tracking-wide",
                      "transition-colors duration-200 rounded-sm",
                      pathname === item.href || pathname.startsWith(item.href + "/")
                        ? "text-primary active"
                        : isLight
                          ? "text-carbon/70 hover:text-carbon"
                          : "text-white/80 hover:text-white"
                    )}
                  >
                    {item.label}
                    {item.children && (
                      <motion.span
                        animate={{ rotate: activeDropdown === item.href ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ChevronDown size={14} className="opacity-60" />
                      </motion.span>
                    )}
                  </Link>

                  {/* Dropdown */}
                  <AnimatePresence>
                    {item.children && activeDropdown === item.href && (
                      <motion.div
                        key="dropdown"
                        initial={{ opacity: 0, y: 8, scale: 0.97 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.97 }}
                        transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        className="absolute top-full left-0 mt-2 w-60 bg-carbon/95 backdrop-blur-lg border border-white/10 rounded-lg shadow-2xl shadow-black/50 overflow-hidden"
                      >
                        {item.children.map((child, i) => (
                          <motion.div
                            key={child.href}
                            initial={{ opacity: 0, x: -8 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.04 }}
                          >
                            <Link
                              href={child.href}
                              className={cn(
                                "block px-5 py-3 text-sm font-body transition-all duration-150",
                                "border-b border-white/5 last:border-0",
                                "hover:bg-primary/20 hover:text-primary-light hover:pl-6",
                                pathname === child.href
                                  ? "text-primary-light bg-primary/10"
                                  : "text-white/70"
                              )}
                            >
                              {child.label}
                            </Link>
                          </motion.div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </nav>

            {/* ── Right: Phone + CTA + Hamburger ── */}
            <div className="flex items-center gap-3">
              {/* Phone (desktop only) */}
              <a
                href="tel:+60882596663"
                className={`hidden xl:flex items-center gap-2 text-sm transition-colors ${isLight ? "text-carbon/50 hover:text-carbon" : "text-white/60 hover:text-white"}`}
              >
                <Phone size={14} className="text-primary-light" />
                <span className="tracking-wide">088-259663</span>
              </a>

              {/* CTA Button (desktop) */}
              <Link href="/contact" className="hidden lg:block">
                <Button variant="primary" size="sm">
                  Get a Quote
                </Button>
              </Link>

              {/* Hamburger (mobile) */}
              <motion.button
                className={`lg:hidden p-2 rounded-sm transition-colors ${isLight ? "text-carbon hover:bg-carbon/10" : "text-white hover:bg-white/10"}`}
                onClick={() => setMobileOpen(true)}
                whileTap={{ scale: 0.9 }}
                aria-label="Open navigation menu"
              >
                <Menu size={22} />
              </motion.button>
            </div>

          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={mobileOpen}
        onClose={() => setMobileOpen(false)}
        navItems={NAV_ITEMS}
        currentPath={pathname}
      />
    </>
  );
}
