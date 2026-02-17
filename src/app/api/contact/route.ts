import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
    try {
        const { name, email, message } = await req.json();

        if (!name || !email || !message) {
            return NextResponse.json(
                { error: "Name, email, and message are required." },
                { status: 400 }
            );
        }

        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: Number(process.env.SMTP_PORT),
            secure: true, // port 465
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        await transporter.sendMail({
            from: `"${name}" <${process.env.MAIL_FROM}>`,
            replyTo: email,
            to: "mosesrodrigues10@gmail.com",
            subject: `Portfolio Contact — ${name}`,
            text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
            html: `
        <div style="font-family:sans-serif;max-width:560px;margin:0 auto;padding:24px;background:#0a0a0a;color:#e4e4e7;border-radius:16px;border:1px solid rgba(255,255,255,0.08)">
          <h2 style="margin:0 0 16px;font-size:20px;color:#67e8f9">New Portfolio Message</h2>
          <p style="margin:4px 0;font-size:14px"><strong style="color:#a5b4fc">Name:</strong> ${name}</p>
          <p style="margin:4px 0;font-size:14px"><strong style="color:#a5b4fc">Email:</strong> <a href="mailto:${email}" style="color:#67e8f9">${email}</a></p>
          <hr style="border:none;border-top:1px solid rgba(255,255,255,0.1);margin:16px 0"/>
          <p style="font-size:14px;line-height:1.6;white-space:pre-wrap">${message}</p>
        </div>
      `,
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("Contact form error:", error);
        return NextResponse.json(
            { error: "Failed to send message. Please try again." },
            { status: 500 }
        );
    }
}
