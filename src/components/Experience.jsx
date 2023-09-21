import React from 'react'
import Companylogo from '../assets/navImg.png'
import ExperinceCard from './ExperinceCard';

const Experience = () => {
    const exp=[
        {
            year:"2022-2023",
            logo:Companylogo,
            role:"web Developer",
            city:"Delhi,India"
        },
        {
            year:"2022-2023",
            logo:Companylogo,
            role:"web Developer",
            city:"Delhi,India"
        },
        {
            year:"2022-2023",
            logo:Companylogo,
            role:"web Developer",
            city:"Delhi,India"
        },
        {
            year:"2022-2023",
            logo:Companylogo,
            role:"web Developer",
            city:"Delhi,India"
        },
    ];
  return (
    <div className='bg-radial-gradient2 py-10'>
        <div className='flex flex-col py-10  space-y-10  '>
            <div className='flex flex-col text-white text-center space-y-10'>
                <h1 className='text-5xl font-bold'>
                    My Work Experience
                </h1>
                <p className='px-3 text-xl font-semibold'>
                Must explain to yotu how all this mistaken 
                idea of denouncing pleasure born and give you a complete account the system
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