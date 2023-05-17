import React from 'react'
import Title from '../layouts/Title'
import Card from './Card'

import {CgWebsite,CgCodeSlash,CgIfDesign} from 'react-icons/cg'
import {SiOctopusdeploy} from 'react-icons/si'
import {BsTools} from 'react-icons/bs'
import {TfiWrite} from 'react-icons/tfi'

const Feature = () => {
  return (
    <section id='feature' className='w-full py-20  border-b-[1px] 
    border-b-black'>

    <Title  title="features" des="what i do.."/>
    <div className='grid grid-cols-1 mdl:grid-cols-2 xl:grid-cols-3 gap-8 xl:gap-20'>
      <Card 
      title="Web development"
      des="I am a Full Stack Developer with MERN Stack, having 3+ years experience in various dev tools like
      HTML, Css, JavaScript, React.js, Redux, Next.js, Express.js, Babel.js, Node.js, Bootstrap, Boolma
      , Tailwind Css."
      icon={<CgWebsite/>}
      />
      <Card
      
      title="Programming"
      des="I am a programmer skilled in various programming languages like C, C++, and Python
      . I have also some introductory knowledge about Machine Learning and"
      icon={<CgCodeSlash/>}/>
      <Card
      title="UI/UX Design"
      des="UI/UX is a part of frontend development, to make a user friendly interface it is very important
      to having knowledge abount UI/UX design. For UI/UX I am very familier with Figma."
      icon={<CgIfDesign/>}/>
      <Card
      title="Backend development"
      des="I have 2+ years experience with Backend development, I started my dev journey as a Frontend developer,
       after an year I started my backend development journey, today I am recognised as a MERN Developer."
      icon={<BsTools/>}/>
      <Card
      title="Website deploy"
      des="As an MERN Developer I deployed more than 8 websites, in which 2 are still in production, and still working fine
      . For deployment there are various plateforms that I use like Heroku, Vercel, Netlify, Hostinger, Godaddy, Railway
      Fly.io, Render and many more."
      icon={<SiOctopusdeploy/>}/>
      <Card
      title="content writting"
      des="Before my development journey, I am used to write poems, but soon I realised that I should
      write blogs, so I started blogging at medium, here I write blogs on various topics like healthcare,
      technology and relationships."
      icon={<TfiWrite/>}/>
    </div>
      
    </section>
  )
}

export default Feature
