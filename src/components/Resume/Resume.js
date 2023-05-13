import React, { useState } from 'react'
import Title from '../layouts/Title'
import Education from './Education'
import Skills from './Skills'
import Achievement from './Achievment'
import Experience from './Experience'

const Resume = () => {


  const [EducationData, setEducationData]=useState(true);
  const [SkillData, setSkillData]=useState(false);
  const [AchievmentData, setAchievmentData]=useState(false);
  const [ExperienceData, setExperienceData]=useState(false);
  return (
    <section id='resume' className='w-full h-auto py-20 flex flex-col border-b-[1px] 
    border-b-black'>
      <div className='w-full flex justify-center items-center text-center'>
        <Title title="3+ years of experience" des="my resume.." />
      </div>
      <div>
        <ul className='w-full grid grid-cols-1 md:grid-cols-2  xl:grid-cols-4'>
          <li  onClick={()=>setEducationData(true) & setSkillData(false)
          & setAchievmentData(false) &setExperienceData(false)} 
          className={`${EducationData ? "border-designColor rounded-lg":"border-none"} resumeLi `}>Education</li>
          <li onClick={()=>setEducationData(false) & setSkillData(true)
          & setAchievmentData(false) &setExperienceData(false) } 
          className={`${SkillData ? "border-designColor rounded-lg":"border-none"} resumeLi `}>Professional Skills</li>
          <li onClick={()=> setEducationData(false) & setSkillData(false)
          & setAchievmentData(true) &setExperienceData(false)}  
          className={`${AchievmentData ? "border-designColor rounded-lg":"border-none"} resumeLi `}>achievment</li>
          <li onClick={()=> setEducationData(false) & setSkillData(false)
          & setAchievmentData(false) &setExperienceData(true
            )}
            className={`${ExperienceData ? "border-designColor rounded-lg":"border-none"} resumeLi `}>experience</li>
        </ul>
      </div>

      {EducationData && <Education/>}
      {SkillData && <Skills/>}
      {AchievmentData && <Achievement/>}
      {ExperienceData && <Experience/>}

    </section>
  )
}

export default Resume
