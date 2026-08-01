import React from 'react';
import { motion, Variants } from 'framer-motion';
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
  const Icon = getIconForRole(member.designation);

  const cardVariants: Variants = {
    hidden: {
      opacity: 0,
      y: layoutStyle === 'featured' ? 50 : 30,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        delay: index * 0.1,
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
      className={`group relative transform-gpu ${
        layoutStyle === 'featured' ? 'col-span-2 row-span-2' : ''
      }`}
      variants={cardVariants}
      initial='hidden'
      animate='visible'
      whileHover={{
        y: -6,
        transition: { duration: 0.3, ease: 'easeOut' },
      }}
    >
      {/* Main Card Container */}
      <div
        className={`relative bg-gradient-to-br from-slate-800/80 via-slate-800/60 to-slate-900/80 
                   backdrop-blur-xl border border-slate-700/60 rounded-3xl p-8 h-full ${getCardHeight()} 
                   overflow-hidden shadow-2xl transition-colors duration-300 group-hover:border-blue-500/40`}
      >
        {/* Animated Background Mesh */}
        <div className='absolute inset-0 opacity-30 pointer-events-none'>
          <div className='absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/5 to-cyan-500/10' />
        </div>

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
            <div
              className={`relative ${
                layoutStyle === 'featured' ? 'mb-0' : 'mb-4'
              }`}
            >
              <div
                className={`relative ${
                  layoutStyle === 'featured' ? 'w-20 h-20' : 'w-16 h-16'
                } 
                           bg-gradient-to-br from-blue-500/30 via-purple-500/20 to-cyan-500/30 
                           rounded-2xl flex items-center justify-center border border-slate-600/50 
                           shadow-lg backdrop-blur-sm group-hover:scale-105 transition-transform duration-300`}
              >
                <Icon
                  className={`${
                    layoutStyle === 'featured' ? 'w-10 h-10' : 'w-8 h-8'
                  } text-blue-300`}
                />
              </div>
            </div>

            {/* Role Badge */}
            {layoutStyle === 'featured' && (
              <div
                className='px-3 py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 
                           rounded-full border border-blue-400/30 backdrop-blur-sm'
              >
                <span className='text-xs font-medium text-blue-300 uppercase tracking-wider'>
                  {member.role}
                </span>
              </div>
            )}
          </div>

          {/* Text Content */}
          <div
            className={`${
              layoutStyle === 'featured' ? 'text-left' : 'text-center'
            } flex-grow flex flex-col justify-center`}
          >
            <h3
              className={`font-bold text-white mb-2 group-hover:text-blue-200 transition-colors ${
                layoutStyle === 'featured' ? 'text-3xl' : 'text-xl'
              }`}
            >
              {member.name}
            </h3>

            <p
              className={`text-gray-300 font-medium mb-3 ${
                layoutStyle === 'featured' ? 'text-lg' : 'text-base'
              }`}
            >
              {member.designation}
            </p>

            {layoutStyle === 'featured' && (
              <p className='text-gray-400 text-sm leading-relaxed mb-4'>
                {member.description}
              </p>
            )}

            <div
              className={`bg-gradient-to-r from-blue-400 to-purple-400 rounded-full h-0.5 ${
                layoutStyle === 'featured' ? 'w-24' : 'w-16 mx-auto'
              }`}
            />
          </div>

          {/* Footer Section */}
          <div
            className={`mt-4 ${
              layoutStyle === 'featured'
                ? 'flex items-center justify-between'
                : 'text-center'
            }`}
          >
            <div className='flex items-center gap-2 text-sm text-gray-400'>
              <Sparkles className='w-4 h-4 text-blue-400' />
              <span>Team Lead</span>
            </div>

            {layoutStyle === 'featured' && (
              <a
                href='https://www.behance.net/sktahsinahmed'
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center gap-1 text-blue-400 text-sm font-medium hover:text-blue-300 transition-colors'
              >
                <span>View Profile</span>
                <ChevronRight className='w-4 h-4' />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const DesktopAboutUs = () => {
  return (
    <div className='w-full overflow-hidden'>
      <div className='uix-center'>
        {/* Header Stats Row */}
        <div className='flex justify-center items-center gap-8 text-sm mb-16'>
          {[
            { icon: Users, label: '5+ Experts', color: 'text-blue-400' },
            { icon: Globe, label: 'Global Reach', color: 'text-purple-400' },
            {
              icon: Sparkles,
              label: 'Innovation Focus',
              color: 'text-cyan-400',
            },
          ].map((stat) => (
            <div
              key={stat.label}
              className='flex items-center gap-2 text-gray-400 hover:text-white transition-colors cursor-default'
            >
              <stat.icon className={`w-5 h-5 ${stat.color}`} />
              <span className='font-medium'>{stat.label}</span>
            </div>
          ))}
        </div>

        {/* Team Grid */}
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-fr'>
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
        </div>

        {/* CTA Section */}
        <div
          className='text-center mt-20 p-8 rounded-3xl bg-gradient-to-r from-slate-800/50 via-slate-800/30 to-slate-800/50 
                     border border-slate-700/50 backdrop-blur-xl'
        >
          <h3 className='text-2xl font-bold text-white mb-4'>
            Ready to Work Together?
          </h3>
          <p className='text-gray-300 mb-8 max-w-2xl mx-auto'>
            Our diverse team combines creativity, technical expertise, and
            strategic thinking to deliver exceptional results for every project.
          </p>
          <Route link='/get-in-touch'>
            <Button type={2}>Get in touch</Button>
          </Route>
        </div>
      </div>
    </div>
  );
};

export default DesktopAboutUs;
