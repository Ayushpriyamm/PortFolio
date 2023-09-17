import React from 'react';

import ButtonGreen from './ButtonGreen';
import HeroImg from '../assets/heroImg.jpg';
import PsImg from '../assets/PsImg.svg';
import MyImg from'../assets/heroImg3.png'

const HeroSection = () => {
  return (
    <div className='bg-radial-gradient flex flex-col md:flex md:flex-row mx-auto justify-between  items-center p-6 md:py-20 '>
        
      <div className='flex flex-col text-center md:text-left'>
        <h1 className='text-white text-5xl md:text-7xl font-bold md:font-extrabold py-4'>I am Ayush</h1>
        <h1 className='text-white text-3xl md:text-4xl font-bold py-4'>Web Developer</h1>
        <p className='text-white text-xl font-semibold py-2'>
          Must Explain To How All This Mistaken Idea Denouncing Pleasure Pain The System And Expound The Actua.
        </p>

        <div className='py-6'>
          <ButtonGreen ButtonName="Hire me" />
        </div>
        
      </div>

      <div className='flex justify-center items-center'>
        <div className='relative'>
          <img className='rounded-[50%]   z-40' src={MyImg} alt='' />
            <div className='z-50 absolute left-0 top-[20%] w-[110px] h-[110px] p-[20px] bg-white rounded-[25px] md:top-[15%] md:w-[95px] md:h-[95px] md:p-[15px] md:rounded-[15px] col:top-[10%] col:w-[70px] col:h-[70px] col:p-[15px] col:rounded-[15px] floating-item'>
              <img src={PsImg} alt='' />
            </div>
            <div className='z-50 absolute right-0 top-[20%] w-[100px] h-[100px] p-[20px] bg-white rounded-[25px] md:top-[15%] md:w-[95px] md:h-[95px] md:p-[15px] md:rounded-[15px] col:top-[10%] col:w-[70px] col:h-[70px] col:p-[15px] col:rounded-[15px] floating-item'>
              <img src={PsImg} alt='' />
            </div>
            <div className='z-50 absolute right-0 bottom-0 w-[100px] h-[100px] p-[20px] bg-white rounded-[25px] md:bottom-[15%] md:w-[95px] md:h-[95px] md:p-[15px] md:rounded-[15px] col:top-[10%] col:w-[70px] col:h-[70px] col:p-[15px] col:rounded-[15px] floating-item'>
              <img src={PsImg} alt='' />
            </div>
            <div className='z-50 absolute left-0 bottom-0 w-[100px] h-[100px] p-[20px] bg-white rounded-[25px] md:bottom-[15%] md:w-[95px] md:h-[95px] md:p-[15px] md:rounded-[15px] col:top-[10%] col:w-[70px] col:h-[70px] col:p-[15px] col:rounded-[15px] floating-item'>
              <img src={PsImg} alt='' />
            </div>
          
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
