import React from 'react'
import Title from '../layouts/Title'

const About = () => {
  return (
    <section id='about' className='w-full py-20 flex flex-col border-b-[1px] border-b-black'>
      <Title title='About me' des='my journey..' />
      <div className='mt-10 max-w-4xl mx-auto text-center'>
        <p className='text-base mdl:text-lg leading-8 text-gray-300'>
          I am a Software Engineer currently working at Bayer Global. After graduating
          from the Indian Institute of Technology (BHU), Varanasi, I started my
          professional journey at HCLTech, where I built a strong foundation in
          software engineering and web development. I later joined Bayer, where I
          continue to solve meaningful problems, learn new technologies, and build
          reliable software.
        </p>
      </div>
    </section>
  )
}

export default About
