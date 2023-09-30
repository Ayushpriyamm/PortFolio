import React from 'react'
import { motion } from 'framer-motion'

const ExperinceCard = ({year,logo,role,city}) => {
  return (
    <motion.div
    initial={{ opacity: 0, scale: 0 }}
    animate={{ opacity: 1, scale: 0 }}
    transition={{ duration:0.5,delay:0.4}}
    whileInView={{scale:1, opacity: 1 }}
    >
        <div className='hover:border hover:border-[#ffffff] rounded-lg text-3xl font-bold p-10 bg-[#1F1E1D] bg-opacity-90 text-white flex flex-col md:flex-row justify-around items-center space-y-10  md:space-y-0 '>
            <div >
                {year}
            </div>
            <div  >
                <img className='rounded-[50%]' src={logo} alt="" />
            </div>
            <div className='text-center'>
                {role}
            </div>
            <div>
                {city}
            </div>

        </div>
    </motion.div>
  )
}

export default ExperinceCard