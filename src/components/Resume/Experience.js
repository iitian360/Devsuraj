import React from "react";
import ResumeCard from "./ResumeCard";
import { motion } from "framer-motion";
const Experience = () => {
    return (
        <motion.div initial={{opacity:0}} animate={{opacity:1,transition:{duration:.6}}} className="w-full flex-col lg:flex-row gap-20">
            <div>
                <div className="lg:py-12 py-4 font-titleFont">
                    <p className="text-sm text-designColor tracking-[4px]">2010 - 2022</p>
                    <h2 className="lg:text-4xl text-2xl font-bold">Job Experience</h2>
                </div>
                <div className="mt-4 lg:mt-14 h-auto w-full border-l-[6px] border-l-black border-opacity-30
                    flex flex-col lg:gap-10 gap-4">
                    <ResumeCard
                        title="Sr. Software Engineer"
                        subTitle="Google Out Tech - (2017 - Present)"
                        result="USA"
                        des="Google's hiring process is an important part of our culture. Googlers care deeply about their teams and the people who make them up."
                    />
                    <ResumeCard
                        title="Web Developer & Trainer"
                        subTitle="Apple Developer Team - (2012 - 2016)"
                        result="MALAYSIA"
                        des="A popular destination with a growing number of highly qualified homegrown graduates, it's true that securing a role in Malaysia isn't easy."
                    />
                    <ResumeCard
                        title="Front-end Developer"
                        subTitle="Nike - (2020 - 2011)"
                        result="Oman"
                        des="The Oman economy has grown strongly over recent years, having transformed itself from a producer and innovation-based economy."
                    />
                </div>
            </div>
            <div>
                <div className="lg:py-12 py-4 font-titleFont">
                    <p className="text-sm text-designColor tracking-[4px]">2001 - 2020</p>
                    <h2 className="lg:text-4xl text-2xl font-bold">Trainer Experience</h2>
                </div>
                <div className="mt-4 lg:mt-14 w-full h-auto border-l-[6px] border-l-black border-opacity-30 flex flex-col lg:gap-10 gap-4">
                    <ResumeCard
                        title="Gym Instructor"
                        subTitle="Rainbow Gym Center (2015 - 2020)"
                        result="DHAKA"
                        des="The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture."
                    />
                    <ResumeCard
                        title="Web Developer and Instructor"
                        subTitle="SuperKing College (2010 - 2014)"
                        result="CANADA"
                        des="Higher education is tertiary education leading to award of an academic degree. Higher education, also called post-secondary education."
                    />
                    <ResumeCard
                        title="School Teacher"
                        subTitle="Kingstar Secondary School (2001 - 2010)"
                        result="NEVADA"
                        des="Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale."
                    />
                </div>
            </div>
        </motion.div>
    );
};

export default Experience;