import React from 'react'

const ServiceCard = ({ title, description,img }) => {
  return (
    <div>
        <div className='p-10 h-full text-white flex text-center items-center flex-col bg-white bg-opacity-10 shadow-2xl rounded-3xl '>
            <div className=' flex justify-center items-center backdrop-saturate-200 bg-white/30 hover:bg-yellow-500 rounded-[50%] w-[110px] h-[110px]'>
            <img src={img} className='md:w-[95px] md:h-[95px]'  alt="" />
            </div>
            <h2 className=' text-3xl font-bold p-4'>
                {title}
            </h2>
            <p className='p-4'>
            {description}
            </p>
            

        </div>
    </div>
  )
}

export default ServiceCard