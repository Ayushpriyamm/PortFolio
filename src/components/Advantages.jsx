import React from 'react'
import {motion} from 'framer-motion'

import SkillCard from './SkillCard'

const Advantages = () => {

  
  const skillset = [
    {
      skill: "React",
      value: "88%",
      bg: 'text-green-500',
      bgColour:' p-0.5 bg-gradient-to-t from-[#1F1E1D] to-green-500 rounded-[12px]',
    },
    {
      skill: "Node",
      value: "70%",
      bg: 'text-yellow-500',
      bgColour:'p-0.5  bg-gradient-to-t from-[#1F1E1D] to-yellow-500 rounded-[12px]',
    },
    {
      skill: "MongoDB",
      value: "65%",
      bg:'text-red-500',
      bgColour:'p-0.5  bg-gradient-to-t from-[#1F1E1D] to-red-500 rounded-[12px]',
    },
    {
      skill: "Express",
      value: "70%",
      bg:'text-orange-500',
      bgColour:'p-0.5 bg-gradient-to-t from-[#1F1E1D] to-orange-500 rounded-[12px]',
      
    },
    {
      skill: "WordPress",
      value: "98%",
      bg:'text-blue-500',
      bgColour:'p-0.5 bg-gradient-to-t from-[#1F1E1D] to-blue-500 rounded-[12px]',
    },
    {
      skill: "Figma",
      value: "90%",
      bg:'text-purple-500',
      bgColour:' p-0.5 bg-gradient-to-t from-[#1F1E1D] to-purple-500 rounded-[12px]',
    },
    
    
  ];

  const chunkSize = window.innerWidth <= 768 ? 2 : 3;

  const chunkedSkillset=skillset.reduce((resultArray,item,index)=>{
    const chunkIndex=Math.floor(index/chunkSize)

    if (!resultArray[chunkIndex]) {
      resultArray[chunkIndex]=[];
    }
    resultArray[chunkIndex].push(item);
    return resultArray;
  },[])

  return (
    <motion.div id="Advantages" className='bg-gradient-to-r from-black via-[#19191a] to-[#291632]'>
      <motion.div className='py-20 mx-auto flex flex-col md:flex-row justify-between  items-center p-6'>

        <motion.div 
        initial={{x:-1000}} 
        animate={{x:[-1000,0]}}
        transition={{
          duration:3,
          delay:0.4
        }}
        className='flex flex-col'>
          <div className='bg-gradient-to-t from-black via-transparent to-[#484013]  flex md:h-[500px]  flex-col bg-white bg-opacity-10 shadow-2xl drop-shadow-2xl rounded-3xl py-7 space-y-4   '>
            <h1 className='text-yellow-500 text-9xl font-extrabold text-center'>02</h1>
            <h2 className='text-white text-center text-xl font-bold p-4'>Years Of Experience</h2>

            <div className=' bg-gradient-to-l to-[#939393] from-[#1c1a1a4d] rounded-3xl  md:transform md:translate-x-1/2'>
            <div className='m-1 bg-gradient-to-l from-transparent to-[#484013] relative  items-center z-10  flex flex-row space-x-5  bg-white bg-opacity-10 shadow-2xl drop-shadow-2xl justify-around rounded-3xl  p-10  '>
              <h1 className='text-green-500 text-5xl font-extrabold text-center'>100%</h1>
              <h2 className='text-white text-center text-xl font-bold'>Client's Satisfaction</h2>
            </div>
            </div>
            

          </div>
        </motion.div>

        <div className='text-white flex flex-col md:w-1/2'>
          <h1 className='text-3xl md:text-6xl font-extrabold '>
            My Advantage
          </h1>
          <p className='py-4'>
          Let me shed light on why choosing me is your smartest move. 
          It's time to unravel the myths, debunk the misconceptions, 
          and uncover the true essence of what I bring to the table, 
          which is a transformative blend of expertise, 
          innovation, and a relentless commitment to your success.
          </p>

         {chunkedSkillset.map((chunk,chunkIndex)=>(

              <div key={chunkIndex} className='flex flex-row  py-7 md:py-10'>
              {chunk.map((skill, index) => (
                <div key={index} className="w-1/2 md:w-1/3 p-4 md:p-2"> {/* Use w-1/3 for three cards in a row */}
                  <SkillCard
                   skill={skill.skill}
                   value={skill.value}
                   bg={skill.bg}
                   bgColour={skill.bgColour}
                  />
                </div>

              ))}
              </div>
         ))}

        </div>
          
      </motion.div>
      
    </motion.div>
  )
}

export default Advantages
