'use client';

import { useState, useRef } from 'react';
import { contactInfo, socialCards, FormData } from '.';
import { Clock, ExternalLink } from 'lucide-react';
import emailjs from '@emailjs/browser';

const SERVICE_ID = process.env.NEXT_PUBLIC_EMAIL_JS_SERVICE_ID!;
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAIL_JS_TEMPLATE_ID!;
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAIL_JS_PUBLIC_KEY!;
const AUTO_REPLY_TEMPLATE_ID =
  process.env.NEXT_PUBLIC_EMAIL_JS_AUTO_REPLY_TEMPLATE_ID!;

const DesktopGetInTouch = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const form = useRef<HTMLFormElement>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    setIsLoading(true);
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY).then(
      (result) => {
        console.log('Email sent successfully:', result.text);
        setSubmitted(true);
        setIsLoading(false);
        setTimeout(() => setSubmitted(false), 4000);
        setFormData({ name: '', email: '', message: '' });
      },
      (error) => {
        console.error('Email sending error:', error.text);
        setIsLoading(false);
      },
    );
  };

  return (
    <div className='relative px-6 py-20 text-silver-mist overflow-hidden'>
      {/* Background Elements */}
      <div className='absolute inset-0 z-0 pointer-events-none'>
        <div className='absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/3 via-transparent to-transparent' />
      </div>

      <div className='relative z-10'>
        {/* 3-Column Layout with wider form */}
        <div className='grid grid-cols-[1fr_1fr_1.3fr] gap-6 mt-10'>
          {/* Column 1 - Social Cards */}
          <div className='space-y-4'>
            {socialCards.map((social) => (
              <a
                key={social.platform}
                href={social.href}
                className={`group flex items-center justify-between p-5 rounded-xl border ${social.borderColor} ${social.bgColor} ${social.hoverBg} transition-all duration-300`}
              >
                <div className='flex items-center gap-4'>
                  <div
                    className={`p-2 rounded-lg bg-gradient-to-r ${social.color}`}
                  >
                    <social.icon className='w-5 h-5 text-silver-mist' />
                  </div>
                  <div>
                    <h4 className='text-base font-semibold text-silver-mist'>
                      {social.platform}
                    </h4>
                    <p className='text-sm text-gray-400'>{social.handle}</p>
                  </div>
                </div>
                <ExternalLink className='w-4 h-4 text-gray-400' />
              </a>
            ))}
          </div>

          {/* Column 2 - Contact Info */}
          <div className='space-y-4'>
            {contactInfo.map((info) => (
              <div
                key={info.label}
                className='flex items-start gap-4 p-5 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300'
              >
                <div className={`p-3 rounded-xl ${info.bgColor} ${info.color}`}>
                  <info.icon className='w-5 h-5' />
                </div>
                <div>
                  <h5 className='text-base font-semibold text-silver-mist mb-1'>
                    {info.label}
                  </h5>
                  <p className='text-sm text-gray-300'>{info.value}</p>
                  <p className='text-xs text-gray-500'>{info.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Column 3 - Contact Form */}
          <div className='p-6 rounded-xl border border-white/10 bg-white/5'>
            <h3 className='text-xl font-bold text-silver-mist mb-4'>
              Have an Idea? Let us Know
            </h3>
            <form ref={form} onSubmit={handleSubmit} className='space-y-4'>
              <div className='flex gap-4'>
                <input
                  type='text'
                  name='name'
                  placeholder='Name'
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className='w-full px-4 py-3 rounded-md bg-black/10 border border-white/10 text-silver-mist placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-400'
                />
                <input
                  type='email'
                  name='email'
                  placeholder='Email'
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className='w-full px-4 py-3 rounded-md bg-black/10 border border-white/10 text-silver-mist placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-400'
                />
              </div>
              <textarea
                name='message'
                rows={4}
                placeholder='Project Details'
                value={formData.message}
                onChange={handleChange}
                required
                className='w-full px-4 py-3 rounded-md bg-black/10 border border-white/10 text-silver-mist placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-400 resize-none'
              ></textarea>

              <button
                type='submit'
                disabled={isLoading}
                className='w-full py-3 bg-gradient-to-r from-blue-500 hover:from-purple-600 to-purple-600 hover:to-blue-500 text-silver-mist font-semibold rounded-md transition duration-300 disabled:opacity-70 cursor-pointer disabled:cursor-not-allowed'
              >
                {isLoading ? 'Sending...' : 'Send Your Message'}
              </button>

              {submitted && (
                <div className='text-sm text-emerald-400 mt-2'>
                  Message sent successfully!
                </div>
              )}
            </form>
          </div>
        </div>

        {/* Book a Call Section */}
        <div className='mt-10 p-6 rounded-xl border border-white/10 bg-white/5 text-center'>
          <h3 className='text-xl font-bold text-silver-mist mb-2'>
            Book a Free 15-Minute Call
          </h3>
          <p className='text-sm text-gray-400 mb-4'>
            Have a concept or question? Let’s jump on a quick call to discuss
            and validate your ideas.
          </p>
          <button
            type='button'
            onClick={
              () => window.open('https://calendly.com/yourname/10min', '_blank') // Replace with your actual link
            }
            className='inline-block px-6 py-3 bg-gradient-to-r from-purple-500 hover:from-blue-600 to-blue-600 hover:to-purple-500 text-silver-mist font-semibold rounded-md transition duration-300'
          >
            Schedule a Call
          </button>
        </div>

        {/* Bottom Note */}
        <div className='mt-10 text-center'>
          <div className='inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full'>
            <Clock className='w-4 h-4 text-blue-400' />
            <span className='text-sm text-gray-300'>
              Quick Response Time: Within 24 hours
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesktopGetInTouch;
