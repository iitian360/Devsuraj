import React from 'react'
import { logo } from '../../assets'
import {FaFacebookF, FaTwitter,FaLinkedinIn} from 'react-icons/fa'
import { FiCode, FiLink, FiTool } from 'react-icons/fi'
// import { navlinkData } from '../../constants';
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <div className='w-full h-auto py-20 border-b-[1px] border-b-black grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-4 gap-8'>
        <div className='w-full f-full flex flex-col gap-4 '>
            <img className='w-40' src={logo} alt="logo" />
            <div className='flex gap-4'>
                <span className='bannerIcon'> <a href="https://www.facebook.com/profile.php?id=10000987736632"><FaFacebookF/></a></span>
                <span className='bannerIcon'><button type='button' aria-label='Twitter' className='cursor-pointer'> <FaTwitter/></button></span>
                <span className='bannerIcon'> <a href="https://www.linkedin.com/in/suraj-patel-76b912217/"><FaLinkedinIn/></a></span>
            </div>
        </div>
        <div className='w-full f-full'>
            <h3 className='text-xl uppercase text-designColor tracking-wide flex items-center gap-2'><FiLink aria-hidden='true' />Quick links</h3>
            <ul className='flex flex-col py-6 font-medium overflow-hidden gap-4 font-titleFont'>
                <li>
                <Link to='/'>
                <span className='w-full text-lg relative hover:text-designColor duration-300 cursor-pointer relative group'>About
                <span className='absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0
                -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300'></span></span>
                </Link>
                </li>
                <li>
                <Link to='/features'>
                <span className='w-full text-lg relative hover:text-designColor duration-300 cursor-pointer relative group'>Services
                <span className='absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0
                -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300'></span></span>
                </Link>
                </li>
                <li>
                <span className='w-full text-lg relative hover:text-designColor duration-300 cursor-pointer relative group'>Portfolio
                <span className='absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0
                -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300'></span></span>
                </li>
                
                <li>
                <span className='w-full text-lg relative hover:text-designColor duration-300 cursor-pointer relative group'>Blog
                <span className='absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0
                -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300'></span></span>
                </li>
                <li>
                <Link to='/contact'>

                <span className='w-full text-lg relative hover:text-designColor duration-300 cursor-pointer relative group'>Contact
                <span className='absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0
                -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300'></span></span>
                </Link>
                </li>
            </ul>
        </div>
        <div className='w-full f-full'>
            <h3 className='text-xl uppercase text-designColor tracking-wide flex items-center gap-2'><FiTool aria-hidden='true' />Resources</h3>
            <ul className='flex flex-col py-6 font-medium overflow-hidden gap-4 font-titleFont'>
                <li>
                <span className='w-full text-lg relative hover:text-designColor duration-300 cursor-pointer relative group'>Dev tools
                <span className='absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0
                -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300'></span></span>
                </li>
                <li>
                <span className='w-full text-lg relative hover:text-designColor duration-300 cursor-pointer relative group'>GitHub
                <span className='absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0
                -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300'></span></span>
                </li>
                <li>
                <Link to='/projects'>

                <span className='w-full text-lg relative hover:text-designColor duration-300 cursor-pointer relative group'>Project
                <span className='absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0
                -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300'></span></span>
                </Link>
                </li>
                <li>
                <span className='w-full text-lg relative hover:text-designColor duration-300 cursor-pointer relative group'>Terms of services
                <span className='absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0
                -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300'></span></span>
                </li>
            </ul>
        </div>
        <div className='w-full f-full'>
            <h3 className='text-xl uppercase text-designColor tracking-wide flex items-center gap-2'><FiCode aria-hidden='true' />Developers</h3>
            <ul className='flex flex-col py-6 font-medium overflow-hidden gap-4 font-titleFont'>
                <li>
                <span className='w-full text-lg relative hover:text-designColor duration-300 cursor-pointer relative group'>Documentation
                <span className='absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0
                -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300'></span></span>
                </li>
                <li>
                <span className='w-full text-lg relative hover:text-designColor duration-300 cursor-pointer relative group'>Authentication
                <span className='absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0
                -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300'></span></span>
                </li>
                <li>
                <span className='w-full text-lg relative hover:text-designColor duration-300 cursor-pointer relative group'>API Reference
                <span className='absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0
                -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300'></span></span>
                </li>
                <li>
                <span className='w-full text-lg relative hover:text-designColor duration-300 cursor-pointer relative group'>Support
                <span className='absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0
                -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300'></span></span>
                </li>
                <li>
                <span className='w-full text-lg relative hover:text-designColor duration-300 cursor-pointer relative group'>Open Source
                <span className='absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0
                -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300'></span></span>
                </li>
                
            </ul>
        </div>
       
    </div>
  )
}

export default Footer
