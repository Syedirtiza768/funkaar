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
        offering video production, photography, and marketing and strategy
        services. This policy explains what we collect when you visit{" "}
        <a href={company.website}>funkaar.co</a>, contact us, or work with us,
        and how we treat it.
      </p>

      <h2>1. Information we collect</h2>
      <p>We collect only what we need to respond to you and do the work.</p>
      <ul>
        <li>
          <strong>Details you give us:</strong> name, email address, phone
          number, organization, website, project details, and how you heard
          about us, when you fill in our contact form or write to us.
        </li>
        <li>
          <strong>Project materials:</strong> briefs, brand assets, footage,
          and files you share while we work together.
        </li>
        <li>
          <strong>Messages:</strong> the content of emails and text messages
          between you and us.
        </li>
        <li>
          <strong>Basic technical data:</strong> browser type, device, pages
          visited, and IP address, collected through standard server logs and
          cookies needed to run the site.
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
        If you give us your mobile number and agree to receive texts, we use it
        for appointment reminders, consultation bookings, and customer support
        conversations. Consent to receive text messages is optional and is not
        a condition of buying any service from us. You can opt out at any time
        by replying <strong>STOP</strong>. Reply <strong>HELP</strong> for
        help. Message frequency varies, and message and data rates may apply.
        See our <Link href="/terms-and-conditions">Terms &amp; Conditions</Link>{" "}
        for full messaging terms.
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

      <h2>4. Who can see your information</h2>
      <p>
        We do not sell your personal information. We use trusted service
        providers, such as our email, hosting, scheduling, and messaging
        platforms, only so they can help us run the business, and they may use
        your information only for that purpose. We may also disclose information
        if the law requires it or to protect our rights.
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
        We use reasonable technical and organizational safeguards. No method of
        transmission or storage is completely secure, so we cannot promise
        absolute security.
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
