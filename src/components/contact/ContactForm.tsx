"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";

const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  company: z.string().optional(),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  service: z.enum(
    ["transportation", "freight-forwarding", "warehousing", "container-depot", "breakbulk", "other", "general"],
    { error: "Please select a service" }
  ),
  message: z
    .string()
    .min(10, "Please provide more detail (minimum 10 characters)")
    .max(1000, "Message is too long (max 1000 characters)"),
});

type FormData = z.infer<typeof schema>;

type Status = "idle" | "submitting" | "success" | "error";

const SERVICE_OPTIONS = [
  { value: "general", label: "General Enquiry" },
  { value: "transportation", label: "Transportation & Fleet" },
  { value: "freight-forwarding", label: "Freight Forwarding & Customs" },
  { value: "warehousing", label: "Warehousing & Distribution" },
  { value: "container-depot", label: "Container Depot & Open Yard" },
  { value: "breakbulk", label: "Breakbulk & Project Cargo" },
  { value: "other", label: "Specialised & Advisory Services" },
];

function Field({
  label,
  error,
  required,
  children,
}: {
  label: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="block text-sm font-body font-semibold text-carbon/70 mb-1.5 tracking-wide">
        {label} {required && <span className="text-primary">*</span>}
      </label>
      {children}
      {error && (
        <p className="mt-1 text-red-500 text-xs font-body flex items-center gap-1">
          <AlertCircle size={11} /> {error}
        </p>
      )}
    </div>
  );
}

const inputClass =
  "w-full px-4 py-3 rounded-sm border border-slate/20 bg-white font-body text-carbon text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all duration-200 placeholder:text-slate/30";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setStatus("success");
        reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="bg-white rounded-sm border border-slate/12 shadow-lg shadow-slate/5 p-8">
      <h2 className="font-display font-bold text-carbon uppercase tracking-wide text-2xl mb-2">
        Send Us a Message
      </h2>
      <p className="text-slate/50 font-body text-sm mb-8">
        Fill in the form and our team will respond within 1 business day.
      </p>

      <AnimatePresence mode="wait">
        {status === "success" ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center justify-center py-12 text-center"
          >
            <CheckCircle size={48} className="text-primary mb-4" />
            <h3 className="font-display font-bold text-carbon uppercase text-xl mb-2">
              Message Received
            </h3>
            <p className="text-slate/55 font-body text-sm max-w-sm">
              Thank you for reaching out. Our team will be in touch within 1 business day.
            </p>
            <button
              onClick={() => setStatus("idle")}
              className="mt-6 text-primary font-body font-semibold text-sm underline underline-offset-4"
            >
              Send another message
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-5"
            noValidate
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <Field label="Full Name" required error={errors.name?.message}>
                <input
                  {...register("name")}
                  type="text"
                  placeholder="Your name"
                  className={inputClass}
                  autoComplete="name"
                />
              </Field>
              <Field label="Company" error={errors.company?.message}>
                <input
                  {...register("company")}
                  type="text"
                  placeholder="Your company (optional)"
                  className={inputClass}
                  autoComplete="organization"
                />
              </Field>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <Field label="Email Address" required error={errors.email?.message}>
                <input
                  {...register("email")}
                  type="email"
                  placeholder="you@company.com"
                  className={inputClass}
                  autoComplete="email"
                />
              </Field>
              <Field label="Phone Number" error={errors.phone?.message}>
                <input
                  {...register("phone")}
                  type="tel"
                  placeholder="+60 88 xxx xxx (optional)"
                  className={inputClass}
                  autoComplete="tel"
                />
              </Field>
            </div>

            <Field label="Service Required" required error={errors.service?.message}>
              <select {...register("service")} className={inputClass} defaultValue="">
                <option value="" disabled>Select a service...</option>
                {SERVICE_OPTIONS.map((o) => (
                  <option key={o.value} value={o.value}>{o.label}</option>
                ))}
              </select>
            </Field>

            <Field label="Message" required error={errors.message?.message}>
              <textarea
                {...register("message")}
                rows={5}
                placeholder="Tell us about your cargo requirements, timeline, and any specific needs..."
                className={`${inputClass} resize-none`}
              />
            </Field>

            {status === "error" && (
              <div className="flex items-center gap-2 text-red-500 text-sm font-body bg-red-50 px-4 py-3 rounded-sm border border-red-200">
                <AlertCircle size={15} />
                Something went wrong. Please try again or email us directly at contact@ctforwarding.com.my
              </div>
            )}

            <button
              type="submit"
              disabled={status === "submitting"}
              className="w-full flex items-center justify-center gap-2.5 bg-primary text-white font-body font-bold text-sm tracking-widest uppercase px-8 py-4 rounded-sm hover:bg-primary-dark transition-colors duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === "submitting" ? (
                <><Loader2 size={16} className="animate-spin" /> Sending...</>
              ) : (
                <><Send size={15} /> Send Message</>
              )}
            </button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
