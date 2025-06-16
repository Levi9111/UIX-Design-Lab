'use client';

import logo from '../../public/logos/logo.svg';
import instagram from '../../public/icons/instagram.svg';
import tiktok from '../../public/icons/tiktok.svg';
import linkedin from '../../public/icons/linkedin.svg';
import youtube from '../../public/icons/youtube.svg';
import twitter from '../../public/icons/twitter.svg';
import Image from 'next/image';
import { motion } from 'framer-motion';

const imgArr = [
  {
    src: instagram,
    alt: 'Instagram logo',
    link: 'https://www.instagram.com/yourprofile',
  },
  {
    src: tiktok,
    alt: 'TikTok logo',
    link: 'https://www.tiktok.com/@yourprofile',
  },
  {
    src: linkedin,
    alt: 'LinkedIn logo',
    link: 'https://www.linkedin.com/in/yourprofile',
  },
  {
    src: youtube,
    alt: 'YouTube logo',
    link: 'https://www.youtube.com/channel/yourchannel',
  },
  {
    src: twitter,
    alt: 'Twitter logo',
    link: 'https://twitter.com/yourprofile',
  },
];

const footerList = [
  {
    title: 'Features',
    link: '',
  },
  {
    title: 'Pricing',
    link: '',
  },
  {
    title: 'Contact',
    link: '',
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
          {imgArr.map((img, index) => (
            <motion.a
              key={img.link}
              href={img.link}
              whileHover={{ scale: 1.2, rotate: 5 }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Image src={img.src} alt={img.alt} width={20} height={20} />
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
            <a href={list.link} target='_blank' rel='noopener noreferrer'>
              {list.title}
              <span className='block w-0 h-[1px] bg-white transition-all group-hover:w-full' />
            </a>
          </motion.li>
        ))}
      </motion.ul>

      {/* Bottom section: Copyright */}
      <div className='pt-6 pb-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-[#d5dbe6]'>
        <p>© {new Date().getFullYear()} UIX Design Lab</p>
        <p>All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
