import React from 'react'
import Leftbanner from './Leftbanner'
import { banner } from '../../assets'
const Banner = () => {

  // typewriter
  
  return (
    <section id='home' className='w-full items-center lg:py-20 py-0 flex flex-col-reverse lg:flex-row border-b-[1px] 
    border-b-black'>
      <Leftbanner/>
      <div className='w-full lg:w-1/2 flex justify-center items-start  lg:items-center  relative'>
        <img className='w-[400px] lg:w-[500px] lg:h-[680px]  z-10' src={banner} alt="banner" />
      </div>
    </section>
  )
}

export default Banner
