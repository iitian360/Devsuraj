import React from 'react'
import Leftbanner from './Leftbanner'
import { banner } from '../../assets'
const Banner = () => {

  // typewriter
  
  return (
    <section id='home' className='w-full items-center py-20 flex border-b-[1px] 
    border-b-black'>
      <Leftbanner/>
      <div className='w-1/2 flex justify-center items-center relative'>
        <img className='w-[400px]  z-10' src={banner} alt="banner" />
      </div>
    </section>
  )
}

export default Banner
