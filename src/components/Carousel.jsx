import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Graphics from '../assets/recentwork.svg'

import HairBasics from '../assets/hairBasics.png'
import Abcs from '../assets/abcs.png'
import Tindog from '../assets/tindog.png'
import Shirt from '../assets/shirt.png'
import { WorkCard } from './WorkCard';





const Carousel = () => {

  const work=[
    {
      img:HairBasics,
      text:"Hair basics-World's Fastest Anti-Hairfall oil",
      link:"https://basics.hair/",
    },
    {
      img:Abcs,
      text:"ABCS INDIA-Leading financial services and solutions company.",
      link:"https://abcsindia.in/",
    },
    {
      img:Tindog,
      text:"TinDog-Meet new and interesting dogs nearby.",
      link:"https://ayushpriyamm.github.io/tindog/",
    },
    {
      img:Shirt,
      text:"3D-Tshirts-UNLEASH YOUR IMAGINATION and Define Your Own Style.",
      link:"https://customtshirtdesignbyayushpriyam.shaktivriksh.com/",
    },

  ];

    var settings = {
      dots: false,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 3000,
      autoplaySpeed: 3000,
      cssEase: "linear",
      responsive: [
        {
          breakpoint: 768, // Define the breakpoint for mobile devices
          settings: {
            slidesToShow: 1, // Set the number of slides to show on mobile
          },
        },
        // You can add more breakpoints and settings as needed
      ],
      
      };

  return (
    <div id="recent-work" className='text-white bg-gradient-to-r from-[#544c08] via-[#201f18] to-[#191919] space-y-10 p-10 md:p-20'>
      <div className='grid  md:grid-cols-2 gap-5 space-y-6'>
        <div className='flex flex-col text-center md:text-left '>
            <h2 className='text-4xl font-bold '>My Recent Work</h2>
            <p className='text-xl' >
            Allow me to present my recent work, 
            where I'll provide you with a comprehensive account of my 
            latest projects, leaving no room for mistaken ideas.
            </p>
        </div> 
        <div className=' flex justify-center mx-auto my-auto items-center backdrop-saturate-200 bg-white/30 hover:bg-green-500 rounded-[50%] w-[110px] h-[110px]'>
            <img src={Graphics} className='md:w-[95px] md:h-[95px]'  alt="" />
            </div>
      </div> 

      <div className=''>
      <Slider {...settings}>
      {work.map((item, index) => (
            <div key={index}>
              <WorkCard
               img={item.img} 
               text={item.text} 
               link={item.link}
               />
            </div>
          ))}
        </Slider>
      </div>
      
    </div>
  )
}

export default Carousel