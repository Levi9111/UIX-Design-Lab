'use client';
import React, { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { ServiceCardProps, serviceData, Service } from '.';
import { ArrowRight, Sparkles } from 'lucide-react';
import GalacticModal from '../ui/GalacticModal';

const ServiceCard: React.FC<ServiceCardProps> = ({
  service,
  index,
  isVisible,
  onClick,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const IconComponent = service.icon;

  return (
    <div
      ref={cardRef}
      onClick={onClick}
      className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br ${
        isHovered ? service.hoverGradient : service.gradient
      } p-[2px] transition-all duration-700 ease-out transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className='absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform -skew-x-12 -translate-x-full group-hover:translate-x-full animation-duration-1000'></div>

      <div className='relative h-full bg-slate-900/95 backdrop-blur-sm rounded-2xl p-8 transition-all duration-500 group-hover:bg-slate-900/90'>
        <div className='absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0'>
          <Sparkles className='w-5 h-5 text-white/40 animate-pulse' />
        </div>

        <div className='relative mb-6'>
          <div
            className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.gradient} p-3 transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-3`}
          >
            <IconComponent className='w-full h-full text-white drop-shadow-lg' />
          </div>
          <div
            className={`absolute inset-0 w-16 h-16 rounded-xl bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-30 blur-xl transition-all duration-500 group-hover:scale-125`}
          ></div>
        </div>

        <h3 className='text-2xl font-bold text-white mb-4 transform transition-all duration-300 group-hover:translate-x-2'>
          {service.title}
        </h3>

        <div className='flex flex-wrap gap-2 mb-6'>
          {service.tags.map((tag, tagIndex) => (
            <span
              key={tag}
              className='px-3 py-1 bg-white/10 backdrop-blur-sm text-white/80 text-sm rounded-full border border-white/20 transform transition-all duration-300 hover:bg-white/20 hover:scale-105'
              style={{ transitionDelay: `${tagIndex * 100}ms` }}
            >
              {tag}
            </span>
          ))}
        </div>

        <div className='flex items-center text-white/60 group-hover:text-white transition-colors duration-300'>
          <span className='text-sm font-medium'>Learn More</span>
          <ArrowRight className='w-4 h-4 ml-2 transform transition-all duration-300 group-hover:translate-x-2' />
        </div>

        <div
          className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${service.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}
        ></div>
      </div>
    </div>
  );
};

const ProvidedServices = () => {
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set());
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const sectionRef = useRef<HTMLDivElement | null>(null);
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

  return (
    <section
      ref={sectionRef}
      className='min-h-screen uix-center py-20 px-4 relative overflow-hidden'
    >
      {/* Background */}
      <div className='absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent'></div>
      <div className='absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse'></div>
      <div className='absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse animation-delay-1000'></div>

      <div className='max-w-7xl mx-auto relative z-10'>
        <div className='text-center mb-16'>
          <div className='inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-6 py-2 mb-6'>
            <Sparkles className='w-4 h-4 text-blue-400 animate-spin' />
            <span className='text-white/80 text-sm font-medium'>
              Our Services
            </span>
          </div>

          <h2 className='text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent mb-6 animate-fade-in'>
            What We{' '}
            <span className='inline-block bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient-x'>
              Provide
            </span>
          </h2>

          <p className='text-xl text-white/60 max-w-2xl mx-auto leading-relaxed'>
            Crafting digital experiences that captivate, convert, and inspire.
            From concept to deployment, we bring your vision to life.
          </p>
        </div>

        {/* Services */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {serviceData.map((service, index) => (
            <ServiceCard
              key={service.title}
              service={service}
              index={index}
              isVisible={visibleCards.has(index)}
              onClick={() => setSelectedService(service)}
            />
          ))}
        </div>

        {/* CTA */}
        <div
          className='text-center mt-20'
          onClick={() => router.push('/select-your-project')}
        >
          <div className='inline-flex items-center gap-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full px-8 py-4 text-white font-semibold transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25 cursor-pointer group'>
            <span>Ready to Start Your Project?</span>
            <ArrowRight className='w-5 h-5 transform transition-transform duration-300 group-hover:translate-x-2' />
          </div>
        </div>
      </div>

      {/* Modal */}
      <GalacticModal
        isOpen={!!selectedService}
        onClose={() => setSelectedService(null)}
        title={selectedService?.title || ''}
      >
        {selectedService && (
          <div className='text-white/80 space-y-6'>
            <p>{selectedService.description}</p>

            <div>
              <h4 className='text-white font-semibold mb-2'>Tags</h4>
              <div className='flex flex-wrap gap-2'>
                {selectedService.tags.map((tag) => (
                  <span
                    key={tag}
                    className='bg-white/10 px-3 py-1 text-sm rounded-full border border-white/20'
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h4 className='text-white font-semibold mb-2'>Features</h4>
              <ul className='list-disc list-inside space-y-1'>
                {selectedService.features?.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className='text-white font-semibold mb-2'>Tools Used</h4>
              <div className='flex flex-wrap gap-2'>
                {selectedService.toolsUsed?.map((tool) => (
                  <span
                    key={tool}
                    className='bg-white/10 px-3 py-1 text-sm rounded-full border border-white/20'
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            <div className='flex flex-col sm:flex-row gap-6'>
              <div>
                <h4 className='text-white font-semibold mb-1'>Delivery Time</h4>
                <p>{selectedService.timeToDeliver}</p>
              </div>
              <div>
                <h4 className='text-white font-semibold mb-1'>Pricing Tier</h4>
                <p>{selectedService.pricingTier}</p>
              </div>
              <div>
                <h4 className='text-white font-semibold mb-1'>Audience</h4>
                <p>{selectedService.audience}</p>
              </div>
            </div>

            {selectedService.portfolioLink && (
              <a
                href={selectedService.portfolioLink}
                target='_blank'
                rel='noopener noreferrer'
                className='inline-block mt-4 text-blue-400 underline hover:text-blue-300'
              >
                View Portfolio Example
              </a>
            )}
          </div>
        )}
      </GalacticModal>
    </section>
  );
};

export default ProvidedServices;
