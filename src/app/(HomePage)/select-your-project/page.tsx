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
  Check,
  ArrowLeft,
} from 'lucide-react';
import { useRouter } from 'next/navigation';
import { serviceData } from '@/components/Services';

type ServiceType = {
  title: string;
  tags: string[];
  icon: React.ElementType;
  gradient: string;
  hoverGradient: string;
  description: string;
  features: string[];
};

type ProjectCardProps = {
  service: ServiceType;
  index: number;
  isVisible: boolean;
  isSelected: boolean;
  onSelect: () => void;
};

const ProjectCard: React.FC<ProjectCardProps> = ({
  service,
  index,
  isVisible,
  isSelected,
  onSelect,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);

  const IconComponent = service.icon;

  return (
    <div
      ref={cardRef}
      className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br ${
        isSelected
          ? service.hoverGradient
          : isHovered
          ? service.hoverGradient
          : service.gradient
      } p-[2px] transition-all duration-700 ease-out transform cursor-pointer ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
      } ${isSelected ? 'scale-105 shadow-2xl' : 'hover:scale-105'}`}
      style={{
        transitionDelay: `${index * 150}ms`,
        boxShadow: isSelected
          ? `0 25px 50px -12px ${
              service.gradient.includes('blue')
                ? '#3b82f680'
                : service.gradient.includes('emerald')
                ? '#10b98180'
                : service.gradient.includes('orange')
                ? '#f9731680'
                : service.gradient.includes('cyan')
                ? '#06b6d480'
                : service.gradient.includes('pink')
                ? '#ec489980'
                : '#8b5cf680'
            }`
          : undefined,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onSelect}
    >
      {/* Selection indicator */}
      {isSelected && (
        <div className='absolute top-4 right-4 z-20 w-8 h-8 bg-white rounded-full flex items-center justify-center animate-bounce'>
          <Check className='w-5 h-5 text-green-600' />
        </div>
      )}

      {/* Animated border glow */}
      <div className='absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform -skew-x-12 -translate-x-full group-hover:translate-x-full animation-duration-1000'></div>

      {/* Card content */}
      <div
        className={`relative h-full backdrop-blur-sm rounded-2xl p-8 transition-all duration-500 ${
          isSelected
            ? 'bg-slate-900/98'
            : 'bg-slate-900/95 group-hover:bg-slate-900/90'
        }`}
      >
        {/* Floating particles effect */}
        <div className='absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0'>
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
        <h3 className='text-2xl font-bold text-white mb-3 transform transition-all duration-300 group-hover:translate-x-2'>
          {service.title}
        </h3>

        {/* Description */}
        <p className='text-white/70 text-sm mb-4 leading-relaxed'>
          {service.description}
        </p>

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

        {/* Features list */}
        <div className='space-y-2 mb-6'>
          {service.features.map((feature, featureIndex) => (
            <div
              key={feature}
              className='flex items-center text-white/60 text-sm transform transition-all duration-300'
              style={{
                transitionDelay: `${featureIndex * 50}ms`,
              }}
            >
              <div
                className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.gradient} mr-3`}
              ></div>
              {feature}
            </div>
          ))}
        </div>

        {/* Selection CTA */}
        <div
          className={`flex items-center transition-colors duration-300 ${
            isSelected ? 'text-white' : 'text-white/60 group-hover:text-white'
          }`}
        >
          <span className='text-sm font-medium'>
            {isSelected ? 'Selected' : 'Select Project'}
          </span>
          {!isSelected && (
            <ArrowRight className='w-4 h-4 ml-2 transform transition-all duration-300 group-hover:translate-x-2' />
          )}
        </div>

        {/* Bottom gradient line */}
        <div
          className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${
            service.gradient
          } transform transition-transform duration-500 origin-left ${
            isSelected ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
          }`}
        ></div>
      </div>
    </div>
  );
};

const ProjectSelection = () => {
  const [visibleCards, setVisibleCards] = useState(new Set<number>());
  const [selectedService, setSelectedService] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const router = useRouter();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
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

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleServiceSelect = (index: number) => {
    setSelectedService(selectedService === index ? null : index);
  };

  const handleProceed = () => {
    if (selectedService !== null) {
      console.log('Proceeding with:', serviceData[selectedService].title);
    }
  };

  const handleGoBack = () => {
    router.push('/');
  };

  return (
    <section
      ref={sectionRef}
      className='relative uix-center min-h-screen flex flex-col justify-center lg:pt-36 pt-16 px-6 sm:px-10 overflow-hidden text-white'
    >
      {/* Decorative glowing orbs */}
      <div className='absolute inset-0 z-0 pointer-events-none'>
        <div className='absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-3xl animate-pulse' />
        <div className='absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000' />
        <div className='absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent' />
      </div>

      {/* Headline */}
      <div className='relative z-10 text-center mb-16'>
        <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight'>
          Choose a Service
        </h2>
        <p className='text-white/60 max-w-2xl mx-auto text-base sm:text-lg'>
          Select the service that best fits your project goals.
        </p>
      </div>

      {/* Grid of cards */}
      <div className='relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto w-full'>
        {serviceData.map((service, index) => (
          <ProjectCard
            key={service.title}
            service={service}
            index={index}
            isVisible={visibleCards.has(index)}
            isSelected={selectedService === index}
            onSelect={() => handleServiceSelect(index)}
          />
        ))}
      </div>

      {/* Buttons */}
      <div className='relative z-10 flex justify-center gap-6 mt-16'>
        <button
          onClick={handleGoBack}
          className='flex items-center gap-2 px-6 py-3 border border-white/20 text-white/70 hover:text-white hover:border-white transition rounded-full backdrop-blur-sm'
        >
          <ArrowLeft className='w-4 h-4' />
          Back
        </button>
        <button
          onClick={handleProceed}
          disabled={selectedService === null}
          className={`flex items-center gap-2 px-6 py-3 rounded-full transition backdrop-blur-sm ${
            selectedService !== null
              ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700'
              : 'bg-white/10 text-white/30 cursor-not-allowed'
          }`}
        >
          Proceed
          <ArrowRight className='w-4 h-4' />
        </button>
      </div>
    </section>
  );
};

export default ProjectSelection;
