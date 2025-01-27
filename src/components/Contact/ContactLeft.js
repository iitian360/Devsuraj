import React from 'react'
import mypic from "../../assets/images/skill/file.png";
import { FaFacebookF, FaLinkedinIn, FaInstagram,FaGithub  } from 'react-icons/fa'
const ContactLeft = () => {
  return (
    <div className='lgl:w-[35%] w-full h-full bg-gradient-to-r from-[#1e2024] to-[#20272b] lgl:p-8
                      p-4  rounded-lg shadow-shadowone flex flex-col lgl:gap-8 gap-4'>
            <img className='w-80  object-cover rounded-lg mb-2' src={mypic} alt="contact" />
            <div className='flex flex-col lgl:gap-4 gap-2'>
              <h3 className='text-3xl font-bold text-white'>Suraj Patel</h3>
              <p className='text-lg font-normal text-gray-400'>MERN Stack Developer</p>
              <p className='text-base text-gray-400 flex  items-center gap-2'>
                Phone: <span className='text-designColor'>+919793589037</span>
              </p>
              <p className='text-base text-gray-400 flex  items-center gap-2'>
                Email: <span className='text-designColor'>dev.surajpatel@gmail.com</span>
              </p>
            </div>
            <div className='flex flex-col gap-4'>
              <h2 className='uppercase font-titleFont text-base mb-4'>find me in</h2>
              <div className='flex gap-4'>
                <span className='bannerIcon'> <a href="https://www.facebook.com/profile.php?id=10000987736632"> <FaFacebookF /></a> </span>
                              <span className='bannerIcon'> <a href="https://www.instagram.com/_devsuraj/"> <FaInstagram /> </a></span>
                              <span className='bannerIcon'> <a href="https://www.linkedin.com/in/suraj-patel-76b912217/"> <FaLinkedinIn /></a> </span>
                              <span className='bannerIcon'> <a href="https://www.github.com/iitian360/"> <FaGithub /></a> </span>
              </div>
            </div>

          </div>
  )
}

export default ContactLeft
