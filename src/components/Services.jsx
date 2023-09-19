import React,{useState} from 'react'
import ServiceButtom from './ServiceButtom'
import ServiceCard from './ServiceCard';
import Graphics from '../assets/vector.png'


const Services = () => {
  
const data=[
    {
      tab:"Design",

      img1:Graphics,
      titleCard1:"Graphic Design",
      description1:"Explain to you how all this mistaken idea of denouncing pleasure born and give you complete account the system.",     
      
      img2:Graphics,
      titleCard2:"Brand Identity",
      description2:"Explain to you how all this mistaken idea of denouncing pleasure born and give you complete account the system.",
      
      img3:Graphics,
      titleCard3:"UI/UX Design",
      description3:"Explain to you how all this mistaken idea of denouncing pleasure born and give you complete account the system.",

    },
    {
      tab:"Development",

      img1:Graphics,
      titleCard1:"Web Development",
      description1:"Explain to you how all this mistaken idea of denouncing pleasure born and give you complete account the system.",
      
      img2:Graphics,
      titleCard2:"App Development",
      description2:"Explain to you how all this mistaken idea of denouncing pleasure born and give you complete account the system.",
      
      img3:Graphics,
      titleCard3:"Softwere Development",
      description3:"Explain to you how all this mistaken idea of denouncing pleasure born and give you complete account the system.",

      
    },
    {
      tab:"Marketing",

      img1:Graphics,
      titleCard1:"Social Media Marketing",
      description1:"Explain to you how all this mistaken idea of denouncing pleasure born and give you complete account the system.",
      
      img2:Graphics,
      titleCard2:"Digital Marketing",
      description2:"Explain to you how all this mistaken idea of denouncing pleasure born and give you complete account the system.",
      
      img3:Graphics,
      titleCard3:"Email Marketing",
      description3:"Explain to you how all this mistaken idea of denouncing pleasure born and give you complete account the system.",

      
    },
  ];
  const [selectedTab,setSelectedTab]=useState(data[0].tab);

// this data.find method Filter the data to get the content for the selected tab
/*
  items represent the each object inside the array 
  when the value of selctedTab is == value of item.tab then it return the whole object inside array
  value of selected tab is managed by handleClick function
  which is passed as props in service button component 
*/ 
 const selectedData = data.find(function (item) {
    return item.tab==selectedTab;
  })
 console.log(selectedData)

  const handleTabClick=(tab)=>{
    setSelectedTab(tab)
  };

  return (
    <div>
        <div className=' bg-gradient-to-r from-[#343116] via-[#201f18] to-[#191919] text-white text-center flex flex-col  p-6'>

            <div className='text-3xl md:text-6xl font-bold md:font-extrabold py-5 px-10'>
                <h1>Popular Services</h1>
            </div>
            <div className='p-10'>
                <p>Must explain to yotu how all this mistaken idea of denouncing 
                  pleasure born and give you a complete account the system</p>
            </div>

            <div className='flex flex-col items-center justify-center w-full' >
              <div className='grid grid-cols-3 gap-4 flex py-10'>
                {data.map((btn,index)=>(
                  <ServiceButtom
                    key={index}
                    btn={btn.tab}
                    onClick={()=>handleTabClick(btn.tab)}
                    active={selectedTab === btn.tab}
                  />
                ))}
              </div>
            </div>

            <div className=' flex grid gap-4  md:grid-cols-3 md:flex-row justify-center item-center md:space-x-4  '>
                  <ServiceCard
                  title={selectedData.titleCard1}
                  description={selectedData.description1}
                  img={selectedData.img1}
                  />
                  <ServiceCard
                  title={selectedData.titleCard2}
                  description={selectedData.description2}
                  img={selectedData.img2}
                  
                  />
                  <ServiceCard
                  title={selectedData.titleCard3}
                  description={selectedData.description3}
                  img={selectedData.img3}
                  />
            </div>
                  
        </div>
          
    </div>
  )
}

export default Services