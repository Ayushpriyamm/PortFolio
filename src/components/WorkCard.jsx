import React from 'react'

export const WorkCard = ({img,text,link}) => {
  return (
    <div>
        <a href={link}>
            <div className='flex flex-col p-3 '>
                <div className='bg-[#1F1E1D]  flex p-5 hover:p-3'>
                    <img className=' w-[400px] h-[500px]' src={img} alt="" />
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
