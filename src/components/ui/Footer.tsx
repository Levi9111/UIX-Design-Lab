'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  SiInstagram,
  SiX,
  SiLinkedin,
  SiDribbble,
  SiBehance,
} from 'react-icons/si';

import Image from 'next/image';
import logo from '../../../public/logos/logo.svg';

const iconArr = [
  {
    Icon: SiBehance,
    link: 'https://www.behance.net/yourprofile',
    label: 'Behance',
  },
  {
    Icon: SiDribbble,
    link: 'https://dribbble.com/yourprofile',
    label: 'Dribbble',
  },
  {
    Icon: SiLinkedin,
    link: 'https://www.linkedin.com/in/yourprofile',
    label: 'LinkedIn',
  },
  {
    Icon: SiInstagram,
    link: 'https://www.instagram.com/yourprofile',
    label: 'Instagram',
  },
  {
    Icon: SiX,
    link: 'https://twitter.com/yourprofile',
    label: 'X',
  },
];

const footerList = [
  {
    title: 'Features',
    link: '/features',
  },
  {
    title: 'Pricing',
    link: '/pricing',
  },
  {
    title: 'Contact',
    link: '/get-in-touch',
  },
  {
    title: 'Updates',
    link: '',
  },
];

const Footer = () => {
  return (
    <footer className='w-full px-4 md:px-8 lg:px-16 pt-12 bg-background/20 text-white'>
      {/* Top section: Logo and Socials */}
      <div className='flex flex-col md:flex-row items-center justify-between gap-6'>
        <div className='flex items-center gap-3'>
          <Image src={logo} alt='Logo' width={43} height={44} />
          <h4 className='font-dm-sans font-semibold text-lg sm:text-xl tracking-wide text-platinum'>
            Design lab
          </h4>
        </div>

        <div className='flex gap-4'>
          {iconArr.map(({ Icon, link, label }, index) => (
            <motion.a
              key={link}
              href={link}
              target='_blank'
              rel='noopener noreferrer'
              whileHover={{ scale: 1.2, rotate: 5 }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              aria-label={label}
              className='text-white font-extralight hover:text-[#DCA685] transition-colors flex items-center'
            >
              <Icon size={20} strokeWidth={0.1} />
            </motion.a>
          ))}
        </div>
      </div>

      {/* Middle section: Links */}
      <motion.ul
        className='pt-10 pb-6 flex flex-wrap items-center justify-center md:justify-start gap-6 border-b border-white/10'
        initial='hidden'
        animate='visible'
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.1,
            },
          },
        }}
      >
        {footerList.map((list) => (
          <motion.li
            key={list.title}
            className='text-[#D5DBE6B2]/70 font-dm-sans text-base relative cursor-pointer hover:text-white transition-colors'
            whileHover={{ y: -2 }}
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <Link href={list.link} rel='noopener noreferrer'>
              {list.title}
              <span className='block w-0 h-[1px] bg-white transition-all group-hover:w-full' />
            </Link>
          </motion.li>
        ))}
      </motion.ul>

      {/* Bottom section */}
      <div className='pt-6 pb-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-[#d5dbe6]'>
        <p>© {new Date().getFullYear()} UIX Design Lab</p>
        <p>All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
