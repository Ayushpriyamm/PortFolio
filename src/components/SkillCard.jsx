import React from 'react'

const SkillCard = ({skill,value,bg,bgColour}) => {

  ;
  return (
    <div className={`${bgColour}`} >
        <div className=' bg-[#1F1E1D]  rounded-[12px] max-w-[120px] md:max-w-full max-h-[120px] md:max-h-[150px] flex flex-col justify-center items-center text-center space-y-2 md:space-y-3 p-6 md:p-10'>
            <h1 className='text-4xl md:text-4xl font-bold'>
                {value}
            </h1>
            <h1 className={`text-xl md:text-2xl font-semibold ${bg}`}>
                {skill}
            </h1>

        </div>
    </div>
  )
}

export default SkillCard