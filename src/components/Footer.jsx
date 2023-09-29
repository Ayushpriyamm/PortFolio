import React from 'react'
import NavImg from '../assets/navImg.png'
import {FaInstagram,FaLinkedinIn,FaTwitter,FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='bg-radial-gradient3 text-white'>
        <div className='flex flex-col md:grid md:grid-cols-3 md:gap-4 mx-auto md:p-20  p-10 '>

            <div className='flex flex-col mx-auto font-bold py-4 space-y-4 '>

                <div className='flex flex-row  '>
                  <a href="/" className='flex flex-row  items-center  px-10'>
                    <img src={NavImg} alt="logo-img" />
                    <h2 className='text-3xl md:text-5xl font-bold md:font-extrabold'> Ayush</h2>
                  </a>
                </div>

                <div>
                    <p>
                    Welcome and open yourself 
                    to your truest love this year with us! With the Release Process
                    </p>
                </div>
                <div className='flex flex-row space-x-4'>
                    <a href="https://www.instagram.com/theayushpriyamm/">
                        <FaInstagram style={{ width: '50px', height: '50px' }} />
                    </a>
                    <a href="https://www.linkedin.com/in/ayush-priyam-841b00236/">
                        <FaLinkedinIn style={{ width: '50px', height: '50px' }}/>
                    </a>
                    <a href="">
                        <FaTwitter style={{ width: '50px', height: '50px' }}/>
                    </a>
                    <a href="https://github.com/Ayushpriyamm">
                        <FaGithub style={{ width: '50px', height: '50px' }}/>
                    </a>
                </div>

            </div>

            <div className='flex flex-col md:mx-auto'>
                <h2 className='text-3xl md:text-5xl font-bold md:font-extrabold'> Navigation</h2>
                                  
                <ul className=' py-4 space-y-2'>
                    <li>
                        <a href="/">-Home</a>
                    </li>
                    <li>
                        <a href="#Advantages">-About</a>
                    </li>
                    <li>
                        <a href="#recent-work">-Recent Work</a>
                    </li> 
                    <li>
                        <a href="#Contact">-Contact</a>
                    </li>                                        
                </ul>
            </div>

            <div className='flex flex-col md:mx-auto '>
                <h2 className=' text-3xl md:text-5xl font-bold md:font-extrabold'>Services</h2>
                                  
                <ul className=' py-4 space-y-2'>
                    <li>
                        <a href="#development">-Web Development</a>
                    </li>
                    <li>
                        <a href="#design">-Web Design</a>
                    </li>
                    <li>
                        <a href="#design">-Brand Identity</a>
                    </li>
                    <li>
                        <a href="#marketing">-Digital Marketting </a>
                    </li>                                          
                </ul>
            </div>

        </div>
        <div className='bg-[#1F1E1D] text-center text-white p-4'>
            <h1>Copyright © 2023 Ayush Priyam. All rights reserved.</h1>
        </div>
    </div>
  )
}

export default Footer