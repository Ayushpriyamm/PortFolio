import React from 'react'

const ExperinceCard = ({year,logo,role,city}) => {
  return (
    <div>
        <div className='hover:border hover:border-[#ffffff] rounded-lg text-3xl font-bold p-10 bg-[#1F1E1D] bg-opacity-90 text-white flex flex-col md:flex-row justify-around items-center space-y-10  md:space-y-0 '>
            <div >
                {year}
            </div>
            <div>
                <img src={logo} alt="" />
            </div>
            <div>
                {role}
            </div>
            <div>
                {city}
            </div>

        </div>
    </div>
  )
}

export default ExperinceCard