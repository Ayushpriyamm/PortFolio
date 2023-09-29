import React from 'react'

export const WorkCard = ({img,text,link}) => {
  return (
    <div>
        <a href={link}>
            <div className='flex flex-col p-3 '>
                <div className='bg-[#1F1E1D]  flex p-3 hover:p-2'>
                    <img className=' w-[300px] h-[400px] flex mx-auto' src={img} alt="" />
                </div>
                <div className='p-5 ' >
                    <h2 className='text-white text-2xl'>
                        {text}
                    </h2>
                </div>
            </div>
        </a>
    </div>
  )
}
