import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ButtonGreen from './ButtonGreen';
import NavImg from '../assets/navImg.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Define animation variants for the menu
  const menuVariants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: '-100%' },
  };

  return (
    <div className='  relative flex flex-row p-6 mx-auto md:flex md:flex-row md:justify-between md:items-center justify-between items-center'>
      <div className='md:hidden  '>
        <button onClick={toggleMenu} className='rounded-[50%] p-1 bg-green-500'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='w-[30px] h-[30px] justify-center'
            fill='none'
            viewBox='0 0 24 24'
            stroke='white'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={1}
              d='M4 6h16M4 12h16M4 18h16'
            />
          </svg>

          <motion.div
            initial='closed'
            animate={isMenuOpen ? 'open' : 'closed'}
            transition={{
              duration:0.5
            }}
            variants={menuVariants}
            className={`absolute px-5 top-0 rounded-lg  left-0 bg-white  h-screen text-white flex flex-col space-y-2 z-40 ${isMenuOpen ? 'block' : 'hidden'}`}
          >
         <button
            onClick={closeMenu}
            className=' self-start  mt-8 p-2 rounded-full bg-green-500  text-white'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='w-5 h-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='white'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M6 18L18 6M6 6l12 12'
              />
            </svg>
          </button> 
        
        <div className='flex flex-col py-[50%] space-y-6 text-white'>
          
          <div className='w-full bg-green-500 hover:green-700 border-2 border-yellow-500 p-2 rounded-lg'>
          <a href='#Home' className='text-2xl  items-center font-bold' >
            Home
          </a>
          </div>

          <div  className='w-full bg-green-500 hover:green-700 border-2 border-yellow-500 p-2 rounded-lg'>
          <a href='#Advantages' className='text-2xl p-6 items-center font-bold'>
            About
          </a>
          </div>

          <div className='w-full bg-green-500 hover:green-700 border-2 border-yellow-500 p-2 rounded-lg'>
          <a href='#Services' className='text-2xl p-6  items-center font-bold'>
            Service
          </a>
          </div>

          <div className='w-full bg-green-500 hover:green-700 border-2 border-yellow-500 p-2 rounded-lg'>
          <a href='#Contact' className='text-2xl p-6 items-center font-bold'>
            Contact
          </a>
          </div>
          

        </div>
       

        </motion.div>
        </button>

        
      </div>

      <div className='flex flex-row '>
        <a href="/" className='flex flex-row  items-center space-x-4'>
          <img src={NavImg} alt="logo-img" />
          <h2 className='text-white text-2xl md:text-3xl font-bold md:font-extrabold'> Ayush</h2>
        </a>
      </div>

      <div className='md:flex flex flex-row space-x-6 font-semibold text-white '>
        <div className='hidden md:block text-xl'>
          <a href="/" className='border-b-4 border-green-500 hover:rounded hover '>Home</a>
        </div>
        <div className='hidden md:block text-xl'>
          <a href="#Advantages" className='border-b-4 border-transparent hover:border-b-4 hover:rounded hover:border-green-500'>About</a>
        </div>
        <div className=' hidden md:block text-xl'>
          <a href="#Services" className='border-b-4 border-transparent hover:border-b-4 hover:rounded hover:border-green-500'>Service</a>
        </div>
        <div className='hidden md:block text-xl'>
          <a href="#Contact" className='border-b-4 border-transparent hover:border-b-4 hover:rounded hover:border-green-500'>Contact</a>
        </div>
      </div>

      <div className='hidden md:block text-white'>
        <ButtonGreen ButtonName="Resume"  href="https://drive.google.com/file/d/1zwIh77qiH1yPiTb9H1oCLn4qxwemi5kf/view?usp=drive_link" target="_blank"></ButtonGreen>
      </div>

      <div className='md:hidden'>
      <a  href="https://drive.google.com/file/d/1zwIh77qiH1yPiTb9H1oCLn4qxwemi5kf/view?usp=drive_link" >
        <button className='text-white bg-green-500 hover:bg-green-600 rounded-full p-2   '>
        Resume &rarr;
      </button>
      </a>
    </div>

    </div>
  );
}

export default Navbar;
