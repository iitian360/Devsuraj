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
    <div className='w-1/2 flex flex-col gap-20'>
        <div className='flex flex-col gap-5'>
          <h4 className='text-lg font-normal uppercase'>Welcome to my world</h4>
          <h2 className='text-5xl font-bold text-white'>Hi, I'm{" "}
            <span className='text-designColor capitalize'>Suraj patel</span></h2>
          <h2 className='text-3xl text-white font-bold'>a <span>{text}</span>
            <Cursor
              cursorBlinking="false"
              cursorStyle="|"
              cursorColor='#ff014f'

            />
          </h2>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error velit provident
            veniam maiores tempora exercitationem, quasi dignissimos sapiente iusto voluptate
            mollitia omnis soluta?</p>
        </div>
        <div className='flex justify-between'>
          <div>
            <h2 className='text-base uppercase font-titleFont mb-4'>Get connected to me</h2>
            <div className='flex gap-4'>
              <span className='bannerIcon'> <FaFacebookF /> </span>
              <span className='bannerIcon'> <FaInstagram /> </span>
              <span className='bannerIcon'> <FaLinkedinIn /> </span>
            </div>
          </div>
          <div>
            <h2 className='text-base uppercase font-titleFont mb-4'>Best skill on</h2>
            <div className='flex gap-4'>
              <span className='bannerIcon'> <SiTailwindcss /> </span>
              <span className='bannerIcon'> <FaReact /> </span>
              <span className='bannerIcon'> <FaNodeJs /> </span>
              <span className='bannerIcon'> <SiMongodb /> </span>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Leftbanner
