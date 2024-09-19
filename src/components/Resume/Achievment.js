import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1,transition:{duration:.6}}} className="w-full flex flex-col lg:flex-row  gap-20">
      <div >
        <div className="lg:py-12 py-4  font-titleFont">
          <p className="text-sm text-designColor tracking-[4px]">2020 - 2023</p>
          <h2 className="lg:text-4xl text-2xl font-bold">Development and programming</h2>
        </div>
        <div className="mt-4 lg:mt-14  h-auto border-l-[6px] border-l-black border-opacity-30
        flex flex-col gap-4 lg:gap-10">
          <ResumeCard
            title="Hactoberfest'22 contributor"
            subTitle="Open source contributor to Hactoberfest22"
            result="Success"
            des="Successfully participated in Hacktoberfest'22, a global event promoting open-source contributions and collaboration.
            Completed all four level badges"
          />
          <ResumeCard
            title="Solved 2000+ problems on Data Structure and Algorithm"
            subTitle="Lorem ipsum dolor sit amet alternative."
            result="2000+"
            des="Solved 2000+ problems on data structure and algorithms from various plateform like Leetcode, GFG,
            InterviewBit, CodingNinjas. Having a deep understanding and problem solving skill."
          />

          <ResumeCard
            title="Gold medal in Kabaddi (HSC IIT BHU)"
            subTitle="Lorem ipsum dolor sit amet alternative."
            result="Gold"
            des="Demonstrated exceptional Kabaddi skills and sportsmanship, securing the gold medal in a highly competitive
            tournament. Represented my hostel with pride to the overall success of the team."
          />
          
        </div>
      </div>
      <div>
        <div className="lg:py-12 py-4 font-titleFont">
          <p className="text-sm text-designColor tracking-[4px]">2020 - 2023</p>
          <h2 className="lg:text-4xl text-2xl font-bold">Sports and other activity</h2>
        </div>
        <div className="mt-4 lg:mt-14 h-auto border-l-[6px] border-l-black border-opacity-30
        flex flex-col gap-4 lg:gap-10">
           
          <ResumeCard
            title="Serve as Technical Head in Spitit'23"
            subTitle="Lorem ipsum dolor sit amet alternative."
            result="Success"
            des="Successfully led the technical team in organizing and managing the departmental fest.
            Led a team of 7 members to develop a high-traffic website capable of handling over1000+ attendees."
          />
          <ResumeCard
            title="Silver medal in boxing (HSC IIT BHU)"
            subTitle="Lorem ipsum dolor sit amet alternative."
            result="Silver"
            des="Demonstrated exceptional boxing skills and sportsmanship, securing the silver medal in a highly competitive
            tournament. Represented my hostel with pride to the overall success of the team."
          />
          <ResumeCard
            title="Member of Volleyball club"
            subTitle="Lorem ipsum dolor sit amet alternative."
            result="Success"
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora itaque accusamus corporis dolor debitis natus sapiente, voluptates possimus minima totam!"
          />
          
        </div>
      </div>
    </motion.div>
  );
};

export default Achievement;