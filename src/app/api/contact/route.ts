import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      name,
      email,
      phone,
      organization,
      website,
      message,
      projectType,
      referralSource,
      smsConsent,
      marketingConsent,
    } = body;

    const consentGiven = smsConsent === true;
    const marketingGiven = marketingConsent === true;

    // 1) Send the lead to GoHighLevel (Inbound Webhook), if configured.
    let sentToGhl = false;
    const { GHL_WEBHOOK_URL } = process.env;
    if (GHL_WEBHOOK_URL) {
      try {
        const [firstName, ...rest] = String(name || '').trim().split(' ');
        const ghlRes = await fetch(GHL_WEBHOOK_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            first_name: firstName,
            last_name: rest.join(' '),
            name,
            email,
            phone: phone || '',
            company_name: organization,
            website,
            message,
            project_type: projectType,
            referral_source: referralSource,
            non_marketing_sms_consent: consentGiven ? 'Yes' : 'No',
            marketing_sms_consent: marketingGiven ? 'Yes' : 'No',
            sms_consent_text: (consentGiven || marketingGiven) ? 'Opted in via funkaar.co contact form' : '',
            consent_timestamp: (consentGiven || marketingGiven) ? new Date().toISOString() : '',
            source: 'funkaar.co contact form',
          }),
        });
        sentToGhl = ghlRes.ok;
        if (!ghlRes.ok) console.error('GHL webhook failed:', ghlRes.status);
      } catch (e: any) {
        console.error('GHL webhook error:', e.message);
      }
    }

    const {
      EMAIL_HOST,
      EMAIL_PORT,
      EMAIL_USER,
      EMAIL_PASS,
      TO_EMAIL,
    } = process.env;

    if (!EMAIL_HOST || !EMAIL_PORT || !EMAIL_USER || !EMAIL_PASS || !TO_EMAIL) {
      console.error("❌ Missing ENV variables:", {
        EMAIL_HOST,
        EMAIL_PORT,
        EMAIL_USER,
        EMAIL_PASS,
        TO_EMAIL,
      });
      if (sentToGhl) {
        return NextResponse.json({ success: true, message: "Lead sent" });
      }
      throw new Error("Missing required environment variables");
    }

    const transporter = nodemailer.createTransport({
      host: EMAIL_HOST,
      port: Number(EMAIL_PORT),
      secure: false,
      auth: {
        user: EMAIL_USER,
        pass: EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: `"Funkaar" <${EMAIL_USER}>`,
      to: TO_EMAIL, // ✅ fixed this line
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
        <p><strong>Organization:</strong> ${organization}</p>
        <p><strong>Website:</strong> ${website}</p>
        <p><strong>Message:</strong> ${message}</p>
        <p><strong>Project Type:</strong> ${projectType}</p>
        <p><strong>Referral Source:</strong> ${referralSource}</p>
        <p><strong>Non-marketing text consent:</strong> ${consentGiven ? "Yes" : "No"}</p>
        <p><strong>Marketing text consent:</strong> ${marketingGiven ? "Yes" : "No"}</p>
      `,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("✅ Email sent:", info.messageId);

    return NextResponse.json({ success: true, message: "Email sent successfully" });
  } catch (error: any) {
    console.error("❌ Email sending failed:", error.message);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
