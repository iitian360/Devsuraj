import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1,transition:{duration:.6}}} className="w-full flex flex-col lg:flex-row  gap-20">
      <div>
        <div className="lg:py-12 py-4  font-titleFont">
          <p className="text-sm text-designColor tracking-[4px]">2007 - 2010</p>
          <h2 className="lg:text-4xl text-2xl font-bold">Company Experience</h2>
        </div>
        <div className="mt-4 lg:mt-14 h-auto w-full border-l-[6px] border-l-black border-opacity-30
                    flex flex-col gap-4 lg:gap-10">
          <ResumeCard
            title="Lorem ipsum dolor sit amet."
            subTitle="Lorem ipsum dolor sit amet alternative."
            result="Success"
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora itaque accusamus corporis dolor debitis natus sapiente, voluptates possimus minima totam!"
          />
          <ResumeCard
            title="Lorem ipsum dolor sit amet."
            subTitle="Lorem ipsum dolor sit amet alternative."
            result="Success"
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora itaque accusamus corporis dolor debitis natus sapiente, voluptates possimus minima totam!"
          />
          <ResumeCard
            title="Lorem ipsum dolor sit amet."
            subTitle="Lorem ipsum dolor sit amet alternative."
            result="Success"
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora itaque accusamus corporis dolor debitis natus sapiente, voluptates possimus minima totam!"
          />
        </div>
      </div>
      <div>
        <div className="lg:py-12 py-4 font-titleFont">
          <p className="text-sm text-designColor tracking-[4px]">2007 - 2010</p>
          <h2 className="lg:text-4xl text-2xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-4 lg:mt-14 h-auto w-full border-l-[6px] border-l-black border-opacity-30
                    flex flex-col gap-4 lg:gap-10">
          <ResumeCard
            title="Lorem ipsum dolor sit amet."
            subTitle="Lorem ipsum dolor sit amet alternative."
            result="Success"
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora itaque accusamus corporis dolor debitis natus sapiente, voluptates possimus minima totam!"
          />
          <ResumeCard
            title="Lorem ipsum dolor sit amet."
            subTitle="Lorem ipsum dolor sit amet alternative."
            result="Success"
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora itaque accusamus corporis dolor debitis natus sapiente, voluptates possimus minima totam!"
          />
          <ResumeCard
            title="Lorem ipsum dolor sit amet."
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