import React from 'react'
import SkillCard from '../Cards/SkillCard'
import { anaconda, c, cpp, css, firebase, git, github, js, matplot, mongoDb, next, node, numpy, panda, python, react, redux, scikit, selenium, sql, tailwind, tensor } from '../../assets/skillLogo'

const Skills = () => {
    return (
        <div className='flex flex-row align-top justify-evenly gap-2'>
            <div className='w-1/2'>
                <div className='lg:py-6 py-3 font-titleFont'>
                    <h2 className='text-2xl lg:text-4xl font-bold'>Programming Skills</h2>
                </div>
                <div className='w-full flex flex-wrap gap-1'>
                    <SkillCard logo={c} alt_text="C"/>
                    <SkillCard logo={python} alt_text="python"/>
                    <SkillCard logo={js} alt_text="javascript"/>
                    <SkillCard logo={cpp} alt_text="C++"/>
                    <SkillCard logo={sql} alt_text="sql"/>
                    
                </div>
            </div>

            <div className='w-1/2'>
                <div className='lg:py-6 py-3 font-titleFont'>
                    <h2 className='text-2xl lg:text-4xl font-bold'>Development Skills</h2>
                </div>

                <div className='w-full flex flex-wrap gap-2'>
                    <SkillCard logo={react} alt_text="react"/>
                    <SkillCard logo={redux} alt_text="reduc"/>
                    <SkillCard logo={node} alt_text="node.js"/>
                    <SkillCard logo={mongoDb} alt_text="mongoDB"/>
                    <SkillCard logo={matplot} alt_text="matplotlib"/>
                    <SkillCard logo={tailwind} alt_text="tailwind css"/>
                    <SkillCard logo={css} alt_text="css"/>
                    <SkillCard logo={git} alt_text="git"/>
                    <SkillCard logo={github} alt_text="github"/>
                    <SkillCard logo={panda} alt_text="panda"/>
                    <SkillCard logo={firebase} alt_text="firabase"/>
                    <SkillCard logo={numpy} alt_text="numpy"/>
                    <SkillCard logo={scikit} alt_text="scikit learn"/>
                    <SkillCard logo={next} alt_text="next.js"/>
                    <SkillCard logo={selenium} alt_text="selenium"/>
                    <SkillCard logo={tensor} alt_text="tensorflow"/>
                    <SkillCard logo={anaconda} alt_text="anaconda"/>
                </div>
            </div>
        </div>
    )
}

export default Skills
