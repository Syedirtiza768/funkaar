"use client";
import React from "react";
import Link from "next/link";
import LegalLayout from "@/components/legal/legal-layout";
import { company, shown } from "@/data/company-info";

const PrivacyPolicy = () => {
  const address = shown(company.address, "Business mailing address");

  return (
    <LegalLayout title="Privacy Policy" updated={`Last updated: ${company.effectiveDate}`}>
      <p>
        {company.brandName} is operated by <strong>{company.legalName}</strong>{" "}
        (&ldquo;{company.brandName},&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo;
        &ldquo;our&rdquo;). We are a creative content and marketing agency
        offering video production, photography, marketing and strategy, and
        AI automation services. This policy explains what we collect when you visit{" "}
        <a href={company.website}>funkaar.co</a>, contact us, or work with us,
        and how we treat it.
      </p>

      <h2>1. Information we collect</h2>
      <p>
        We collect only what we need to respond to you and do the work. The
        information we collect, and how we collect it, falls into these
        groups:
      </p>
      <ul>
        <li>
          <strong>Contact details you give us:</strong> your name, email
          address, mobile or other phone number, organization, and website,
          when you fill in our contact form, book a consultation, call or text
          us, or write to us.
        </li>
        <li>
          <strong>Project and enquiry details:</strong> what you tell us about
          your project, your goals, and how you heard about us.
        </li>
        <li>
          <strong>Project materials:</strong> briefs, brand assets, footage,
          and files you send us while we work together.
        </li>
        <li>
          <strong>Messages:</strong> the content of emails and text messages
          between you and us, and your text message consent choices (what you
          agreed to, and when).
        </li>
        <li>
          <strong>Basic technical data:</strong> browser type, device, pages
          visited, and IP address, collected automatically through standard
          server logs and cookies needed to run the site.
        </li>
      </ul>

      <h2>2. How we use it</h2>
      <ul>
        <li>To reply to your enquiries and prepare proposals.</li>
        <li>
          To schedule consultations and send appointment reminders and
          booking confirmations.
        </li>
        <li>To provide customer support and deliver our services.</li>
        <li>To send invoices and manage our client relationships.</li>
        <li>To keep the website secure and working well.</li>
        <li>To meet legal and accounting obligations.</li>
      </ul>

      <h2>3. Text messaging (SMS)</h2>
      <p>
        <strong>How you opt in.</strong> You opt in to text messages only by
        ticking an unchecked consent box next to the phone number field on our
        contact form, or by otherwise agreeing to receive texts from us. There
        are two separate, optional boxes: one for non-marketing messages and
        one for marketing and promotional messages. Neither box is required to
        submit the form or to buy any service from us.
      </p>
      <p>
        <strong>What we send.</strong> If you opt in to non-marketing texts, we
        use your mobile number for appointment reminders, consultation
        bookings, scheduling reminders, and customer support conversations,
        including related to our AI automation services. Only if you separately
        opt in to the marketing box do we also send marketing and promotional
        messages.
      </p>
      <p>
        <strong>How often.</strong> Message frequency varies depending on your
        activity with us (for example, the appointments you book and the
        questions you ask). Message and data rates may apply.
      </p>
      <p>
        <strong>How to opt out or get help.</strong> You can opt out at any time
        by replying <strong>STOP</strong>. Reply <strong>HELP</strong> for help,
        or contact us at <a href={`mailto:${company.email}`}>{company.email}</a>.
        Consent to receive text messages is optional and is not a condition of
        buying any service from us. See our{" "}
        <Link href="/terms-and-conditions">Terms &amp; Conditions</Link> for
        full messaging terms.
      </p>
      <div className={"callout"} style={{ borderLeft: "3px solid rgba(255,255,255,.5)", paddingLeft: 20 }}>
        <p>
          No mobile information will be shared with third parties/affiliates
          for marketing/promotional purposes. Information sharing to
          subcontractors in support services, such as customer service, is
          permitted. All other use case categories exclude text messaging
          originator opt-in data and consent; this information will not be
          shared with any third parties.
        </p>
        <p>
          Text messaging originator opt-in data and consent will not be shared
          with any third parties, except for aggregators and providers of the
          Text Message services.
        </p>
      </div>

      <h2>4. How we handle your information</h2>
      <p>
        We do not sell, rent, or trade your personal information, and we do not
        share it with affiliates or third parties for marketing or promotional
        purposes. The tools we use to run the business, such as our email,
        hosting, scheduling, and messaging platforms, process information only
        on our behalf and only to support our work with you. We release
        information only when the law requires it.
      </p>

      <h2>5. Cookies</h2>
      <p>
        The site uses cookies and similar technology that keep pages working and
        help us understand general use. You can block or delete cookies in your
        browser settings; some parts of the site may then work less smoothly.
      </p>

      <h2>6. How long we keep it</h2>
      <p>
        We keep information for as long as needed to serve you and meet our
        legal, tax, and record-keeping duties, then delete or anonymize it.
      </p>

      <h2>7. Security</h2>
      <p>
        We take reasonable steps to protect your information, including:
      </p>
      <ul>
        <li>This website is served over an encrypted (HTTPS) connection.</li>
        <li>
          Information is stored in business platforms (email, hosting,
          scheduling, and messaging tools) that require a login, and access is
          limited to people who need it to serve you.
        </li>
        <li>
          We collect only the information we need and delete or anonymize it
          when we no longer need it (see section 6).
        </li>
        <li>
          Text message opt-in data and consent are kept as described in
          section 3 and are not shared with third parties.
        </li>
      </ul>
      <p>
        No method of transmission or storage is completely secure, so we cannot
        promise absolute security. If you believe your information has been
        compromised, please contact us right away.
      </p>

      <h2>8. Your choices</h2>
      <p>
        You may ask to see, correct, or delete the personal information we hold
        about you, or opt out of emails or texts, by writing to{" "}
        <a href={`mailto:${company.email}`}>{company.email}</a>. Depending on
        where you live, you may have additional rights under local law, and we
        will honor valid requests.
      </p>

      <h2>9. Children</h2>
      <p>
        Our services are for businesses and adults. We do not knowingly collect
        information from children under 13.
      </p>

      <h2>10. Changes</h2>
      <p>
        We may update this policy. The date at the top shows the latest
        revision. Continued use of the site means you accept the update.
      </p>

      <h2>11. Contact us</h2>
      <p>
        {company.legalName}
        <br />
        {address}
        <br />
        Email: <a href={`mailto:${company.email}`}>{company.email}</a>
        <br />
        Phone: <a href={`tel:${company.phoneHref}`}>{company.phone}</a>
      </p>
    </LegalLayout>
  );
};

export default PrivacyPolicy;
