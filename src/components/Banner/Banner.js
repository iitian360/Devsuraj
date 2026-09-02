import React from 'react';
import Leftbanner from './Leftbanner';
import { IMAGES } from '../../constants/cloudinaryImages';

const Banner = () => {
  return (
    <section id='home' className='w-full h-auto items-center lg:py-20 py-0 flex flex-col-reverse lg:flex-row border-b-[1px] 
    border-b-black'>
      <Leftbanner />
      <div className='w-full lg:w-1/2 flex justify-center items-start lg:items-center relative'>
        {/* Image Container */}
        <img
          className='w-full max-w-[300px] lg:w-[330px] lg:h-[400px] z-10 transform rotate-[5deg]
  rounded-lg shadow-lg border-[6px] border-transparent 
  transition duration-300 ease-in-out hover:shadow-2xl 
  hover:border-opacity-50'
          style={{
            boxShadow: '3px 4px 12px rgba(255,149,0,0.5),3px 8px 24px rgba(255,149,0,0.2)',
          }}
          src={IMAGES.skills.file}
          alt="banner"
        />

      </div>
    </section>
  );
};

export default Banner;
