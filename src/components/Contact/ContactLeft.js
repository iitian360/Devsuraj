import React from 'react'
import { contactimg } from '../../assets/index'
import {FaFacebookF, FaTwitter,FaLinkedinIn} from 'react-icons/fa'
const ContactLeft = () => {
  return (
    <div className='lgl:w-[35%] w-full h-full bg-gradient-to-r from-[#1e2024] to-[#20272b] lgl:p-8
                      p-4  rounded-lg shadow-shadowone flex flex-col lgl:gap-8 gap-4'>
            <img className='w-full  object-cover rounded-lg mb-2' src={contactimg} alt="contact" />
            <div className='flex flex-col lgl:gap-4 gap-2'>
              <h3 className='text-3xl font-bold text-white'>Suraj Patel</h3>
              <p className='text-lg font-normal text-gray-400'>MERN Stack Developer</p>
              <p className='text-base text-gray-400 tracking-wide'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Necessitatibus unde quas porro quam fugit error?</p>
              <p className='text-base text-gray-400 flex  items-center gap-2'>
                Phone: <span className='text-designColor'>+919793589037</span>
              </p>
              <p className='text-base text-gray-400 flex  items-center gap-2'>
                Email: <span className='text-designColor'>sp48840@gmail.com</span>
              </p>
            </div>
            <div className='flex flex-col gap-4'>
              <h2 className='uppercase font-titleFont text-base mb-4'>find me in</h2>
              <div className='flex gap-4'>
                <span className='bannerIcon'><FaFacebookF/></span>
                <span className='bannerIcon'><FaTwitter/></span>
                <span className='bannerIcon'><FaLinkedinIn/></span>
              </div>
            </div>

          </div>
  )
}

export default ContactLeft
