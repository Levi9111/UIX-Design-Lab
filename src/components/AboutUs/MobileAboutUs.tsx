'use client';

import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { aboutUsData, getIconForRole } from '.';
import Button from '../elements/Button';
import Route from '../elements/Route';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const iconFloat = {
  y: [0, -3, 0],
  transition: {
    duration: 2,
    repeat: Infinity,
    ease: 'easeInOut',
  },
};

const MobileAboutUs = () => {
  return (
    <div className='w-full px-4 py-16 '>
      {/* Team Section */}
      <motion.div
        className='space-y-6'
        variants={staggerContainer}
        initial='initial'
        whileInView='animate'
        viewport={{ once: true, margin: '-50px' }}
      >
        {aboutUsData.map((member, index) => {
          const Icon = getIconForRole(member.designation);

          return (
            <motion.div
              key={member.name}
              className='rounded-2xl bg-gradient-to-br from-slate-800/80 to-slate-900/80 p-5 border border-slate-700/50'
              variants={fadeInUp}
              transition={{ duration: 0.4 }}
            >
              <div className='flex items-center gap-4 mb-4'>
                <motion.div
                  className='p-3 rounded-xl bg-slate-700/50 border border-slate-600'
                  //@ts-ignore
                  animate={index < 2 ? iconFloat : {}}
                  style={{ animationDelay: `${index * 0.3}s` }}
                >
                  <Icon className='w-6 h-6 text-blue-300' />
                </motion.div>
                <div>
                  <motion.h3
                    className='text-lg font-semibold text-white'
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2, duration: 0.3 }}
                    viewport={{ once: true }}
                  >
                    {member.name}
                  </motion.h3>
                  <motion.p
                    className='text-sm text-gray-400'
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3, duration: 0.3 }}
                    viewport={{ once: true }}
                  >
                    {member.designation}
                  </motion.p>
                </div>
              </div>

              <motion.p
                className='text-sm text-gray-300 leading-relaxed'
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.4 }}
                viewport={{ once: true }}
              >
                {member.description}
              </motion.p>

              <motion.div
                className='flex items-center gap-2 mt-4 text-sm text-gray-400'
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.3 }}
                viewport={{ once: true }}
              >
                <motion.div
                  animate={{
                    rotate: [0, 10, -10, 0],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    delay: index * 0.5,
                  }}
                >
                  <Sparkles className='w-4 h-4' />
                </motion.div>
                <span>Team Member</span>
              </motion.div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* CTA Section */}
      <motion.div
        className='text-center mt-20 p-8 rounded-3xl bg-gradient-to-r from-slate-800/50 via-slate-800/30 to-slate-800/50 
                   border border-slate-700/50 backdrop-blur-xl overflow-hidden relative'
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        {/* Animated background gradient mesh */}
        <motion.div
          className='absolute inset-0 opacity-10'
          animate={{
            background: [
              'radial-gradient(circle at 20% 20%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)',
              'radial-gradient(circle at 80% 80%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)',
              'radial-gradient(circle at 20% 20%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)',
            ],
          }}
          transition={{ duration: 4, repeat: Infinity }}
        />

        <motion.h3
          className='text-2xl font-bold text-white mb-4'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          viewport={{ once: true }}
        >
          Ready to Work Together?
        </motion.h3>

        <motion.p
          className='text-gray-300 mb-6 max-w-2xl mx-auto text-sm leading-relaxed'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          viewport={{ once: true }}
        >
          Our diverse team combines creativity, technical expertise, and
          strategic thinking to deliver exceptional results for every project.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.4, ease: 'backOut' }}
          viewport={{ once: true }}
        >
          <Route link='/get-in-touch'>
            <Button type={2}>Get in touch</Button>
          </Route>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default MobileAboutUs;
