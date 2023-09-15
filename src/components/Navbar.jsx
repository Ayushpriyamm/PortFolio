import React from 'react'
import ButtonGreen from './ButtonGreen'

const Navbar = () => {
  return (
    <div className='flex flex-row p-6 mx-auto justify-between items-center'>
        <div className='flex flex-row space-x-4'>
            <a href="/" className='flex flex-row space-x-4'>
            <img src="logo" alt="logo-img" />
            <h2 className='text-5xl font-extrabold'> Ayush</h2>
            </a>
            
        </div>

        <div className='flex flex-row space-x-6 font-semibold '>
            <div className='text-xl'>
                <a href="/" className='border-b-4 border-green-500 hover:rounded hover '>Home</a>
            </div>
            <div className='text-xl'>
                <a href="/" className='border-b-4 border-transparent hover:border-b-4 hover:rounded hover:border-green-500'>About</a>
            </div>
            <div className='text-xl'>
                <a href="/" className='border-b-4 border-transparent hover:border-b-4 hover:rounded hover:border-green-500'>Service</a>
            </div>
            <div className='text-xl'>
                <a href="/" className='border-b-4 border-transparent hover:border-b-4 hover:rounded hover:border-green-500'>Contact</a>
            </div>

        </div>
        
        <div>
            <ButtonGreen ButtonName="Resume"></ButtonGreen>
        </div>
    </div>
  )
}

export default Navbar