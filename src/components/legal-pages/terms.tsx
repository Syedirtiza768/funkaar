"use client";
import React from "react";
import Link from "next/link";
import LegalLayout from "@/components/legal/legal-layout";
import { company, shown } from "@/data/company-info";

const Terms = () => {
  const address = shown(company.address, "Business mailing address");
  const sms = shown(company.smsNumber, "Texting number");

  return (
    <LegalLayout title="Terms & Conditions" updated={`Last updated: ${company.effectiveDate}`}>
      <p>
        These terms apply to your use of <a href={company.website}>funkaar.co</a>{" "}
        and to our text messaging program. {company.brandName} is a trade name
        of <strong>{company.legalName}</strong>. By using the site or opting in
        to texts, you agree to them.
      </p>

      <h2>1. Our services</h2>
      <p>
        {company.brandName} is a creative content and marketing agency: video
        production, photography, and marketing and strategy. Scope, pricing, and
        timelines for each project are set out in a separate proposal or
        agreement, which controls if it conflicts with these terms.
      </p>

      <h2>2. Using the website</h2>
      <ul>
        <li>Use the site lawfully and give accurate details in our forms.</li>
        <li>
          Do not interfere with the site, attempt unauthorized access, or copy
          its content without permission.
        </li>
        <li>
          Everything on the site, including our work, text, and design, belongs
          to {company.legalName} or its clients and is protected by copyright.
        </li>
      </ul>

      <h2>3. SMS terms</h2>
      <p>
        <strong>Program:</strong> {company.legalName}, doing business as{" "}
        {company.brandName}, sends text messages about appointment reminders,
        consultation bookings, and customer support inquiries.
      </p>
      <ul>
        <li>
          <strong>Consent:</strong> You opt in by ticking the consent box on our
          forms or by otherwise agreeing to receive texts from us. Consent is
          optional and is not a condition of purchase.
        </li>
        <li>
          <strong>Opt out:</strong> Reply <strong>STOP</strong> to {sms} at any
          time. We will confirm, and you will receive no further texts.
        </li>
        <li>
          <strong>Help:</strong> Reply <strong>HELP</strong> to {sms}, or email{" "}
          <a href={`mailto:${company.email}`}>{company.email}</a>.
        </li>
        <li>
          <strong>Frequency:</strong> Message frequency may vary.
        </li>
        <li>
          <strong>Cost:</strong> Message and data rates may apply.
        </li>
        <li>
          <strong>Carriers:</strong> Carriers and wireless providers are not
          liable for delayed or undelivered messages.
        </li>
        <li>
          <strong>Privacy:</strong> How we handle your information is described
          in our <Link href="/privacy-policy">Privacy Policy</Link>.
        </li>
      </ul>

      <h2>4. Payments and project terms</h2>
      <p>
        Fees, deposits, revisions, and ownership of deliverables are agreed in
        writing for each project. Unless that agreement says otherwise,
        deliverables transfer to the client on full payment.
      </p>

      <h2>5. Disclaimer</h2>
      <p>
        The site is provided &ldquo;as is.&rdquo; We aim for accuracy but do not
        guarantee that it is error-free or always available. Marketing results
        depend on many factors, so we cannot guarantee specific outcomes.
      </p>

      <h2>6. Limitation of liability</h2>
      <p>
        To the extent the law allows, {company.legalName} is not liable for
        indirect, incidental, or consequential damages arising from use of the
        site. Our total liability for any claim is limited to the amount you
        paid us for the services at issue.
      </p>

      <h2>7. Governing law</h2>
      <p>
        These terms are governed by the laws of {company.governingLaw}, without
        regard to conflict-of-law rules.
      </p>

      <h2>8. Changes</h2>
      <p>
        We may update these terms. The date above shows the latest revision.
      </p>

      <h2>9. Contact</h2>
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

export default Terms;
