import React,{useState} from 'react'
import { motion } from 'framer-motion';
import ServiceButtom from './ServiceButtom'
import ServiceCard from './ServiceCard';
import Graphics from '../assets/graphics.svg'
import Brand from '../assets/brand.svg'
import UI from '../assets/UI.svg'
import WebDev from '../assets/webdev.svg'
import AppDev from '../assets/appdev.svg'
import SoftDev from '../assets/softwaredev.svg'
import Social from '../assets/social.svg'
import Digital from '../assets/digitalM.svg'
import Email from '../assets/email.svg'


const Services = () => {
  
const data=[
    {
      tab:"Design",

      id:"design",

      img1:Graphics,
      titleCard1:"Graphic Design",
      description1:"Unleash visual storytelling with our graphic design expertise. We'll demystify misconceptions and show you how stunning visuals can enhance your brand.",     
      
      img2:Brand,
      titleCard2:"Brand Identity",
      description2:"Craft a powerful brand identity. We'll debunk branding myths and provide a complete system for creating a memorable brand.",
      
      img3:UI,
      titleCard3:"UI/UX Design",
      description3:"Elevate user experiences with our UI/UX design. We'll dispel design myths and guide you in creating intuitive, engaging interfaces.",

    },
    {
      tab:"Development",

      id:"development",

      img1:WebDev,
      titleCard1:"Web Development",
      description1:"Unlock the potential of web development as we demystify common misconceptions and provide a complete system for building dynamic and engaging websites.",
      
      img2:AppDev,
      titleCard2:"App Development",
      description2:"Dive into app development, where we dispel myths and offer a comprehensive system for creating user-friendly and innovative mobile applications.",
      
      img3:SoftDev,
      titleCard3:"Softwere Development",
      description3:"Discover the world of software development. We'll clarify common misconceptions and provide a  powerful and efficient software solutions.",

      
    },
    {
      tab:"Marketing",

      id:"marketing",

      img1:Social,
      titleCard1:"Social Media Marketing",
      description1:"We'll unravel common misconceptions and provide a comprehensive system for boosting your online presence through social platforms.",
      
      img2:Digital,
      titleCard2:"Digital Marketing",
      description2:"Dive into the world of digital marketing. We'll demystify misconceptions and offer a complete framework for enhancing your online reach and engagement.",
      
      img3:Email,
      titleCard3:"Email Marketing",
      description3:"Unlock the potential of email marketing. We'll clarify misconceptions and provide a complete system for leveraging this powerful tool to connect with your audience.",

      
    },
  ];
  const [selectedTab,setSelectedTab]=useState(data[0].tab);

// this data.find method Filter the data to get the content for the selected tab
/*
  items represent the each object inside the array 
  when the value of selctedTab is == value of item.tab then 
  it return the whole object inside array
  value of selected tab is managed by handleClick function
  which is passed as props in service button component 
*/ 
 const selectedData = data.find(function (item) {
    return item.tab==selectedTab;
  })
 

  const handleTabClick=(tab)=>{
    setSelectedTab(tab)
  };

  return (
    <motion.div
    
    
    >
    <div id='Services'>
        <div className='py-20 bg-gradient-to-r from-[#343116] via-[#201f18] to-[#191919] text-white text-center flex flex-col  p-6'>

            <div className='text-3xl md:text-6xl font-bold md:font-extrabold py-5 px-10'>
                <h1>Popular Services</h1>
            </div>
            <div className='p-6'>
                <p>
                Let's dive into what makes my services stand out in the crowded digital landscape. 
                I'll break down the core offerings that go beyond the mistaken idea of ordinary and 
                provide you with a comprehensive understanding of the value they bring.
                </p>
            </div>

            <div className='flex flex-col items-center justify-center w-full' >
              <div className='grid grid-cols-3 gap-4 flex py-10'>
                {data.map((btn,index)=>(
                  <ServiceButtom
                    key={index}
                    id={btn.id}
                    btn={btn.tab}
                    onClick={()=>handleTabClick(btn.tab)}
                    active={selectedTab === btn.tab}
                  />
                ))}
              </div>
            </div>

            <motion.div 
              
              className=' flex grid gap-4  md:grid-cols-3 md:flex-row justify-center item-center md:space-x-4  '>
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 0 }}
                    transition={{ duration:0.5,delay:0.4}}
                    whileInView={{scale:1, opacity: 1 }}
                  >
                    <ServiceCard
                    title={selectedData.titleCard1}
                    description={selectedData.description1}
                    img={selectedData.img1}
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 0 }}
                    transition={{ duration:0.5,delay:0.4}}
                    whileInView={{scale:1, opacity: 1 }}
                  >
                    <ServiceCard
                    title={selectedData.titleCard2}
                    description={selectedData.description2}
                    img={selectedData.img2}
                  />
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 0 }}
                    transition={{ duration:0.5,delay:0.4}}
                    whileInView={{scale:1, opacity: 1 }}
                  >
                  <ServiceCard
                    title={selectedData.titleCard3}
                    description={selectedData.description3}
                    img={selectedData.img3}
                    />
                  </motion.div>
            </motion.div>
                  
        </div>
          
    </div>
    </motion.div>
  )
}

export default Services