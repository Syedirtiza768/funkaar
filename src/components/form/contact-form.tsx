// app/components/forms/contact-form.tsx
'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import ErrorMsg from '../error-msg';

// Define FormData type
type FormData = {
  name: string;
  email: string;
  phone?: string;
  organization: string;
  website?: string;
  message: string;
  projectType?: string;
  referralSource: string;
};

// Validation schema using Yup
const schema = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  phone: yup.string().optional(),
  organization: yup.string().required('Organization is required'),
  website: yup.string().optional(),
  message: yup.string().required('Message is required'),
  projectType: yup.string().optional(),
  referralSource: yup.string().required('This field is required'),
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
        <label className='text-white mb-2'>Organization*</label>
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
        <label className='text-white mb-2'>Tell Us About Your Project*</label>
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


      <div className="cn-contactform-btn">
        <button className={`tp-btn-black-md ${btnCls} w-100`} type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </div>
    </form>
  );
}
