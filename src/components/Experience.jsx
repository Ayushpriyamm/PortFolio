import React from 'react'
import Scyara from '../assets/scyara.png'
import Oasis from '../assets/oasis .png'

import ExperinceCard from './ExperinceCard';

const Experience = () => {
    const exp=[
        {
            year:"2022-2023",
            logo:Scyara,
            role:"web Developer",
            city:"Delhi,India"
        },
        {
            year:"2022-2022",
            logo:Oasis,
            role:"web Developer",
            city:"Delhi,India"
        },
        
    ];
  return (
    <div className='bg-radial-gradient2 py-10'>
        <div id='Experience' className='flex flex-col py-10  space-y-10  '>
            <div className='flex flex-col text-white text-center space-y-10'>
                <h1 className='text-5xl font-bold'>
                    My Work Experience
                </h1>
                <p className='px-3  '>
                Allow me to share my journey and professional expertise. Together, we'll debunk the myths and provide you with a complete overview of my career, skills, and accomplishments.
                </p>
            </div>
            <div className='space-y-5 p-10'>
                {exp.map((card,index)=>(
                    <ExperinceCard
                        key={index}
                        year={card.year}
                        logo={card.logo}
                        role={card.role}
                        city={card.city}

                    />
                ))}
            </div>
        </div>
    </div>
  )
}

export default Experience