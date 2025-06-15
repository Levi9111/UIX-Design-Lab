import Button from './Button';

const navigationLinks = [
  {
    title: 'All Categories',
    path: '',
    type: 2,
  },
  {
    title: 'UI/UX Design',
    path: '',
    type: 1,
  },
  {
    title: 'Dashboard',
    path: '',
    type: 1,
  },
  {
    title: 'Development',
    path: '',
    type: 1,
  },
];

const serviceDetailsData = [
  {
    title: 'My Shell AI',
    description:
      'MyShell is building an AI consumer layer that connects users, creators, and open-source AI researchers.',
  },
  {
    title: 'My Shell AI',
    description:
      'MyShell is building an AI consumer layer that connects users, creators, and open-source AI researchers.',
  },
  {
    title: 'My Shell AI',
    description:
      'MyShell is building an AI consumer layer that connects users, creators, and open-source AI researchers.',
  },
  {
    title: 'My Shell AI',
    description:
      'MyShell is building an AI consumer layer that connects users, creators, and open-source AI researchers.',
  },
  {
    title: 'My Shell AI',
    description:
      'MyShell is building an AI consumer layer that connects users, creators, and open-source AI researchers.',
  },
  {
    title: 'My Shell AI',
    description:
      'MyShell is building an AI consumer layer that connects users, creators, and open-source AI researchers.',
  },
];

const ProvidedServices = () => {
  return (
    <section className='md:pt-20'>
      <div className='uix-center'>
        <h3 className='uix-title'>
          Let’s Build Something <br className='break' /> Great Together
        </h3>
        <p className='md:mt-4 md:mb-[60px] uix-text-title font-dm-sans'>
          We combine design, strategy, and technology to help your business
          stand <br className='break' /> out online and create lasting
          impressions on your audience.
        </p>
        {/* Navigation buttons */}
        <div className='flex items-center justify-center gap-4 md:mb-20'>
          {navigationLinks.map((navigation) => (
            <Button key={navigation.title} type={navigation.type}>
              {navigation.title}
            </Button>
          ))}
        </div>

        {/* Service descriptions */}
        <div className='max-w-[1111px] w-full mx-auto grid md:grid-cols-2 gap-4'>
          {serviceDetailsData.map((serviceDetails, index) => (
            <div
              className='max-w-[546px] w-full min-h-[678px] h-max rounded-[40px] bg-charcoal-blue relative'
              key={index}
            >
              <div className=''>{/* Image will be here */}</div>
              <div className='h-[190px] w-full bg-background absolute bottom-0 left-0 rounded-b-[40px] inner-shadow border-b border-platinum/15 pl-8 pt-8 pr-6 pb-12'>
                <h3 className='font-normal text-[33px] leading-120 tracking-2 mb-[18px] text-cultured'>
                  {serviceDetails.title}
                </h3>
                <p className='font-dm-sans font-normal text-lg leading-150 tracking-0 text-roman-silver'>
                  {serviceDetails.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className='md:mt-[60px] w-full flex items-center justify-center'>
          <Button>View More</Button>
        </div>
      </div>
    </section>
  );
};

export default ProvidedServices;
