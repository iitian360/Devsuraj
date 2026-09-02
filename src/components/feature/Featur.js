import React from 'react'
import Title from '../layouts/Title'
import Card from './Card'

import { FiCode, FiFileText, FiLayout, FiMonitor, FiServer, FiUploadCloud } from 'react-icons/fi'

const Feature = () => {
  return (
    <section id='feature' className='w-full py-20  border-b-[1px] 
    border-b-black'>

    <Title  title="features" des="what i do.."/>
    <div className='grid grid-cols-1 mdl:grid-cols-2 xl:grid-cols-3 gap-8 xl:gap-20'>
      <Card 
      title="Web development"
      des="I build fast, responsive web experiences with semantic HTML, modern JavaScript, React, Next.js, and Tailwind CSS. My approach combines reusable components, accessible interfaces, and performance-focused frontend engineering."
      icon={<FiMonitor/>}
      />
      <Card
      
      title="Programming"
      des="I use C, C++, and Python to develop clear, efficient solutions to complex problems. I bring strong fundamentals in data structures, algorithms, and an analytical mindset to everyday software engineering."
      icon={<FiCode/>}/>
      <Card
      title="UI/UX Design"
      des="I turn product goals into intuitive user journeys through thoughtful layouts, visual hierarchy, and responsive design. I use Figma and frontend prototypes to create interfaces that feel clear, consistent, and easy to use."
      icon={<FiLayout/>}/>
      <Card
      title="Backend development"
      des="I design dependable backend services and APIs with Node.js, Express, MongoDB, and Firebase. I focus on clean architecture, secure data flows, validation, and maintainable integrations that support real products."
      icon={<FiServer/>}/>
      <Card
      title="Website deploy"
      des="I take applications from a local build to reliable production releases using platforms such as Vercel, Netlify, Railway, and Render. I work with environment configuration, deployment workflows, monitoring, and performance in mind."
      icon={<FiUploadCloud/>}/>
      <Card
      title="Content and technical writing"
      des="I explain technical ideas through structured documentation, practical articles, and developer-focused content. I aim to make complex concepts approachable while keeping the writing precise, useful, and grounded in real engineering experience."
      icon={<FiFileText/>}/>
    </div>
      
    </section>
  )
}

export default Feature
