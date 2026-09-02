import React from 'react'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import { FaFacebookF, FaLinkedinIn, FaReact, FaNodeJs, FaInstagram, FaGithub } from 'react-icons/fa'
import { FiArrowDown, FiMail } from 'react-icons/fi'
import { Link } from 'react-scroll'
import { SiTailwindcss, SiMongodb } from 'react-icons/si'
import './banner.css'
const Leftbanner = () => {
    // typewriter
  const [text] = useTypewriter({
    words: ['Software Engineer', 'Full Stack Developer', 'MERN Developer'],
    loop: true,
    deleteSpeed: 10,
    delaySpeed: 2000,
  })
  return (
    <div className='w-full lg:w-1/2 flex flex-col gap-12'>
        <div className='flex flex-col gap-5'>
          <h4 className='text-lg font-normal uppercase tracking-wide text-gray-400'>Software Engineer at Bayer Global</h4>
          <h2 className='text-4xl mdl:text-5xl font-bold text-white'>Hi, I'm{" "}
            <span className='text-designColor capitalize'>Suraj patel</span></h2>
          <h2 className='text-2xl mdl:text-3xl text-white font-bold'>A <span>{text}</span>
            <Cursor
              cursorBlinking="false"
              cursorStyle="|"
              cursorColor='#ff014f'

            />
          </h2>
          <p className='max-w-2xl text-base leading-7 text-gray-300'>I build reliable, user-focused software across the frontend and backend. After graduating from IIT (BHU) Varanasi, I worked at HCLTech and joined Bayer Global, where I continue to solve product problems with modern web technologies and strong engineering practices.</p>
          <div className='flex flex-wrap gap-4'>
            <Link to='project' smooth={true} offset={-70} duration={500} className='inline-flex cursor-pointer items-center gap-2 rounded-md bg-designColor px-5 py-3 font-semibold text-black transition-transform duration-300 hover:-translate-y-1'>View my work <FiArrowDown aria-hidden='true' /></Link>
            <Link to='contact' smooth={true} offset={-70} duration={500} className='inline-flex cursor-pointer items-center gap-2 rounded-md border border-gray-600 px-5 py-3 font-semibold text-gray-200 transition-colors duration-300 hover:border-designColor hover:text-designColor'>Get in touch <FiMail aria-hidden='true' /></Link>
          </div>
        </div>
        <div className='flex flex-col lg:flex-row justify-between gap-6 lg:gap-0'>
          <div>
            <h2 className='text-base uppercase font-titleFont mb-4'>Get connected to me</h2>
            <div className='flex gap-4'>
              <span className='bannerIcon'> <a href="https://www.facebook.com/profile.php?id=10000987736632"> <FaFacebookF /></a> </span>
              <span className='bannerIcon'> <a href="https://www.instagram.com/_devsuraj/"> <FaInstagram /> </a></span>
              <span className='bannerIcon'> <a href="https://www.linkedin.com/in/suraj-patel-76b912217/"> <FaLinkedinIn /></a> </span>
              <span className='bannerIcon'> <a href="https://www.github.com/iitian360/"> <FaGithub /></a> </span>
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
