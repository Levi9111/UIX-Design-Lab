import Image from 'next/image';
import logo from '../../public/logos/logo.svg';

const links = [
  { title: 'Home', path: '' },
  { title: 'Portfolio', path: '' },
  { title: 'Services', path: '' },
  { title: 'Review', path: '' },
  { title: 'FAQ', path: '' },
];

const Navbar = () => {
  return (
    <nav className='bg-quartz'>
      <div className=''>
        <Image src={logo} alt='UIX Design Lab Logo' width={56} height={53} />
        <p className=''>Design lab</p>
      </div>
    </nav>
  );
};

export default Navbar;
