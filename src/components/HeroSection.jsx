import React from 'react';
import {motion} from 'framer-motion'


import ButtonGreen from './ButtonGreen';
import Figma from '../assets/figma-icon.svg';
import PsImg from '../assets/PsImg.svg';
import MongoDB from '../assets/shield.svg';
import ReactIcon from '../assets/react-js-icon.svg'
import MyImg from'../assets/heroImg5.png'



const HeroSection = () => {
  
  return (
    <motion.div className='py-20 bg-radial-gradient  flex flex-col md:flex md:flex-row mx-auto justify-between  items-center p-6 md:py-20  '
      
    >
        
      <div className='flex flex-col text-center md:text-left md:w-[850px]'>
      <motion.h1
        initial={{x:-1000}} 
        animate={{x:[-1000,400,0]}}
        transition={{
          duration:3,
          delay:0.4
        }}
        className='text-yellow-500 text-3xl md:text-5xl font-bold md:font-extrabold py-4'>
          Hello,
      </motion.h1>

        <h1 className='text-white text-5xl md:text-7xl font-bold md:font-extrabold py-4'>I am Ayush</h1>
        <h1 className='text-green-500 text-3xl md:text-4xl font-bold py-4'>Web Developer</h1>
        <p className='text-white text-xl font-semibold py-2'>
        Welcome to my creative playground, where innovation meets imagination. I'm your digital alchemist, turning dull ideas into web magic that would impress even Harry Potter!
        </p>

        <div className='py-6'>
          <ButtonGreen ButtonName="Hire me" href="#Contact"  />
        
        </div>
        
      </div>

      <div className='flex justify-center items-center md:w-530'>
        <div className='relative'>
          <img className='rounded-[50%]   z-40' src={MyImg} alt='' />
            <div className='z-50 absolute left-0 top-[20%] w-[110px] h-[110px] p-[20px] bg-white bg-opacity-30 rounded-[25px] md:top-[15%] md:w-[95px] md:h-[95px] md:p-[15px] md:rounded-[15px] col:top-[10%] col:w-[70px] col:h-[70px] col:p-[15px] col:rounded-[15px] floating-item'>
              <img src={PsImg} alt='' />
            </div>
            <div className='z-50 absolute right-0 top-[20%] w-[100px] h-[100px] p-[20px] bg-white bg-opacity-30 rounded-[25px] md:top-[15%] md:w-[95px] md:h-[95px] md:p-[15px] md:rounded-[15px] col:top-[10%] col:w-[70px] col:h-[70px] col:p-[15px] col:rounded-[15px] floating-item'>
              <img src={Figma} alt='' />
            </div>
            <div className='z-50 absolute right-0 bottom-0 w-[100px] h-[100px] p-[20px] bg-black bg-opacity-30 rounded-[25px] md:bottom-[15%] md:w-[95px] md:h-[95px] md:p-[15px] md:rounded-[15px] col:top-[10%] col:w-[70px] col:h-[70px] col:p-[15px] col:rounded-[15px] floating-item'>
              <img src={ReactIcon} alt='' />
            </div>
            <div className='z-50 absolute left-0 bottom-0 w-[100px] h-[100px] p-[20px] bg-white bg-opacity-30 rounded-[25px] md:bottom-[15%] md:w-[95px] md:h-[95px] md:p-[15px] md:rounded-[15px] col:top-[10%] col:w-[70px] col:h-[70px] col:p-[15px] col:rounded-[15px] floating-item'>
              <img src={MongoDB} alt='' />
            </div>
          
        </div>
        
      </div>
      
    </motion.div>
  );
};

export default HeroSection;
