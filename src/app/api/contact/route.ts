import { NextResponse } from "next/server";
import { Resend } from "resend";

const resendApiKey = process.env.RESEND_API_KEY;
const resend = resendApiKey ? new Resend(resendApiKey) : null;

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 },
      );
    }

    if (!resend) {
      return NextResponse.json(
        { error: "Email delivery is not configured yet. Add RESEND_API_KEY to enable sending." },
        { status: 503 },
      );
    }

    const result = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: [process.env.CONTACT_EMAIL || "hello@example.com"],
      replyTo: email,
      subject: `Portfolio enquiry from ${name}`,
      text: message,
      html: `<p><strong>From:</strong> ${name} (${email})</p><p>${message}</p>`,
    });

    return NextResponse.json({ success: true, id: result.data?.id || null });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again later." },
      { status: 500 },
    );
  }
}
