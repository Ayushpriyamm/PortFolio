import React from 'react';
import ButtonGreen from './ButtonGreen';
import HeroImg from '../assets/heroImg.jpg';
import PsImg from '../assets/PsImg.svg';
import MyImg from'../assets/myimg.png'

const HeroSection = () => {
  return (
    <div className='flex flex-col md:flex md:flex-row mx-auto justify-between items-center p-6 py-20 
    bg-gradient-to-r from[#4cd964] via-[#5ac8fa] via-[#007aff] via-[#34aadc] via-[#5856d6] to-[#ff2d55]'>
      <div className='flex flex-col text-center'>
        <h1 className='text-7xl font-extrabold py-4'>I am Ayush</h1>
        <h1 className='text-4xl font-bold py-4'>Web Developer</h1>
        <p className='text-2xl font-semibold py-2'>
          Must Explain To How All This Mistaken Idea Denouncing Pleasure Pain The System And Expound The Actua.
        </p>

        <div className='py-6'>
          <ButtonGreen ButtonName="Hire me" />
        </div>
        
      </div>

      <div className='flex justify-center items-center'>
        <div className='relative  rounded-[50%]  z-10 max-w-[500px] lg:max-w-[450px]  lg:top-[54%] 2xl:right-[80px] xl:right-[30px] lg:right-[50px] md:top-[74%] md:mx-auto md:right-auto md:left-1/2 md:-translate-x-1/2 sm:top-[75%] sm:w-[400px] sm:h-[400px]  sm:m-0 col:top-[75%] col:w-[300px] col:h-[300px]'>
          
          <img className='rounded-[50%]' src={HeroImg} alt='' />
            <div className='absolute left-0 top-[20%] w-[110px] h-[110px] p-[20px] bg-white rounded-[25px] md:top-[15%] md:w-[95px] md:h-[95px] md:p-[15px] md:rounded-[15px] col:top-[10%] col:w-[70px] col:h-[70px] col:p-[15px] col:rounded-[15px] floating-item'>
              <img src={PsImg} alt='' />
            </div>
            <div className='absolute right-0 top-[20%] w-[110px] h-[110px] p-[20px] bg-white rounded-[25px] md:top-[15%] md:w-[95px] md:h-[95px] md:p-[15px] md:rounded-[15px] col:top-[10%] col:w-[70px] col:h-[70px] col:p-[15px] col:rounded-[15px] floating-item'>
              <img src={PsImg} alt='' />
            </div>
            <div className='absolute right-0 bottom-0 w-[110px] h-[110px] p-[20px] bg-white rounded-[25px] md:bottom-[15%] md:w-[95px] md:h-[95px] md:p-[15px] md:rounded-[15px] col:top-[10%] col:w-[70px] col:h-[70px] col:p-[15px] col:rounded-[15px] floating-item'>
              <img src={PsImg} alt='' />
            </div>
            <div className='absolute left-0 bottom-0 w-[110px] h-[110px] p-[20px] bg-white rounded-[25px] md:bottom-[15%] md:w-[95px] md:h-[95px] md:p-[15px] md:rounded-[15px] col:top-[10%] col:w-[70px] col:h-[70px] col:p-[15px] col:rounded-[15px] floating-item'>
              <img src={PsImg} alt='' />
            </div>
          
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
