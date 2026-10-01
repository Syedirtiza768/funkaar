// app/components/forms/contact-form.tsx
'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Link from 'next/link';
import ErrorMsg from '../error-msg';

// Define FormData type
type FormData = {
  name: string;
  email: string;
  phone?: string;
  organization?: string;
  website?: string;
  message?: string;
  projectType?: string;
  referralSource: string;
  smsConsent?: boolean;
  marketingConsent?: boolean;
};

// Validation schema using Yup
const schema = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  phone: yup.string().optional(),
  organization: yup.string().optional(),
  website: yup.string().optional(),
  message: yup.string().optional(),
  projectType: yup.string().optional(),
  referralSource: yup.string().required('This field is required'),
  smsConsent: yup.boolean().optional(),
  marketingConsent: yup.boolean().optional(),
});

// prop type
type IProps = {
  btnCls?: string;
};

export default function ContactForm({ btnCls = '' }: IProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: yupResolver(schema) as any,
  });

  const onSubmit = async (data: FormData) => {
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error('Failed to send message');

      alert('Message sent successfully!');
      reset();
    } catch (error) {
      alert('Something went wrong. Please try again later.');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* Full Name */}
      <div className="cn-contactform-input mb-25">
        <label className='text-white mb-2'>Full Name*</label>
        <input
          {...register('name')}
          type="text"
          placeholder="John Doe"
          className="w-full px-4 py-3 text-white border border-white rounded-md bg-[#121212]"
        />
        <ErrorMsg msg={errors.name?.message!} />
      </div>

      {/* Email */}
      <div className="cn-contactform-input mb-25">
        <label className='text-white mb-2'>Email*</label>
        <input
          {...register('email')}
          type="email"
          placeholder="your@email.com"
          className="w-full px-4 py-3 text-white border border-white rounded-md bg-[#121212]"
        />
        <ErrorMsg msg={errors.email?.message!} />
      </div>

      {/* Phone */}
      <div className="cn-contactform-input mb-25">
        <label className='text-white mb-2'>Phone Number</label>
        <input
          {...register('phone')}
          type="tel"
          placeholder="+1234567890"
          className="w-full px-4 py-3 text-white border border-white rounded-md bg-[#121212]"
        />
        <ErrorMsg msg={errors.phone?.message!} />
      </div>

      {/* Organization */}
      <div className="cn-contactform-input mb-25">
        <label className='text-white mb-2'>Organization</label>
        <input
          {...register('organization')}
          type="text"
          placeholder="Your Company Name"
          className="w-full px-4 py-3 text-white border border-white rounded-md bg-[#121212]"
        />
        <ErrorMsg msg={errors.organization?.message!} />
      </div>

      {/* Website */}
      <div className="cn-contactform-input mb-25" >
        <label className='text-white mb-2'>Website</label>
        <input
          {...register('website')}
          type="text"
          placeholder="https://yourwebsite.com"
          className="w-full px-4 py-3 text-white border border-white rounded-md bg-[#121212]"
        />
        <ErrorMsg msg={errors.website?.message!} />
      </div>

      {/* Message */}
      <div className="cn-contactform-input mb-25">
        <label className='text-white mb-2'>Tell Us About Your Project</label>
        <textarea
          {...register('message')}
          placeholder="Give us the big picture."
          className="w-full px-4 py-3 text-white border border-white rounded-md bg-[#121212]"
        />
        <ErrorMsg msg={errors.message?.message!} />
      </div>


      {/* Project Type */}
      <div className="cn-contactform-input mb-25">
        <label className='text-white mb-2'>Select a Project Type</label>
        <div className="relative w-full">
          <select
            {...register('projectType')}
            className="w-full px-4 py-3 text-white border border-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-white focus:border-white bg-[#121212] appearance-none"
            style={{ width: '100%' }}
          >
            <option value="">Select a Project Type</option>
            <option value="Marketing">Marketing</option>
            <option value="Video">Video</option>
            <option value="Photography">Photography</option>
          </select>
        </div>
        <ErrorMsg msg={errors.projectType?.message!} />
      </div>

      {/* Referral Source */}
      <div className="cn-contactform-input mb-25">
        <label className='text-white mb-2'>How did you hear about us?*</label>
        <div className="relative w-full">
          <select
            {...register('referralSource')}
            className="w-full px-4 py-3 mb-4 text-white border border-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-white focus:border-white bg-[#121212] appearance-none"
            style={{ width: '100%' }}
          >
            <option value="">Select an Option</option>
            <option value="Google">Google</option>
            <option value="Instagram">Instagram</option>
            <option value="Facebook">Facebook</option>
            <option value="LinkedIn">LinkedIn</option>
            <option value="YouTube">YouTube</option>
            <option value="Referral">Referral</option>
          </select>
        </div>
        <ErrorMsg msg={errors.referralSource?.message!} />
      </div>


      {/* SMS consent (optional, unchecked by default) */}
      <div className="cn-contactform-input mb-25">
        <label className="text-white" style={{ display: 'flex', gap: 12, alignItems: 'flex-start', fontSize: 14, lineHeight: 1.6, cursor: 'pointer' }}>
          <input
            {...register('smsConsent')}
            type="checkbox"
            style={{ marginTop: 5, width: 18, height: 18, flexShrink: 0 }}
          />
          <span>
            By checking this box, I consent to receive non-marketing text messages from{' '}
            <strong>FUNKAAR LLC</strong> about{' '}
            <strong>
              appointment reminders, consultation bookings, scheduling reminders and customer
              support inquiries
            </strong>
            . Message frequency varies, message &amp; data rates may apply. Text HELP for
            assistance, reply STOP to opt out. See our{' '}
            <Link href="/privacy-policy" style={{ textDecoration: 'underline' }}>Privacy Policy</Link>{' '}
            and{' '}
            <Link href="/terms-and-conditions" style={{ textDecoration: 'underline' }}>Terms &amp; Conditions</Link>.
          </span>
        </label>
      </div>

      <div className="cn-contactform-input mb-25">
        <label className="text-white" style={{ display: 'flex', gap: 12, alignItems: 'flex-start', fontSize: 14, lineHeight: 1.6, cursor: 'pointer' }}>
          <input
            {...register('marketingConsent')}
            type="checkbox"
            style={{ marginTop: 5, width: 18, height: 18, flexShrink: 0 }}
          />
          <span>
            By checking this box, I consent to receive marketing and promotional messages
            including special offers, discounts, new product updates among others, from{' '}
            <strong>FUNKAAR LLC</strong> at the phone number provided. Frequency may vary.
            Message &amp; data rates may apply. Text HELP for assistance, reply STOP to opt out.
          </span>
        </label>
      </div>

      <div className="cn-contactform-btn">
        <button className={`tp-btn-black-md ${btnCls} w-100`} type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </div>
    </form>
  );
}
