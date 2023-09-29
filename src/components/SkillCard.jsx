import React from 'react'
import { motion } from 'framer-motion';

const SkillCard = ({skill,value,bg,bgColour}) => {

  ;
  return (

    <motion.div
          whileHover={{ scale: 1.2, rotate: 90 }}
            whileTap={{
              scale: 0.8,
              rotate: -90,
              borderRadius: "100%"
          }}
          initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 0 }}
              transition={{
                 delay:0.4,
                 duration: 0.3,
                 ease: [0, 0.71, 0.2, 1.01],
                 scale: {
                  type: "spring",
                  damping: 5,
                  stiffness: 100,
                  restDelta: 0.001,
                 }
                }}
              whileInView={{scale:1, opacity: 1 }}
        
        >
    <div className={`${bgColour}`} >
      
        <div className=' bg-[#1F1E1D] mx-auto  rounded-[12px] max-w-[140px] md:max-w-full max-h-[140px] md:max-h-[150px] flex flex-col justify-center items-center text-center space-y-2 md:space-y-3 p-6 md:p-10'>
            <h1 className='text-4xl md:text-4xl font-bold'>
                {value}
            </h1>
            <h1 className={`text-xl md:text-2xl font-semibold ${bg}`}>
                {skill}
            </h1>

        </div>
       
    </div>
    </motion.div>
  )
}

export default SkillCard