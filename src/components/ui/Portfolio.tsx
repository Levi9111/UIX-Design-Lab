'use client';

import Link from 'next/link';
import Image from 'next/image';
import Button from '../elements/Button';
import { PlanetText } from '../elements/PlanetText';
import { motion } from 'framer-motion';
import maker from '../../../public/images/project-images/maker.png';
import gemesisDashboard from '../../../public/images/project-images/gemesis-dashboard.png';
import graph from '../../../public/images/project-images/the-graph.png';
import raydium from '../../../public/images/project-images/raydium.png';
import myShellDashboard from '../../../public/images/project-images/my-shell-dashboard.png';
import nftperp from '../../../public/images/project-images/nftperp.png';
import dogCoin from '../../../public/images/project-images/dog-coin.png';
import graph2 from '../../../public/images/project-images/the-graph-2.png';
import arxNetwork from '../../../public/images/project-images/arx-network.png';
import pixia from '../../../public/images/project-images/pixia.png';
import boogy from '../../../public/images/project-images/boogy.png';
import aster from '../../../public/images/project-images/astar.png';
import dino from '../../../public/images/project-images/dino-token.png';
import ghriyoRealEstate from '../../../public/images/project-images/ghriyo-real-estate.png';
import savitryToken from '../../../public/images/project-images/savitri-token.png';
import texor from '../../../public/images/project-images/texor.png';

import type { StaticImageData } from 'next/image';

type ServiceDetail = {
  title: string;
  description: string;
  image: StaticImageData;
};

export const serviceDetailsData: ServiceDetail[] = [
  {
    title: 'Maker',
    description:
      'A community of MKR token holders govern the Maker Protocol, the smart contracts that power Dai.',
    image: maker,
  },
  {
    title: 'Gemesis Dashboard',
    description:
      'An ai that generate art, create NFT collections, staking contracts and much more!',
    image: gemesisDashboard,
  },
  {
    title: 'The Graph',
    description:
      'Maker is a building an AI consumer layer that connects users, creators, and open-source AI researchers.',
    image: graph,
  },
  {
    title: 'Raydium',
    description:
      'Maker is a building an AI consumer layer that connects users, creators, and open-source AI researchers.',
    image: raydium,
  },
  {
    title: 'My Shell Dashboard',
    description:
      'We bridge AI and Blockchain through Agentic Framework, open-source models, and AI creator community.',
    image: myShellDashboard,
  },
  {
    title: 'Nftperp',
    description:
      'Think you can predict the floor prices for CryptoPunks, Bored Ape Yacht Clubs, Doodles, and other blue-chip NFT projects?',
    image: nftperp,
  },
  {
    title: 'Dog Coin',
    description:
      'Maker is a building an AI consumer layer that connects users, creators, and open-source AI researchers.',
    image: dogCoin,
  },
  {
    title: 'The Graph',
    description:
      'Maker is a building an AI consumer layer that connects users, creators, and open-source AI researchers.',
    image: graph,
  },
  {
    title: 'ARX Network',
    description:
      'Maker is a building an AI consumer layer that connects users, creators, and open-source AI researchers.',
    image: arxNetwork,
  },
  {
    title: 'The Graph',
    description:
      'Maker is a building an AI consumer layer that connects users, creators, and open-source AI researchers.',
    image: graph2,
  },
  {
    title: 'Pixia',
    description:
      'An ai that generate art, create NFT collections, staking contracts and much more!',
    image: pixia,
  },
  {
    title: 'Boogy',
    description:
      'Maker is a building an AI consumer layer that connects users, creators, and open-source AI researchers.',
    image: boogy,
  },
  {
    title: 'Astar 2.0',
    description:
      'Maker is a building an AI consumer layer that connects users, creators, and open-source AI researchers.',
    image: aster,
  },
  {
    title: 'Dino Token',
    description:
      'Maker is a building an AI consumer layer that connects users, creators, and open-source AI researchers.',
    image: dino,
  },
  {
    title: 'Ghriyo Real Estate ',
    description:
      'Maker is a building an AI consumer layer that connects users, creators, and open-source AI researchers.',
    image: ghriyoRealEstate,
  },
  {
    title: 'Savitri Token',
    description:
      'Maker is a building an AI consumer layer that connects users, creators, and open-source AI researchers.',
    image: savitryToken,
  },
  {
    title: 'Texor.Cloud AI',
    description:
      'Maker is a building an AI consumer layer that connects users, creators, and open-source AI researchers.',
    image: texor,
  },
  {
    title: 'Savitri Token',
    description:
      'Maker is a building an AI consumer layer that connects users, creators, and open-source AI researchers.',
    image: savitryToken,
  },
];

const Portfolio = () => {
  return (
    <section
      id='portfolio'
      className='md:pt-24 pt-12 pb-16 sm:pb-20 bg-rich-black/20'
    >
      <div className='uix-center px-4 sm:px-6 relative'>
        <PlanetText
          title={
            <>
              Let's Build Something <br className='hidden sm:block' /> Great
              Together
            </>
          }
          subtitle={
            <>
              We combine design, strategy, and technology to help your business
              stand out online and create lasting impressions on your audience.
            </>
          }
        />

        {/* Services Grid */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto'>
          {serviceDetailsData.slice(0, 6).map((service, index) => (
            <motion.div
              key={index}
              className='bg-gradient-to-br from-[#121417] to-[#1c1f24] rounded-[32px] overflow-hidden border border-white/5 shadow-xl flex flex-col group hover:shadow-platinum/30 transition-all duration-500 hover:scale-[1.02] cursor-pointer'
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
              whileHover={{ y: -8 }}
            >
              {/* Image Container */}
              <div className='relative h-60 bg-gradient-to-tr from-[#2e2e2e] via-[#1f1f1f] to-[#3a3a3a] overflow-hidden'>
                <div className='absolute inset-0 group-hover:scale-110 transition-transform duration-700 ease-out'>
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className='object-center'
                    sizes='(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw'
                  />
                </div>

                {/* Overlay for better text readability */}
                <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300' />

                {/* Optional: Add a subtle shine effect */}
                <div className='absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000' />
              </div>

              {/* Text Content */}
              <div className='p-6 sm:p-8 bg-rich-black rounded-b-[32px] border-t border-white/5 flex-1 flex flex-col'>
                <h3 className='text-xl sm:text-2xl text-platinum font-semibold mb-3 group-hover:text-white transition-colors duration-300'>
                  {service.title}
                </h3>
                <p className='text-roman-silver text-sm sm:text-base leading-relaxed flex-1 group-hover:text-platinum/90 transition-colors duration-300'>
                  {service.description}
                </p>

                {/* Optional: Add a subtle CTA on hover */}
                <div className='mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                  <span className='text-xs text-platinum/60 font-medium tracking-wider uppercase'>
                    View Project →
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <Link
          href='/all-projects'
          className='mt-14 sm:mt-[60px] w-full flex items-center justify-center'
        >
          <Button>View More</Button>
        </Link>
      </div>
    </section>
  );
};

export default Portfolio;
