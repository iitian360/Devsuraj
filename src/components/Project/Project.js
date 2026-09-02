import React from 'react';
import Title from '../layouts/Title';
import ProjectCard from './ProjectCard';
import { projectsData } from '../../constants';

const Project = () => {
  return (
    <section
      id="project"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="w-full flex justify-center items-center text-center">
        <Title
          title="Visit my portfolio and keep your feedback"
          des="my projects.."
        />
      </div>
      <div className="grid grid-cols-1 mdl:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        {projectsData.map((project) => (
          <ProjectCard
            key={project._id}
            src={project.image}
            title={project.title}
            des={project.description}
            technologies={project.technologies}
            proLink={project.projectLink}
            gitLink={project.gitLink}
          />
        ))}
      </div>
    </section>
  );
};

export default Project;
