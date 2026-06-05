"use client";

import Link from "next/link";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { X, Phone, Mail, MapPin } from "lucide-react";
import { CTLogo } from "@/components/logo/CTLogo";
import { Button } from "@/components/ui/Button";
import type { NavItem } from "@/types";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navItems: NavItem[];
  currentPath: string;
}

const overlayVariants = {
  closed: { opacity: 0 },
  open:   { opacity: 1 },
};

const menuVariants = {
  closed: { x: "100%" },
  open:   { x: 0 },
};

const itemVariants: Variants = {
  closed: { opacity: 0, x: 40 },
  open: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.1 + i * 0.06,
      duration: 0.4,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  }),
};

export function MobileMenu({ isOpen, onClose, navItems, currentPath }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            className="fixed inset-0 z-40 bg-carbon/80 backdrop-blur-sm"
            variants={overlayVariants}
            initial="closed"
            animate="open"
            exit="closed"
            transition={{ duration: 0.3 }}
            onClick={onClose}
          />

          {/* Side panel */}
          <motion.div
            key="panel"
            className="fixed top-0 right-0 z-50 h-full w-full max-w-sm bg-carbon flex flex-col"
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-white/10">
              <CTLogo variant="white" size={48} />
              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={onClose}
                className="text-white/70 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors"
                aria-label="Close menu"
              >
                <X size={22} />
              </motion.button>
            </div>

            {/* Nav links */}
            <nav className="flex-1 overflow-y-auto py-8 px-6">
              <ul className="space-y-1">
                {navItems.map((item, i) => (
                  <motion.li key={item.href} custom={i} variants={itemVariants} initial="closed" animate="open">
                    <Link
                      href={item.href}
                      onClick={onClose}
                      className={`
                        block py-4 text-2xl font-display font-bold tracking-wider uppercase
                        border-b border-white/10 transition-colors duration-200
                        ${currentPath === item.href
                          ? "text-primary-light"
                          : "text-white/80 hover:text-white hover:pl-2"}
                      `}
                    >
                      {item.label}
                    </Link>
                    {/* Sub-items if any */}
                    {item.children && (
                      <ul className="pl-4 mt-1 space-y-1">
                        {item.children.map((child) => (
                          <li key={child.href}>
                            <Link
                              href={child.href}
                              onClick={onClose}
                              className="block py-2.5 text-sm text-white/50 hover:text-primary-light transition-colors tracking-wide"
                            >
                              → {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </motion.li>
                ))}
              </ul>
            </nav>

            {/* CTA + Contact Footer */}
            <div className="p-6 border-t border-white/10 space-y-4">
              <Button variant="primary" size="lg" className="w-full" onClick={onClose} asChild>
                <Link href="/contact">Get a Quote</Link>
              </Button>

              <div className="space-y-2.5 pt-2">
                <a href="tel:+60882596663" className="flex items-center gap-3 text-white/50 hover:text-white text-sm transition-colors">
                  <Phone size={14} className="text-primary-light flex-shrink-0" />
                  088-259663
                </a>
                <a href="mailto:contact@ctforwarding.com.my" className="flex items-center gap-3 text-white/50 hover:text-white text-sm transition-colors">
                  <Mail size={14} className="text-primary-light flex-shrink-0" />
                  contact@ctforwarding.com.my
                </a>
                <p className="flex items-start gap-3 text-white/40 text-xs">
                  <MapPin size={14} className="text-primary-light flex-shrink-0 mt-0.5" />
                  Unit A905, 9th Floor, Wisma Merdeka, Kota Kinabalu, Sabah
                </p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
