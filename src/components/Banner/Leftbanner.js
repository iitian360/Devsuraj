import React from 'react'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaReact, FaNodeJs, FaInstagram } from 'react-icons/fa'
import { SiTailwindcss, SiMongodb } from 'react-icons/si'
import './banner.css'
const Leftbanner = () => {
    // typewriter
  const [text] = useTypewriter({
    words: ['Programmer..', 'Full Stack Developer..', 'MERN Developer..'],
    loop: true,
    deleteSpeed: 10,
    delaySpeed: 2000,
  })
  return (
    <div className='w-full lg:w-1/2 flex flex-col gap-20'>
        <div className='flex flex-col gap-5'>
          <h4 className='text-lg  font-normal uppercase'>Welcome to my world</h4>
          <h2 className=' text-4xl mdl:text-5xl font-bold text-white'>Hi, I'm{" "}
            <span className='text-designColor capitalize'>Suraj patel</span></h2>
          <h2 className='text-2xl mdl:text-3xl text-white font-bold'>a <span>{text}</span>
            <Cursor
              cursorBlinking="false"
              cursorStyle="|"
              cursorColor='#ff014f'

            />
          </h2>
          <p>This website depicts all of the work that I have completed throughout my graduation from 
             Indian Institute of Technology(BHU) VARANASI. It displayed the growth and the process that I have made, as well as
             the assignment I'm most proud of. Over the past 3 years I have put time, energy, and effort into my task and have learned
             more than ever because of it.
             </p>
        </div>
        <div className='flex flex-col lg:flex-row justify-between gap-6 lg:gap-0'>
          <div>
            <h2 className='text-base uppercase font-titleFont mb-4'>Get connected to me</h2>
            <div className='flex gap-4'>
              <span className='bannerIcon'> <a href="https://www.facebook.com/profile.php?id=10000987736632"> <FaFacebookF /></a> </span>
              <span className='bannerIcon'> <a href="https://www.instagram.com/_devsuraj/"> <FaInstagram /> </a></span>
              <span className='bannerIcon'> <a href="https://www.linkedin.com/in/suraj-patel-76b912217/"> <FaLinkedinIn /></a> </span>
            </div>
          </div>
          <div>
            <h2 className='text-base uppercase font-titleFont mb-4'>Best skill on</h2>
            <div className='flex gap-4'>
              <span className='bannerIcon'> <a href="https://tailwindcss.com/docs/installation"> <SiTailwindcss /> </a></span>
              <span className='bannerIcon'> <a href="https://react.dev/learn"><FaReact /></a> </span>
              <span className='bannerIcon'> <a href="https://nodejs.dev/en/learn/"><FaNodeJs /></a> </span>
              <span className='bannerIcon'> <a href="https://www.mongodb.com/docs/atlas/"><SiMongodb /></a> </span>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Leftbanner
