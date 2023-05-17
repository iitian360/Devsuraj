import React from 'react'
import Title from '../layouts/Title'
import ProjectCard from './ProjectCard'
import { hotelimg, eventimg, cahtimg, calciimg } from '../../assets'

const Project = () => {
  return (
    <section id='project' className='w-full h-auto py-20 border-b-[1px] 
    border-b-black'>
      <div className='w-full flex justify-center items-center text-center'>
        <Title title="Vistit my portfolio and keep your feedback" des="my projects.." />
      </div>
      <div className='grid grid-cols-1 mdl:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14'>
          <ProjectCard
          src={cahtimg }
          title="Chatting App" 
          des="This is a real time chat application"/>
          <ProjectCard  src={calciimg }
          title="Calculator" 
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
              neque suscipit accusamus veniam quos? Natus!"/>
          <ProjectCard src={eventimg }
          title="Event management website" 
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
              neque suscipit accusamus veniam quos? Natus!"/>
          <ProjectCard src={hotelimg }
          title="Hotel management website" 
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
              neque suscipit accusamus veniam quos? Natus!"/>
          <ProjectCard src={eventimg }
          title="Online library" 
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
              neque suscipit accusamus veniam quos? Natus!"/>
          <ProjectCard src={calciimg }
          title="Chatting app" 
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
              neque suscipit accusamus veniam quos? Natus!"/>
      </div>
    </section>
  )
}

export default Project
