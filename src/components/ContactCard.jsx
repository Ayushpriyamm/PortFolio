import React from 'react'

const ContactCard = ({img,category,value}) => {
  return (
    <div>
        <div className='text-center hover:border hover:border-[#ffffff] rounded-lg text-2xl font-bold p-5 bg-[#1F1E1D] bg-opacity-50 text-white flex flex-col  justify-around items-center space-y-10  md:space-y-10 '>
            <div >
                {value}
            </div>
            <div>
                <img src={img} alt="" />
            </div>
            <div className='text-[16px] font-semibold text-yellow-500'>
                {category}
            </div>
           

        </div>
    </div>
  )
}

export default ContactCard