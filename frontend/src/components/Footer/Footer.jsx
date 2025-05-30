import React, { useState } from 'react';
import { FaRegEnvelope } from 'react-icons/fa';
import { BiChevronRight } from 'react-icons/bi';
import { socialIcons } from '../../assets/dummydata';

const navItems = [
  { name: 'Home', link: '/' },
  { name: 'Menu', link: '/menu' },
  { name: 'About Us', link: '/about' },
  { name: 'Contact', link: '/contact' },
];

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thanks for subscribing! We'll send updates to ${email}`);
    setEmail('');
  };

  return (
    <footer className='bg-[#052512] text-green-100 py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden'>
      <div className='max-w-7xl mx-auto relative z-10'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-12'>
          {/* Left Column */}
          <div className='space-y-6'>
            <h2 className='text-4xl sm:text-5xl md:text-5xl font-bold font-cursive text-green-500 animate-pulse'>
              M&M Meals
            </h2>
            <p className='text-green-300/80
             text-sm font-sacramento italic'>
              When culinary artistry meets doorstep convenience.<br />
              Savor handcrafted perfection, delivered with care.
            </p>

            <form onSubmit={handleSubmit} className='relative mt-4 group'>

              <div className='flex items-center gap-2 mb-2'>
                <FaRegEnvelope className='text-green-700 animate-pulse' />
                <span className='font-bold text-green-700'>Get Exclusive Offers</span>
              </div>
              <div className='relative'>
                <input
                  type='email'
                  placeholder='Enter your email..'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className='w-full px-4 py-2.5 rounded-lg bg-green-50/5 border-2 border-green-400/30 focus:outline-none focus:border-green-400 focus:ring-4 focus:ring-green-400/20 transition-all duration-300 placeholder-green-200/50 pr-24'
                  required
                />
                <button
                  type='submit'
                  className='absolute right-1 top-1 bg-gradient-to-br from-green-300 via-red-500 to-green-600 text-white px-4 py-2 rounded-full flex items-center gap-1.5 shadow-lg hover:shadow-green-400/30 overflow-hidden transition-all duration-300'
                >
                  <span className='font-bold text-sm tracking-wide transition-transform duration-300 group-hover:-translate-x-1'>
                    Join Now
                  </span>
                  <BiChevronRight className='text-xl transition-transform duration-300 group-hover:animate-spin flex-shrink-0' />
                  <span className='absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-green-50/30 to-transparent group-hover:translate-x-full transition-transform duration-700'></span>
                </button>
              </div>
            </form>
          </div>

          {/* Middle Column */}
          <div className='flex justify-center'>
            <div className='space-y-4'>
              <h3 className='text-xl font-semibold mb-4 border-l-4 border-green-400 pl-3 font-merriweather italic text-green-300'>
                Navigation
              </h3>
              <ul className='space-y-3'>
                {navItems.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.link}
                      className='flex items-center hover:text-green-400 transition-all group font-lora hover:pl-2'
                    >
                      <BiChevronRight className='mr-2 text-green-400 group-hover:animate-bounce' />
                      <span className='hover:italic'>{item.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column */}
<div className='flex justify-around md:justify-end'>
  <div className='space-y-4'>
    <h3 className='text-xl font-semibold mb-4 border-l-4 border-green-400 pl-3 font-merriweather italic text-green-300'>
      Social Contact
    </h3>
    
    {/* Social Icons */}
    <div className='flex space-x-4'>
      {socialIcons.map(({ icon: Icon, link, color, label }, idx) => (
        <a
          key={idx}
          href={link}
          target='_blank'
          rel='noopener noreferrer'
          className='text-2xl bg-green-400/10 p-3 rounded-full hover:bg-green-400/20 hover:scale-110 transition-all duration-300 relative group'
          style={{ color }}
        >
          {Icon && <Icon className='hover:scale-125 transition-transform' />}
          <span className='absolute -bottom-8 left-1/2 -translate-x-1/2 bg-green-800 text-black px-2 py-1 rounded text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity'>
            {label}
          </span>
        </a>
      ))}
    </div>
    {/* Address Section */}
    <div className='text-sm text-green-200/80 mt-4 font-lora'>
      <p className='leading-relaxed'>
        Manish Kumar<br />
        Rungta College of Engineering & Technology,<br />
        Bhilai, Chhattisgarh, India
      </p>
    </div>
  </div>
</div>
        
        </div>
        {/* Bottom Section */}
          <div className='border-t border-green-800 pt-8 mt-8 text-center'>
          <p className='text-green-400 text-lg mb-2 font-playfair'>
            &copy; 2025 Foodie. All rights reserved. | Developed by <span className='text-green-300 font-bold'>Manish Kumar</span>
          </p>
        </div>
      </div>
      
    </footer>
  );
};

export default Footer;
