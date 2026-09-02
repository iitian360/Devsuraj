import React from 'react'
import {BsGithub} from 'react-icons/bs'
import {FaGlobe}  from 'react-icons/fa'

const ProjectCard = ({ src, title, des, technologies = [], proLink, gitLink }) => {
    return (
        <div className='w-full p-4 h-auto xl:px-12 xl:py-10 rounded-lg shadow-shadowone flex flex-col projectCard 
        '>
            <div className='w-full h-[80%] overflow-hidden rounded-lg group'>
                <img className='w-full aspect-video object-cover group-hover:scale-110 duration-300 cursor-pointer' src={src} alt={`${title} preview`} loading='lazy' />
            </div>
            <div className='w-full mt-5 flex flex-col gap-5' >
                <div className='flex justify-between items-center '>
                    <h3  className='text-designColor text-base uppercase font-mainFont2  font-bold' >{title}</h3>
                    <div className='flex gap-2'>
                        {gitLink && <span className='text-lg w-10 h-10 rounded-full bg-black inline-flex
                        justify-center items-center text-gray-400 hover:text-designColor duration-300
                        cursor-pointer'
                        ><a href={gitLink} target='_blank' rel='noreferrer' aria-label={`View ${title} source code`}><BsGithub/></a> </span>}
                        {proLink && <span className='text-lg w-10 h-10 rounded-full bg-black inline-flex
                        justify-center items-center text-gray-400 hover:text-designColor duration-300
                        cursor-pointer'
                        > <a href={proLink} target='_blank' rel='noreferrer' aria-label={`Open ${title} live demo`}><FaGlobe/></a></span>}
                    </div>
                </div>
                <div className='flex flex-wrap gap-2'>
                    {technologies.map((technology) => (
                        <span key={technology} className='rounded-full border border-gray-700 px-3 py-1 text-xs text-gray-400'>
                            {technology}
                        </span>
                    ))}
                </div>
                <div>
                    <p className='text-sm tracking-wide hover:text-gray-100 duration-300'>{des}</p>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard