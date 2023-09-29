import React from 'react'
import { motion } from 'framer-motion'

const ContactCard = ({img,category,value}) => {
  return (
    <div>
        <motion.div
        
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
        className='mx-auto text-center hover:border hover:border-[#ffffff] rounded-lg text-xl font-bold p-3 bg-[#1F1E1D]  text-white flex flex-col  justify-around  justify-center items-center space-y-10  md:space-y-10 '>
            <div >
                {value}
            </div>
            <div>
                <img src={img} alt="" />
            </div>
            <div className='text-[16px] font-semibold text-yellow-500'>
                {category}
            </div>
           

        </motion.div>
    </div>
  )
}

export default ContactCard