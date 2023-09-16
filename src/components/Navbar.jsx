import React,{useState} from 'react'
import ButtonGreen from './ButtonGreen'
import NavImg from '../assets/navImg.png'
const Navbar = () => {

    const [isMenuOpen,setIsMenueOpen]=useState(false);

    const toggleMenu=()=>{
        setIsMenueOpen(!isMenuOpen)
    }


  return (
    <div className='flex flex-row p-6 mx-auto md:flex md:flex-row md:justify-between md:items-center justify-between items-center'>
        <div className='md:hidden'>
        <button onClick={toggleMenu} className='text-green hover:text-green-500'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-6 w-6'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={4}
              d='M4 6h16M4 12h16M4 18h16'
            />
          </svg>
        </button>
      </div>
      {isMenuOpen && (
        <div className='md:hidden'>
          <div className='flex flex-col space-y-2'>
            <a href='/' className='text-xl'>Home</a>
            <a href='/' className='text-xl'>About</a>
            <a href='/' className='text-xl'>Service</a>
            <a href='/' className='text-xl'>Contact</a>
          </div>
        </div>
      )}

        <div className='flex flex-row space-x-4'>
            <a href="/" className='flex flex-row space-x-4'>
            <img src={NavImg} alt="logo-img" />
            <h2 className='text-5xl font-extrabold'> Ayush</h2>
            </a>
            
        </div>

        

      

        <div className='md:flex flex flex-row space-x-6 font-semibold '>
            <div className='hidden md:block text-xl'>
                <a href="/" className='border-b-4 border-green-500 hover:rounded hover '>Home</a>
            </div>
            <div className='hidden md:block text-xl'>
                <a href="/" className='border-b-4 border-transparent hover:border-b-4 hover:rounded hover:border-green-500'>About</a>
            </div>
            <div className=' hidden md:block text-xl'>
                <a href="/" className='border-b-4 border-transparent hover:border-b-4 hover:rounded hover:border-green-500'>Service</a>
            </div>
            <div className='hidden md:block text-xl'>
                <a href="/" className='border-b-4 border-transparent hover:border-b-4 hover:rounded hover:border-green-500'>Contact</a>
            </div>

        </div>
        
        <div className='hidden md:block' >
            <ButtonGreen ButtonName="Resume"></ButtonGreen>
        </div>
    </div>
  )
}

export default Navbar