'use client';

import { FormEvent, useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { PlanetText } from '@/components/elements/PlanetText';

const GetInTouch = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log('Submitted:', formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section className='relative min-h-screen bg-[#04070d]/40 px-6 py-24 text-white overflow-hidden'>
      <div className='absolute inset-0 z-0 pointer-events-none'>
        <div className='absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-3xl animate-pulse' />
        <div className='absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000' />
        <div className='absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent' />
      </div>

      <PlanetText
        title='Get in touch'
        subtitle='We’d love to hear from you. Fill out the form below and we’ll get back to you shortly.'
      />
      {/* Contact Info + Form */}
      <div className='relative z-10 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12'>
        {/* Info */}
        <div className='space-y-6'>
          <div className='flex items-start gap-4'>
            <Mail className='w-6 h-6 text-blue-400' />
            <div>
              <h4 className='font-semibold text-white'>Email</h4>
              <p className='text-white/60'>support@uixdl.com</p>
            </div>
          </div>
          <div className='flex items-start gap-4'>
            <Phone className='w-6 h-6 text-green-400' />
            <div>
              <h4 className='font-semibold text-white'>Phone</h4>
              <p className='text-white/60'>+880 1234 567890</p>
            </div>
          </div>
          <div className='flex items-start gap-4'>
            <MapPin className='w-6 h-6 text-purple-400' />
            <div>
              <h4 className='font-semibold text-white'>Address</h4>
              <p className='text-white/60'>Dhaka, Bangladesh</p>
            </div>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className='space-y-6'>
          <div>
            <label className='block mb-2 text-white/80'>Name</label>
            <input
              type='text'
              name='name'
              value={formData.name}
              onChange={handleChange}
              required
              className='w-full px-4 py-3 rounded-lg bg-white/5 text-white border border-white/10 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
          </div>
          <div>
            <label className='block mb-2 text-white/80'>Email</label>
            <input
              type='email'
              name='email'
              value={formData.email}
              onChange={handleChange}
              required
              className='w-full px-4 py-3 rounded-lg bg-white/5 text-white border border-white/10 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
          </div>
          <div>
            <label className='block mb-2 text-white/80'>Message</label>
            <textarea
              name='message'
              rows={4}
              value={formData.message}
              onChange={handleChange}
              required
              className='w-full px-4 py-3 rounded-lg bg-white/5 text-white border border-white/10 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-blue-500'
            ></textarea>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type='submit'
            className='w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-medium shadow-xl'
          >
            <Send className='w-4 h-4' />
            Send Message
          </motion.button>
          {submitted && (
            <p className='text-green-400'>Message sent successfully!</p>
          )}
        </form>
      </div>
    </section>
  );
};

export default GetInTouch;
