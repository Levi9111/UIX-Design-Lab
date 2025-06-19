'use client';
import React, { useState, useRef, useEffect } from 'react';
import {
  Monitor,
  Rocket,
  Smartphone,
  BarChart3,
  Share2,
  Code,
  ArrowRight,
  Sparkles,
} from 'lucide-react';

const serviceData = [
  {
    title: 'Web Design',
    tags: ['Responsive', 'User-Centered', 'Interactive'],
    icon: Monitor,
    gradient: 'from-blue-500 to-purple-600',
    hoverGradient: 'from-blue-600 to-purple-700',
  },
  {
    title: 'Landing Page Design',
    tags: ['Engaging', 'High Conversion', 'Fast'],
    icon: Rocket,
    gradient: 'from-emerald-500 to-teal-600',
    hoverGradient: 'from-emerald-600 to-teal-700',
  },
  {
    title: 'App Design',
    tags: ['iOS & Android', 'UI/UX', 'Prototyping'],
    icon: Smartphone,
    gradient: 'from-orange-500 to-red-600',
    hoverGradient: 'from-orange-600 to-red-700',
  },
  {
    title: 'Dashboard Design',
    tags: ['Data Visualization', 'Components', 'Usability'],
    icon: BarChart3,
    gradient: 'from-cyan-500 to-blue-600',
    hoverGradient: 'from-cyan-600 to-blue-700',
  },
  {
    title: 'Social Media Design',
    tags: ['Visuals', 'Branding', 'Platform Optimized'],
    icon: Share2,
    gradient: 'from-pink-500 to-rose-600',
    hoverGradient: 'from-pink-600 to-rose-700',
  },
  {
    title: 'Development',
    tags: ['Next.js', 'MERN Stack', 'WordPress'],
    icon: Code,
    gradient: 'from-violet-500 to-indigo-600',
    hoverGradient: 'from-violet-600 to-indigo-700',
  },
];

type Service = {
  title: string;
  tags: string[];
  icon: React.ElementType;
  gradient: string;
  hoverGradient: string;
};

type ServiceCardProps = {
  service: Service;
  index: number;
  isVisible: boolean;
};

const ServiceCard: React.FC<ServiceCardProps> = ({
  service,
  index,
  isVisible,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const IconComponent = service.icon;

  return (
    <div
      ref={cardRef}
      className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br ${
        isHovered ? service.hoverGradient : service.gradient
      } p-[2px] transition-all duration-700 ease-out transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
      }`}
      style={{
        transitionDelay: `${index * 150}ms`,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Animated border glow */}
      <div className='absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform -skew-x-12 -translate-x-full group-hover:translate-x-full animation-duration-1000'></div>

      {/* Card content */}
      <div className='relative h-full bg-slate-900/95 backdrop-blur-sm rounded-2xl p-8 transition-all duration-500 group-hover:bg-slate-900/90'>
        {/* Floating particles effect */}
        <div className='absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0'>
          <Sparkles className='w-5 h-5 text-white/40 animate-pulse' />
        </div>

        {/* Icon with breathing animation */}
        <div className='relative mb-6'>
          <div
            className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.gradient} p-3 transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-3`}
          >
            <IconComponent className='w-full h-full text-white drop-shadow-lg' />
          </div>
          {/* Icon glow effect */}
          <div
            className={`absolute inset-0 w-16 h-16 rounded-xl bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-30 blur-xl transition-all duration-500 group-hover:scale-125`}
          ></div>
        </div>

        {/* Title with slide animation */}
        <h3 className='text-2xl font-bold text-white mb-4 transform transition-all duration-300 group-hover:translate-x-2'>
          {service.title}
        </h3>

        {/* Tags with stagger animation */}
        <div className='flex flex-wrap gap-2 mb-6'>
          {service.tags.map((tag, tagIndex) => (
            <span
              key={tag}
              className='px-3 py-1 bg-white/10 backdrop-blur-sm text-white/80 text-sm rounded-full border border-white/20 transform transition-all duration-300 hover:bg-white/20 hover:scale-105'
              style={{
                transitionDelay: `${tagIndex * 100}ms`,
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* CTA with arrow animation */}
        <div className='flex items-center text-white/60 group-hover:text-white transition-colors duration-300'>
          <span className='text-sm font-medium'>Learn More</span>
          <ArrowRight className='w-4 h-4 ml-2 transform transition-all duration-300 group-hover:translate-x-2' />
        </div>

        {/* Bottom gradient line */}
        <div
          className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${service.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}
        ></div>
      </div>
    </div>
  );
};

const ProvidedServices = () => {
  const [visibleCards, setVisibleCards] = useState(new Set());
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Trigger staggered animation
            serviceData.forEach((_, index) => {
              setTimeout(() => {
                setVisibleCards((prev) => new Set([...prev, index]));
              }, index * 150);
            });
          }
        });
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className='min-h-screen uix-center py-20 px-4 relative overflow-hidden'
    >
      {/* Background effects */}
      <div className='absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent'></div>
      <div className='absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse'></div>
      <div className='absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse animation-delay-1000'></div>

      <div className='max-w-7xl mx-auto relative z-10'>
        {/* Header with typewriter effect */}
        <div className='text-center mb-16'>
          <div className='inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-6 py-2 mb-6'>
            <Sparkles className='w-4 h-4 text-blue-400 animate-spin' />
            <span className='text-white/80 text-sm font-medium'>
              Our Services
            </span>
          </div>

          <h2 className='text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent mb-6 animate-fade-in'>
            What We
            <span className='block bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient-x'>
              Provide
            </span>
          </h2>

          <p className='text-xl text-white/60 max-w-2xl mx-auto leading-relaxed'>
            Crafting digital experiences that captivate, convert, and inspire.
            From concept to deployment, we bring your vision to life.
          </p>
        </div>

        {/* Services grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {serviceData.map((service, index) => (
            <ServiceCard
              key={service.title}
              service={service}
              index={index}
              isVisible={visibleCards.has(index)}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className='text-center mt-20'>
          <div className='inline-flex items-center gap-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full px-8 py-4 text-white font-semibold transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25 cursor-pointer group'>
            <span>Ready to Start Your Project?</span>
            <ArrowRight className='w-5 h-5 transform transition-transform duration-300 group-hover:translate-x-2' />
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes gradient-x {
          0%,
          100% {
            background-size: 200% 200%;
            background-position: left center;
          }
          50% {
            background-size: 200% 200%;
            background-position: right center;
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-gradient-x {
          animation: gradient-x 3s ease infinite;
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }

        .animation-delay-1000 {
          animation-delay: 1s;
        }

        .animation-duration-1000 {
          animation-duration: 1s;
        }
      `}</style>
    </section>
  );
};

export default ProvidedServices;
