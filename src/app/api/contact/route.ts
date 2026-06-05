import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

const contactSchema = z.object({
  name: z.string().min(2).max(100),
  company: z.string().max(100).optional(),
  email: z.string().email(),
  phone: z.string().max(20).optional(),
  service: z.string().min(1),
  message: z.string().min(10).max(1000),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid input", details: parsed.error.flatten() },
        { status: 400 }
      );
    }

    const { name, company, email, phone, service, message } = parsed.data;
    const safeName = escapeHtml(name);
    const safeCompany = company ? escapeHtml(company) : undefined;
    const safeEmail = escapeHtml(email);
    const safePhone = phone ? escapeHtml(phone) : undefined;
    const safeService = escapeHtml(service);
    const safeMessage = escapeHtml(message);

    if (!process.env.RESEND_API_KEY) {
      // Dev mode: log and return success
      console.log("[Contact Form]", { name, email, service, message: message.slice(0, 50) });
      return NextResponse.json({ success: true });
    }

    const { Resend } = await import("resend");
    const resend = new Resend(process.env.RESEND_API_KEY);

    const { error } = await resend.emails.send({
      from: "CT Website <noreply@ctforwarding.com.my>",
      to: ["contact@ctforwarding.com.my"],
      replyTo: email,
      subject: `[CT Website] Enquiry from ${safeName}${safeCompany ? ` — ${safeCompany}` : ""}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px;">
          <h2 style="color: #0B7A3A;">New Enquiry — CT Forwarding Website</h2>
          <table style="border-collapse: collapse; width: 100%;">
            <tr><td style="padding: 8px; font-weight: bold;">Name</td><td style="padding: 8px;">${safeName}</td></tr>
            ${safeCompany ? `<tr><td style="padding: 8px; font-weight: bold;">Company</td><td style="padding: 8px;">${safeCompany}</td></tr>` : ""}
            <tr><td style="padding: 8px; font-weight: bold;">Email</td><td style="padding: 8px;"><a href="mailto:${safeEmail}">${safeEmail}</a></td></tr>
            ${safePhone ? `<tr><td style="padding: 8px; font-weight: bold;">Phone</td><td style="padding: 8px;">${safePhone}</td></tr>` : ""}
            <tr><td style="padding: 8px; font-weight: bold;">Service</td><td style="padding: 8px;">${safeService}</td></tr>
          </table>
          <h3 style="color: #1A2332;">Message</h3>
          <p style="background: #F4F6F3; padding: 16px; border-left: 4px solid #0B7A3A;">${safeMessage.replace(/\n/g, "<br>")}</p>
        </div>
      `,
    });

    if (error) {
      console.error("[Contact Form] Resend error:", error);
      return NextResponse.json({ error: "Failed to send message" }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[Contact Form] Unexpected error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
