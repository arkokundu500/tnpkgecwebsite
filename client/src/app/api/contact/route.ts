import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { name, email, purpose, message } = body;

        // Validate required fields
        if (!name || !email || !purpose || !message) {
            return NextResponse.json(
                { error: "All fields are required." },
                { status: 400 }
            );
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return NextResponse.json(
                { error: "Please provide a valid email address." },
                { status: 400 }
            );
        }

        // Create transporter using Gmail SMTP
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.GMAIL_USER,
                pass: process.env.GMAIL_PASS,
            },
        });

        // Purpose label mapping
        const purposeLabels: Record<string, string> = {
            recruitment: "Recruitment Enquiry",
            placement: "Placement Enquiry",
            internship: "Internship Enquiry",
            collaboration: "Industry Collaboration",
            other: "Other",
        };

        const purposeLabel = purposeLabels[purpose] || purpose;

        // Email to T&P Cell
        const mailOptions = {
            from: process.env.GMAIL_USER,
            to: process.env.CONTACT_TO || process.env.GMAIL_USER,
            subject: `[KGEC T&P Website] ${purposeLabel} - ${name}`,
            html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #1e3a8a, #3b82f6); padding: 24px; border-radius: 12px 12px 0 0;">
            <h2 style="color: white; margin: 0; font-size: 20px;">New Contact Form Submission</h2>
            <p style="color: #93c5fd; margin: 8px 0 0;">KGEC Training & Placement Cell</p>
          </div>
          <div style="background: #f8fafc; padding: 24px; border: 1px solid #e2e8f0; border-top: none; border-radius: 0 0 12px 12px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #1e3a8a; width: 120px;">Name</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #334155;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #1e3a8a;">Email</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #334155;">
                  <a href="mailto:${email}" style="color: #2563eb;">${email}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #1e3a8a;">Purpose</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #334155;">${purposeLabel}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; font-weight: bold; color: #1e3a8a; vertical-align: top;">Message</td>
                <td style="padding: 12px 0; color: #334155; line-height: 1.6;">${message.replace(/\n/g, "<br>")}</td>
              </tr>
            </table>
          </div>
        </div>
      `,
        };

        // Confirmation email to the sender
        const confirmationMailOptions = {
            from: process.env.GMAIL_USER,
            to: email,
            subject: "Thank you for contacting KGEC T&P Cell",
            html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #1e3a8a, #3b82f6); padding: 24px; border-radius: 12px 12px 0 0;">
            <h2 style="color: white; margin: 0; font-size: 20px;">Thank You, ${name}!</h2>
          </div>
          <div style="background: #f8fafc; padding: 24px; border: 1px solid #e2e8f0; border-top: none; border-radius: 0 0 12px 12px;">
            <p style="color: #334155; line-height: 1.6;">
              We have received your message regarding <strong>${purposeLabel}</strong>.
              Our team will review your enquiry and get back to you within 2-3 business days.
            </p>
            <p style="color: #334155; line-height: 1.6;">
              Best regards,<br>
              <strong>Training & Placement Cell</strong><br>
              Kalyani Government Engineering College
            </p>
          </div>
        </div>
      `,
        };

        // Send both emails
        await transporter.sendMail(mailOptions);
        await transporter.sendMail(confirmationMailOptions);

        return NextResponse.json(
            { message: "Email sent successfully!" },
            { status: 200 }
        );
    } catch (error) {
        console.error("Email sending error:", error);
        return NextResponse.json(
            { error: "Failed to send email. Please try again later." },
            { status: 500 }
        );
    }
}
