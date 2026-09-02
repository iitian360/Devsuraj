import React from 'react'
import Title from '../layouts/Title'

const About = () => {
  return (
    <section id='about' className='w-full py-20 flex flex-col border-b-[1px] border-b-black'>
      <Title title='About me' des='my journey..' />
      <div className='mt-10 max-w-4xl mx-auto text-center'>
        <p className='text-base mdl:text-lg leading-8 text-gray-300'>
          I am a Software Engineer at Bayer Global with previous experience at HCLTech.
          I design and build dependable web products across the frontend and backend,
          with a focus on clean interfaces, maintainable systems, and measurable product
          outcomes. I graduated from the Indian Institute of Technology (BHU), Varanasi,
          and bring a practical, product-minded approach to every stage of delivery.
        </p>
      </div>
    </section>
  )
}

export default About
