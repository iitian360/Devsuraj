import React from 'react'
import Title from '../layouts/Title'
import ProjectCard from './ProjectCard'
import { hotelimg, eventimg,portfolio,shoe,pizza } from '../../assets'

const Project = () => {
  return (
    <section id='project' className='w-full h-auto py-20 border-b-[1px] 
    border-b-black'>
      <div className='w-full flex justify-center items-center text-center'>
        <Title title="Vistit my portfolio and keep your feedback" des="my projects.." />
      </div>
      <div className='grid grid-cols-1 mdl:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14'>
          <ProjectCard
          src={shoe }
          title="Shoe Collection E-Commerce Website" 
          des="A full-fledged e-commerce website, dedicated to showcasing a captivating shoe collection, with Next.js and Strapi
          as a Headless CMS" proLink={'https://steptalk.vercel.app'} gitLink={'https://github.com/iitian360/store-frontend'}
          />


          <ProjectCard  src={pizza }
          title="Pizza delivery website - Mobopizza" 
          des="Developed MoboPizza, a responsive and user-friendly pizza delivery website built with React.
          Implemented features such as menu browsing, customizable pizza options, cart management" proLink={'https://mobopizza.vercel.app'}
              gitLink={'https://github.com/iitian360/Pizza-delivery-app'} 
          />


          <ProjectCard src={eventimg }
          title="Event management website" 
          des="It is a event management website which is currently in production, a complete fullstack project
          leading by me for Spirit23 a departmental fest of Phrmaceutical engineering (IIT BHU VARANASI)
          . This website handled a traffic of 500 attendies with user authantication and payment getway
          integration."
          />


          <ProjectCard src={hotelimg }
          title="Hotel management website" 
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
              neque suscipit accusamus veniam quos? Natus!"
          />


          <ProjectCard src={eventimg }
          title="Online library" 
          des="It is a MERN Stack project based on CRUD application, here one can add delete or update books
          in library, with book preview and downloading options. Admin can also track the record of the issued book and user
          would be notified automatically after the ending period." proLink={'https://collegelib.up.railway.app/'}
              gitLink={'https://github.com/iitian360/village-database'}
          />



          <ProjectCard src={portfolio }
          title="Portfolio website" 
          des="It is a real time chat application with MERN Stack, having various options like end to end encryption,
          group chat, admin pannel integration, image or other file sharing options and many more."
          proLink={'https://mesuraj.netlify.app/'}
          gitLink={'#'}
          />


      </div>
    </section>
  )
}

export default Project
