import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1,transition:{duration:.6}}} className="w-full flex flex-col lg:flex-row  gap-20">
      <div>
        <div className="lg:py-12 py-4  font-titleFont">
          <p className="text-sm text-designColor tracking-[4px]">2020 - 2023</p>
          <h2 className="lg:text-4xl text-2xl font-bold">Development and programming</h2>
        </div>
        <div className="mt-4 lg:mt-14 h-auto w-full border-l-[6px] border-l-black border-opacity-30
                    flex flex-col gap-4 lg:gap-10">
          <ResumeCard
            title="Hactoberfest'22 contributor"
            subTitle="Open source contributor to Hactoberfest22"
            result="Success"
            des="jj"
          />
          <ResumeCard
            title="Solved 600+ problems on GFG"
            subTitle="Lorem ipsum dolor sit amet alternative."
            result="600+"
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora itaque accusamus corporis dolor debitis natus sapiente, voluptates possimus minima totam!"
          />
          <ResumeCard
            title="Serve as Technical Head in Spitit'23"
            subTitle="Lorem ipsum dolor sit amet alternative."
            result="Success"
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora itaque accusamus corporis dolor debitis natus sapiente, voluptates possimus minima totam!"
          />
        </div>
      </div>
      <div>
        <div className="lg:py-12 py-4 font-titleFont">
          <p className="text-sm text-designColor tracking-[4px]">2020 - 2023</p>
          <h2 className="lg:text-4xl text-2xl font-bold">Sports and other activity</h2>
        </div>
        <div className="mt-4 lg:mt-14 h-auto w-full border-l-[6px] border-l-black border-opacity-30
                    flex flex-col gap-4 lg:gap-10">
          <ResumeCard
            title="Silver medal in boxing (HSC IIT BHU)"
            subTitle="Lorem ipsum dolor sit amet alternative."
            result="Silver"
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora itaque accusamus corporis dolor debitis natus sapiente, voluptates possimus minima totam!"
          />
          <ResumeCard
            title="Member of Volleyball club"
            subTitle="Lorem ipsum dolor sit amet alternative."
            result="Success"
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora itaque accusamus corporis dolor debitis natus sapiente, voluptates possimus minima totam!"
          />
          {/* <ResumeCard
            title="Lorem ipsum dolor sit amet."
            subTitle="Lorem ipsum dolor sit amet alternative."
            result="Success"
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora itaque accusamus corporis dolor debitis natus sapiente, voluptates possimus minima totam!"
          /> */}
        </div>
      </div>
    </motion.div>
  );
};

export default Achievement;