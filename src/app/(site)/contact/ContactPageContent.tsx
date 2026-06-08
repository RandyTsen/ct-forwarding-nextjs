"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Building2, MapPin, Phone, Mail, MessageCircle, Clock } from "lucide-react";
import { PageHero } from "@/components/inner/PageHero";
import { InnerLayout } from "@/components/inner/InnerLayout";
import { ContactForm } from "@/components/contact/ContactForm";

const EASE = [0.16, 1, 0.3, 1] as const;

const OFFICES = [
  {
    id: "kk",
    city: "Kota Kinabalu",
    badge: "Headquarters",
    address: "Unit A905, 9th Floor, Phase 1, Wisma Merdeka\nJalan Tun Razak, 88000 Kota Kinabalu, Sabah",
    phones: ["088-259663", "088-258662"],
    fax: "088-261662" as string | null,
    email: "contact@ctforwarding.com.my" as string | null,
    whatsapp: "https://wa.me/6088259663" as string | null,
    hours: "Mon–Fri: 8:00am–5:30pm · Sat: 8:00am–1:00pm",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15872.73!2d116.0753!3d5.9788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x323b675a3c10d219%3A0x100b1a62fb386e0!2sWisma%20Merdeka%2C%20Kota%20Kinabalu!5e0!3m2!1sen!2smy!4v1700000000000",
  },
  {
    id: "sandakan",
    city: "Sandakan",
    badge: "Branch Office",
    address: "KM 8, Jalan Batu Sapi\nKaramunting, 90000 Sandakan, Sabah",
    phones: ["089-613881"],
    fax: null as string | null,
    email: null as string | null,
    whatsapp: null as string | null,
    hours: "Mon–Fri: 8:00am–5:30pm",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63745.0!2d118.118!3d5.840!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x323dfcd15cfbba5d%3A0x5acf4a847e67e3e5!2sSandakan%2C%20Sabah!5e0!3m2!1sen!2smy!4v1700000000001",
  },
  {
    id: "tawau",
    city: "Tawau",
    badge: "Branch Office",
    address: "Mile 3½, Jalan Apas\nP.O. Box 61377, 91023 Tawau, Sabah",
    phones: ["012-8021662"],
    fax: null as string | null,
    email: null as string | null,
    whatsapp: null as string | null,
    hours: "Mon–Fri: 8:00am–5:30pm",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63871.0!2d117.8938!3d4.2448!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3222e47f9eed5d17%3A0x5ac5a8c1dcde0dee!2sTawau%2C%20Sabah!5e0!3m2!1sen!2smy!4v1700000000002",
  },
];

type OfficeId = "kk" | "sandakan" | "tawau";

export function ContactPageContent() {
  const [activeId, setActiveId] = useState<OfficeId>("kk");
  const active = OFFICES.find((o) => o.id === activeId)!;

  return (
    <InnerLayout>
      <PageHero
        label="Get In Touch"
        title="Find Us"
        titleAccent="Across Sabah"
        subtitle="Three offices, one team. Reach your nearest CT Forwarding location."
        dark
      />

      {/* LOCATIONS + MAP */}
      <section className="bg-smoke py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: EASE }}
            className="mb-10"
          >
            <p className="text-primary text-[11px] tracking-[0.4em] uppercase font-body font-semibold mb-2">Our Offices</p>
            <h2 className="font-display font-bold text-slate uppercase tracking-wide text-3xl lg:text-4xl">
              Three Locations. <span className="text-primary">One Network.</span>
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-5 gap-6 lg:gap-10 mb-16">

            {/* Location selector — 2 cols */}
            <div className="lg:col-span-2 flex flex-col gap-3">
              {OFFICES.map((office, i) => {
                const isActive = office.id === activeId;
                const isHQ = office.id === "kk";
                return (
                  <motion.button
                    key={office.id}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.5, ease: EASE }}
                    onClick={() => setActiveId(office.id as OfficeId)}
                    className={`relative w-full overflow-hidden rounded-2xl border p-5 text-left transition-all duration-300 cursor-pointer ${
                      isActive
                        ? "border-primary/30 bg-primary/5 shadow-lg shadow-primary/8"
                        : "border-slate/12 bg-white hover:border-primary/20 hover:bg-primary/3"
                    }`}
                  >
                    {isActive && (
                      <div className="absolute left-0 top-0 bottom-0 w-1 rounded-r-full bg-primary" />
                    )}
                    <div className="flex items-start gap-4 pl-2">
                      <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition-colors duration-300 ${isActive ? "bg-primary text-white" : "bg-slate/8 text-slate/50"}`}>
                        {isHQ ? <Building2 size={18} /> : <MapPin size={18} />}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className={`font-display font-bold text-lg tracking-wide ${isActive ? "text-slate" : "text-slate/70"}`}>{office.city}</h3>
                          <span className={`rounded-md px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider ${isActive ? "bg-primary/10 text-primary" : "bg-slate/8 text-slate/50"}`}>
                            {office.badge}
                          </span>
                        </div>
                        <p className="text-sm text-slate/50 leading-snug line-clamp-2 font-body">{office.address.replace("\n", ", ")}</p>
                        <div className="mt-2 flex flex-wrap gap-3">
                          {office.phones.map((p) => (
                            <a
                              key={p}
                              href={`tel:${p.replace(/-/g, "")}`}
                              onClick={(e) => e.stopPropagation()}
                              className="inline-flex items-center gap-1 text-xs font-medium text-primary hover:text-primary-dark transition-colors"
                            >
                              <Phone size={10} />{p}
                            </a>
                          ))}
                          {office.email && (
                            <a
                              href={`mailto:${office.email}`}
                              onClick={(e) => e.stopPropagation()}
                              className="inline-flex items-center gap-1 text-xs font-medium text-primary hover:text-primary-dark transition-colors"
                            >
                              <Mail size={10} />Email
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.button>
                );
              })}
            </div>

            {/* Map — 3 cols */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease: EASE }}
              className="lg:col-span-3 overflow-hidden rounded-3xl border border-slate/12 bg-white shadow-xl shadow-black/5"
            >
              <div className="relative aspect-video w-full bg-smoke">
                <iframe
                  key={active.id}
                  src={active.mapEmbed}
                  className="absolute inset-0 h-full w-full"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`Map of CT Forwarding ${active.city}`}
                />
              </div>
              <div className="p-6 lg:p-8">
                <div className="flex items-center gap-3 mb-3">
                  <h3 className="font-display font-bold text-slate text-xl tracking-wide">{active.city}</h3>
                  <span className="rounded-md bg-primary/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-primary">{active.badge}</span>
                </div>
                <p className="text-sm text-slate/60 leading-relaxed font-body whitespace-pre-line mb-4">{active.address}</p>
                <div className="flex flex-col gap-2">
                  {active.phones.map((p) => (
                    <a
                      key={p}
                      href={`tel:${p.replace(/-/g, "")}`}
                      className="inline-flex items-center gap-2 text-sm text-slate hover:text-primary transition-colors"
                    >
                      <Phone size={14} className="text-primary" />{p}
                    </a>
                  ))}
                  {active.email && (
                    <a
                      href={`mailto:${active.email}`}
                      className="inline-flex items-center gap-2 text-sm text-slate hover:text-primary transition-colors"
                    >
                      <Mail size={14} className="text-primary" />{active.email}
                    </a>
                  )}
                  {active.fax && (
                    <p className="inline-flex items-center gap-2 text-sm text-slate/50">
                      <Phone size={14} className="text-slate/30" />Fax: {active.fax}
                    </p>
                  )}
                  <p className="inline-flex items-center gap-2 text-sm text-slate/50">
                    <Clock size={14} className="text-slate/30" />{active.hours}
                  </p>
                </div>
                {active.whatsapp && (
                  <div className="mt-5 flex gap-3">
                    <a
                      href={active.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-10 items-center gap-2 rounded-xl bg-[#25D366] px-5 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#22c55e] hover:shadow-lg cursor-pointer"
                    >
                      <MessageCircle size={15} />WhatsApp
                    </a>
                  </div>
                )}
              </div>
            </motion.div>
          </div>

          {/* CONTACT FORM */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: EASE }}
            className="bg-white rounded-3xl shadow-xl shadow-black/5 p-8 lg:p-12"
          >
            <h2 className="font-display font-bold text-slate uppercase tracking-wide text-2xl lg:text-3xl mb-2">
              Send Us a Message
            </h2>
            <p className="text-slate/50 font-body text-sm mb-8">We respond to all enquiries within 1 business day.</p>
            <ContactForm />
          </motion.div>
        </div>
      </section>

      {/* CTA STRIP */}
      <section className="bg-carbon py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-display font-bold text-white uppercase tracking-wide text-2xl">Prefer to reach us directly?</p>
            <p className="font-body text-white/40 text-sm mt-1">Mon–Sat during business hours. On-call for urgent cargo.</p>
          </div>
          <div className="flex items-center gap-3 flex-shrink-0">
            <a
              href="tel:+60882596663"
              className="inline-flex h-12 items-center gap-2 rounded-xl bg-primary px-6 text-sm font-semibold text-white hover:bg-primary-dark transition-all duration-300 cursor-pointer"
            >
              <Phone size={15} />088-259663
            </a>
            <a
              href="https://wa.me/6088259663"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center gap-2 rounded-xl bg-[#25D366] px-6 text-sm font-semibold text-white hover:bg-[#22c55e] transition-all duration-300 cursor-pointer"
            >
              <MessageCircle size={15} />WhatsApp
            </a>
          </div>
        </div>
      </section>
    </InnerLayout>
  );
}
