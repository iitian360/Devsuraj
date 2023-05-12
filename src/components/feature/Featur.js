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
    <div className='grid grid-cols-3 gap-20'>
      <Card 
      title="Web development"
      des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
      neque suscipit accusamus veniam quos? Natus!"
      icon={<CgWebsite/>}
      />
      <Card
      
      title="Programming"
      des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
       neque suscipit accusamus veniam quos? Natus!
      "
      icon={<CgCodeSlash/>}/>
      <Card
      title="UI/UX Design"
      des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
      neque suscipit accusamus veniam quos? Natus!"
      icon={<CgIfDesign/>}/>
      <Card
      title="Backend development"
      des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
      neque suscipit accusamus veniam quos? Natus!"
      icon={<BsTools/>}/>
      <Card
      title="Website deploy"
      des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
      neque suscipit accusamus veniam quos? Natus!"
      icon={<SiOctopusdeploy/>}/>
      <Card
      title="content writting"
      des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
      neque suscipit accusamus veniam quos? Natus!"
      icon={<TfiWrite/>}/>
    </div>
      
    </section>
  )
}

export default Feature
