"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { PageHero } from "@/components/inner/PageHero";
import { InnerLayout } from "@/components/inner/InnerLayout";
import { ContactForm } from "@/components/contact/ContactForm";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08 },
  }),
};

function InfoCard({
  icon: Icon,
  label,
  children,
  index,
}: {
  icon: React.ElementType;
  label: string;
  children: React.ReactNode;
  index: number;
}) {
  return (
    <motion.div
      custom={index}
      variants={fadeUp}
      initial="hidden"
      animate="visible"
      className="flex items-start gap-4 bg-white rounded-sm border border-slate/12 p-5 hover:border-primary/30 transition-colors"
    >
      <div className="w-10 h-10 rounded-sm bg-primary/10 flex items-center justify-center flex-shrink-0">
        <Icon size={18} className="text-primary" />
      </div>
      <div>
        <p className="font-body font-semibold text-carbon text-sm mb-0.5">{label}</p>
        {children}
      </div>
    </motion.div>
  );
}

export function ContactPageContent() {
  return (
    <InnerLayout>
      <PageHero
        label="Get In Touch"
        title="Contact"
        titleAccent="Our Team"
        subtitle="Reach our team directly — we respond to all enquiries within 1 business day."
        dark
      />

      {/* Main contact section */}
      <section className="bg-smoke py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-12">
            {/* Left: Form */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <ContactForm />
            </motion.div>

            {/* Right: Contact info */}
            <div className="flex flex-col gap-4">
              <InfoCard icon={Phone} label="Phone" index={0}>
                <a
                  href="tel:+60882596663"
                  className="text-primary font-body font-bold hover:underline block"
                >
                  088-259663 / 258662
                </a>
              </InfoCard>

              <InfoCard icon={Mail} label="Email" index={1}>
                <a
                  href="mailto:contact@ctforwarding.com.my"
                  className="text-primary font-body font-bold hover:underline break-all"
                >
                  contact@ctforwarding.com.my
                </a>
              </InfoCard>

              <InfoCard icon={MapPin} label="Headquarters" index={2}>
                <p className="text-slate font-body text-sm leading-relaxed">
                  Unit A905, 9th Floor, Wisma Merdeka Phase 1
                  <br />
                  Jalan Tun Razak, 88000 Kota Kinabalu
                  <br />
                  Sabah, Malaysia
                </p>
              </InfoCard>

              <InfoCard icon={Clock} label="Operating Hours" index={3}>
                <div className="text-slate font-body text-sm space-y-1">
                  <p>
                    <span className="font-semibold text-carbon">Mon – Fri:</span> 8:00am – 5:30pm
                  </p>
                  <p>
                    <span className="font-semibold text-carbon">Saturday:</span> 8:00am – 1:00pm
                  </p>
                  <p>
                    <span className="font-semibold text-carbon">Sun & Public Holidays:</span> On-call
                  </p>
                </div>
              </InfoCard>
            </div>
          </div>
        </div>
      </section>

      {/* Offices section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-display font-bold text-carbon uppercase tracking-wide text-2xl mb-8"
          >
            Our Locations
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              {
                title: "Headquarters",
                address: "Unit A905, 9th Floor, Wisma Merdeka Phase 1\nJalan Tun Razak, 88000 Kota Kinabalu, Sabah",
              },
              {
                title: "Warehouse",
                address: "KKIP (Kota Kinabalu Industrial Park)\nSabah, Malaysia",
              },
            ].map((office, i) => (
              <motion.div
                key={office.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="border border-slate/12 rounded-sm p-6 hover:border-primary/30 transition-colors"
              >
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-1.5 h-6 bg-primary rounded-full" />
                  <h3 className="font-display font-bold text-carbon uppercase tracking-wide text-lg">
                    {office.title}
                  </h3>
                </div>
                <p className="font-body text-slate text-sm leading-relaxed whitespace-pre-line">
                  {office.address}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA strip */}
      <section className="bg-carbon py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-display font-bold text-white uppercase tracking-wide text-xl">
              Prefer to call?
            </p>
            <p className="font-body text-white/50 text-sm mt-1">
              Our team is available Monday–Saturday during business hours.
            </p>
          </div>
          <a
            href="tel:+60882596663"
            className="flex items-center gap-2.5 bg-primary text-white font-body font-bold text-sm tracking-widest uppercase px-8 py-4 rounded-sm hover:bg-primary-dark transition-colors duration-200 flex-shrink-0"
          >
            <Phone size={15} />
            088-259663 / 258662
          </a>
        </div>
      </section>
    </InnerLayout>
  );
}
