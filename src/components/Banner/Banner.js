import React from 'react';
import Leftbanner from './Leftbanner';
import mypic from "../../assets/images/skill/file.png";

const Banner = () => {
  return (
    <section id='home' className='w-full h-auto items-center lg:py-20 py-0 flex flex-col-reverse lg:flex-row border-b-[1px] 
    border-b-black'>
      <Leftbanner />
      <div className='w-full lg:w-1/2 flex justify-center items-start lg:items-center relative'>
        {/* Image Container */}
        <img
          className='w-[300px] lg:w-[330px] lg:h-[400px] z-10 transform rotate-[5deg] 
  rounded-lg shadow-lg border-[6px] border-transparent 
  transition duration-300 ease-in-out hover:shadow-2xl 
  hover:border-opacity-50'
          style={{
            filter: 'grayscale(100%) brightness(70%)', // Correct format for grayscale and brightness
            boxShadow: '3px 4px 12px rgba(255,149,0,0.5),3px 8px 24px rgba(255,149,0,0.2)', // Correct format for boxShadow
          }}
          src={mypic}
          alt="banner"
        />

      </div>
    </section>
  );
};

export default Banner;
