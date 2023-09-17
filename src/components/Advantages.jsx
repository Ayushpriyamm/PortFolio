import React from 'react'
import SkillCard from './SkillCard'

const Advantages = () => {
  const skillset = [
    {
      skill: "React",
      value: "88%",
    },
    {
      skill: "Node",
      value: "70%",
    },
    {
      skill: "MongoDB",
      value: "65%",
    },
    {
      skill: "Exress",
      value: "70%",
    },
    {
      skill: "WordPress",
      value: "98%",
    },
    {
      skill: "Figma",
      value: "90%",
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
    <div>
      <div className='bg-gradient-to-r from-black via-[#19191a] to-[#291632] mx-auto flex flex-col md:flex-row justify-between  items-center p-6'>

        <div className='flex flex-col'>
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
        </div>

        <div className='text-white flex flex-col md:w-1/2'>
          <h1 className='text-3xl md:text-6xl font-extrabold '>
            My Advantage
          </h1>
          <p className='py-4'>
            Must explain to you how all this mistaken idea of denouncing pleasure
            praising pain was born and I will give you a complete account the
            system and expound the actual and praising pain was born.
          </p>

         {chunkedSkillset.map((chunk,chunkIndex)=>(

              <div key={chunkIndex} className='flex flex-row  py-7 md:py-10'>
              {chunk.map((skill, index) => (
                <div key={index} className="w-1/2 md:w-1/3 p-4 md:p-2"> {/* Use w-1/3 for three cards in a row */}
                  <SkillCard skill={skill.skill} value={skill.value} />
                </div>

              ))}
              </div>
         ))}

        </div>

      </div>
    </div>
  )
}

export default Advantages
