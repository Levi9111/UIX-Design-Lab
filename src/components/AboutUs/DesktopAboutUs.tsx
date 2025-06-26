import React, { useRef, useState } from 'react';
import {
  motion,
  useInView,
  Variants,
  useMotionValue,
  useSpring,
} from 'framer-motion';
import { Users, Sparkles, Globe, ChevronRight } from 'lucide-react';
import Button from '../elements/Button';
import { aboutUsData, getIconForRole } from '.';
import Route from '../elements/Route';

const TeamMemberCard = ({
  member,
  index,
  layoutStyle = 'default',
}: {
  member: (typeof aboutUsData)[0];
  index: number;
  layoutStyle?: 'default' | 'featured' | 'compact';
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const scale = useSpring(1, { stiffness: 300, damping: 30 });

  const Icon = getIconForRole(member.designation);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    mouseX.set((e.clientX - centerX) * 0.5);
    mouseY.set((e.clientY - centerY) * 0.5);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    scale.set(1.02);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    mouseX.set(0);
    mouseY.set(0);
    scale.set(1);
  };

  const cardVariants: Variants = {
    hidden: {
      opacity: 0,
      y: layoutStyle === 'featured' ? 60 : 40,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: index * 0.15,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const getCardHeight = () => {
    switch (layoutStyle) {
      case 'featured':
        return 'min-h-[380px]';
      case 'compact':
        return 'min-h-[240px]';
      default:
        return 'min-h-[320px]';
    }
  };

  return (
    <motion.div
      ref={cardRef}
      className={`group relative ${
        layoutStyle === 'featured' ? 'col-span-2 row-span-2' : ''
      }`}
      style={{
        scale,
        transformStyle: 'preserve-3d',
        transformOrigin: 'center center',
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      variants={cardVariants}
      initial='hidden'
      animate='visible'
      whileHover={{
        y: -8,
        transition: { duration: 0.4, ease: 'easeOut' },
      }}
    >
      {/* Main Card Container */}
      <motion.div
        className={`relative bg-gradient-to-br from-slate-800/80 via-slate-800/60 to-slate-900/80 
                   backdrop-blur-xl border border-slate-700/60 rounded-3xl p-8 h-full ${getCardHeight()} 
                   overflow-hidden shadow-2xl`}
      >
        {/* Animated Background Mesh */}
        <div className='absolute inset-0 opacity-30'>
          <div className='absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/5 to-cyan-500/10' />

          <>
            <motion.div
              className='absolute top-0 left-0 w-full h-full'
              style={{
                background: `radial-gradient(circle at ${50 + index * 20}% ${
                  30 + index * 15
                }%, 
                             rgba(59, 130, 246, 0.1) 0%, transparent 50%)`,
              }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                delay: index * 0.8,
              }}
            />
            <motion.div
              className='absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-purple-500/10 to-transparent rounded-full blur-xl'
              animate={
                {
                  //   rotate: [0, 360],
                  //   scale: [1, 1.1, 1],
                }
              }
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: 'linear',
              }}
            />
          </>
        </div>

        {/* Glow Effect on Hover */}
        <motion.div
          className='absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/10 to-cyan-500/20 rounded-3xl opacity-0'
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.4 }}
        />

        {/* Content Container */}
        <div className='relative z-10 flex flex-col h-full'>
          {/* Header Section */}
          <div
            className={`flex ${
              layoutStyle === 'featured'
                ? 'items-start justify-between'
                : 'flex-col items-center'
            } mb-6`}
          >
            {/* Icon Section */}
            <motion.div
              className={`relative ${
                layoutStyle === 'featured' ? 'mb-0' : 'mb-4'
              }`}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              {/* Icon Container */}
              <motion.div
                className={`relative ${
                  layoutStyle === 'featured' ? 'w-20 h-20' : 'w-16 h-16'
                } 
                           bg-gradient-to-br from-blue-500/30 via-purple-500/20 to-cyan-500/30 
                           rounded-2xl flex items-center justify-center border border-slate-600/50 
                           shadow-lg backdrop-blur-sm`}
                animate={{
                  boxShadow: [
                    '0 0 20px rgba(59, 130, 246, 0.3)',
                    '0 0 35px rgba(147, 51, 234, 0.4)',
                    '0 0 20px rgba(59, 130, 246, 0.3)',
                  ],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <Icon
                  className={`${
                    layoutStyle === 'featured' ? 'w-10 h-10' : 'w-8 h-8'
                  } text-blue-300`}
                />
              </motion.div>
            </motion.div>

            {/* Role Badge */}
            {layoutStyle === 'featured' && (
              <motion.div
                className='px-3 py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 
                           rounded-full border border-blue-400/30 backdrop-blur-sm'
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 + 0.4 }}
              >
                <span className='text-xs font-medium text-blue-300 uppercase tracking-wider'>
                  {member.role}
                </span>
              </motion.div>
            )}
          </div>

          {/* Text Content */}
          <div
            className={`${
              layoutStyle === 'featured' ? 'text-left' : 'text-center'
            } flex-grow flex flex-col justify-center`}
          >
            {/* Name */}
            <motion.h3
              className={`font-bold text-white mb-2 ${
                layoutStyle === 'featured' ? 'text-3xl' : 'text-xl'
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.3 }}
            >
              {member.name}
            </motion.h3>

            {/* Designation */}
            <motion.p
              className={`text-gray-300 font-medium mb-3 ${
                layoutStyle === 'featured' ? 'text-lg' : 'text-base'
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.4 }}
            >
              {member.designation}
            </motion.p>

            {/* Description (for featured cards) */}
            {layoutStyle === 'featured' && (
              <motion.p
                className='text-gray-400 text-sm leading-relaxed mb-4'
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.5 }}
              >
                {member.description}
              </motion.p>
            )}

            {/* Decorative Line */}
            <motion.div
              className={`bg-gradient-to-r from-blue-400 to-purple-400 rounded-full ${
                layoutStyle === 'featured' ? 'w-24 h-1' : 'w-16 h-0.5 mx-auto'
              }`}
              initial={{ width: 0 }}
              animate={{ width: layoutStyle === 'featured' ? 96 : 64 }}
              transition={{ delay: index * 0.1 + 0.6, duration: 0.8 }}
            />
          </div>

          {/* Footer Section */}
          <motion.div
            className={`mt-4 ${
              layoutStyle === 'featured'
                ? 'flex items-center justify-between'
                : 'text-center'
            }`}
            initial={{ opacity: 0, y: 10 }}
            animate={{
              opacity: isHovered ? 1 : layoutStyle === 'featured' ? 0.7 : 0,
            }}
            transition={{ duration: 0.3 }}
          >
            <div className='flex items-center gap-2 text-sm text-gray-400'>
              <Sparkles className='w-4 h-4' />
              <span>Team Member</span>
            </div>

            {layoutStyle === 'featured' && (
              <motion.div
                className='flex items-center gap-1 text-blue-400 text-sm font-medium cursor-pointer'
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <span>View Profile</span>
                <ChevronRight className='w-4 h-4' />
              </motion.div>
            )}
          </motion.div>
        </div>

        {/* Corner Accent */}
        <motion.div
          className='absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-blue-500/15 via-purple-500/10 to-transparent 
                     rounded-bl-3xl rounded-tr-3xl'
          animate={{
            opacity: [0.5, 1, 0.5],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            delay: index * 0.3,
          }}
        />

        {/* Floating Particles */}

        <>
          <motion.div
            className='absolute top-6 right-8 w-1 h-1 bg-blue-400/60 rounded-full'
            animate={{
              y: [-10, -20, -10],
              opacity: [0.4, 0.8, 0.4],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: index * 0.4,
            }}
          />
          <motion.div
            className='absolute bottom-8 left-8 w-1 h-1 bg-purple-400/60 rounded-full'
            animate={{
              y: [10, 20, 10],
              opacity: [0.3, 0.7, 0.3],
              scale: [1, 2, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: index * 0.2,
            }}
          />
        </>
      </motion.div>
    </motion.div>
  );
};

const DesktopAboutUs = () => {
  const ref = useRef<HTMLDivElement>(null);

  const isInView = useInView(ref, {
    once: true,
    margin: '-10%',
  });

  // Animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const headerVariants: Variants = {
    hidden: { opacity: 0, y: 60, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 1,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <div className='w-full overflow-hidden' ref={ref}>
      <motion.div
        className='uix-center'
        initial='hidden'
        animate={isInView ? 'visible' : 'hidden'}
        variants={containerVariants}
      >
        {/* Enhanced Header Section */}
        <motion.div
          className='text-center mb-20 relative'
          variants={headerVariants}
        >
          {/* Floating Background Elements */}
          <div className='absolute left-1/2 top-0 -translate-x-1/2 w-full max-w-4xl h-32 -z-10'>
            <motion.div
              className='absolute top-0 left-1/4 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl'
              animate={{
                scale: [1, 1.2, 1],
                x: [-20, 20, -20],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
            <motion.div
              className='absolute top-0 right-1/4 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl'
              animate={{
                scale: [1.2, 1, 1.2],
                x: [20, -20, 20],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          </div>

          {/* Stats Row */}
          <motion.div
            className='flex justify-center items-center gap-8 text-sm'
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1, duration: 0.6 }}
          >
            {[
              { icon: Users, label: '5+ Experts', color: 'text-blue-400' },
              { icon: Globe, label: 'Global Reach', color: 'text-purple-400' },
              {
                icon: Sparkles,
                label: 'Innovation Focus',
                color: 'text-cyan-400',
              },
            ].map((stat) => (
              <motion.div
                key={stat.label}
                className='flex items-center gap-2 text-gray-400'
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <stat.icon className={`w-5 h-5 ${stat.color}`} />
                <span className='font-medium'>{stat.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-fr'
          variants={containerVariants}
        >
          {aboutUsData.map((member, index) => {
            const layoutStyle = index === 0 ? 'featured' : 'default';

            return (
              <TeamMemberCard
                key={member.name}
                member={member}
                index={index}
                layoutStyle={layoutStyle}
              />
            );
          })}
        </motion.div>

        {/* Call-to-Action Section */}
        <motion.div
          className='text-center mt-20 p-8 rounded-3xl bg-gradient-to-r from-slate-800/50 via-slate-800/30 to-slate-800/50 
                     border border-slate-700/50 backdrop-blur-xl'
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <h3 className='text-2xl font-bold text-white mb-4'>
            Ready to Work Together?
          </h3>
          <p className='text-gray-300 mb-6 max-w-2xl mx-auto'>
            Our diverse team combines creativity, technical expertise, and
            strategic thinking to deliver exceptional results for every project.
          </p>
          <Route link='/get-in-touch'>
            <Button type={2}>Get in touch</Button>
          </Route>{' '}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default DesktopAboutUs;
