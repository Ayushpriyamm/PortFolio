import React from 'react'

const SkillCard = ({skill,value}) => {
  return (
    <div >
        <div className='bg-[#1F1E1D] ring-2 ring-purple-500 ring-offset-4 ring-offset-slate-50 dark:ring-offset-purple-900 rounded-[12px] max-w-[120px] md:max-w-[150px] max-h-[120px] md:max-h-[150px] flex flex-col items-center text-center space-y-2 md:space-y-3 p-6 md:p-10'>
            <h1 className='text-4xl md:text-4xl font-bold'>
                {value}
            </h1>
            <h1 className='text-xl md:text-2xl font-semibold'>
                {skill}
            </h1>

        </div>
    </div>
  )
}

export default SkillCard