import React from "react";
import ResumeCard from "./ResumeCard";
import { motion } from "framer-motion";
const Experience = () => {
    return (
        <motion.div initial={{opacity:0}} animate={{opacity:1,transition:{duration:.6}}} className="w-full">
            <div className="lg:py-12 py-4 font-titleFont">
                <p className="text-sm text-designColor tracking-[4px]">Professional journey</p>
                <h2 className="lg:text-4xl text-2xl font-bold">Software Engineering Experience</h2>
            </div>
            <div className="w-full flex flex-col lg:flex-row gap-20">
                <div className="lg:w-1/2 w-full">
                <div className="mt-4 h-auto w-full border-l-[6px] border-l-black border-opacity-30
                    flex flex-col lg:gap-10 gap-4">
                    <ResumeCard
                        title="Software Engineer at Bayer Global"
                        subtitle="Software Engineering - Present"
                        result="Bayer Global"
                        des="Currently working as a Software Engineer at Bayer Global, contributing to reliable software solutions and building experience in engineering practices within a global organization."
                    />
                    <ResumeCard
                        title="Software Engineer at HCLTech"
                        subtitle="Software Engineering - Previously"
                        result="HCLTech"
                        des="Worked as a Software Engineer at HCLTech, developing professional software engineering experience before moving to Bayer Global."
                    />
                </div>
            </div>
                <div className="lg:w-1/2 w-full">
                <div className="mt-4 h-auto w-full border-l-[6px] border-l-black border-opacity-30 flex flex-col lg:gap-10 gap-4">
                    <ResumeCard
                        title="Software Development Intern at Mahindra Logistics"
                        subtitle="Software Development - (May 2024- July 2024)"
                        result="Mahindra Logistics"
                        des="Developed a test automation framework at Mahindra Logistics using Selenium WebDriver, Java, TestNG, and Maven.
                        Implemented automated testing processes, boosting efficiency by 70% and ensuring rigorous software compliance with project requirements."
                    />
                    <ResumeCard
                        title="React.js Developer Intern, The Devisor (Software Development Organization)"
                        subtitle="Google Out Tech - (June-2023 - July-2023)"
                        result="The Devisor"
                        des="Successfully completed a rigorous one-month internship program focused onReact.js development.
                        Engaged in hands-on coding and implementation of React.js components and features, gaining practical
                        experience in front-end web development."
                    />
                </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Experience;