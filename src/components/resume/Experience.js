import React from "react";
import {motion} from "framer-motion"
import ResumeCard from "./ResumeCard";
import { barcode } from "../../assets";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2023 - 2024</p>
          <h2 className="text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">

<ResumeCard
  title="Research Intern"
  subTitle="Sciekore | AI & Machine Learning (20223 - 2024)"
  result="PAK"
  des={
    <div className="relative">
      <ul className="list-disc pl-5 space-y-1 text-sm">
        <li>Assisted in conducting research on <strong>House Price Prediction</strong> using Artificial Intelligence and Machine Learning techniques.</li>
        <li>Gained hands-on experience with research methodologies, data analysis, and model development.</li>
        <li>Learned and utilized various research tools and platforms relevant to AI and Machine Learning.</li>
        <li>Contributed to data collection, pre-processing, and feature engineering for the project.</li>
        <li>Analyzed large datasets using statistical methods and visualization techniques.</li>
        <li>Assisted in training and evaluating different machine learning models for house price prediction.</li>
      </ul>

      {/* Barcode positioned bottom right */}
      <div className="absolute bottom-0 right-0 mt-4">
        <img 
          src={barcode}
          alt="Certificate Verification Barcode"
          className="w-20 h-auto"
        />
        <p className="text-[10px] text-gray-500 text-center">
          Scan to verify
        </p>
      </div>
    </div>
  }
/>
<ResumeCard
  title="Web Developer "
  subTitle="Peritus Engineering | MERN Stack (2022 - 2023)"
  result="PAK"
  des={
    <ul className="list-disc pl-5 space-y-1 text-sm">
      <li>Developed web applications using the MERN stack for multiple projects, focusing on user-friendly interfaces.</li>
      <li>Completed final year project <strong>Workforce Management Solution</strong>, streamlining scheduling, task assignment, and performance tracking.</li>
      <li>Collaborated with the Peritus Engineering team; improved teamwork and project management skills.</li>
      <li>Continuously updated knowledge to stay current with web development trends.</li>
    </ul>
  }
/>

{/* OR — if ResumeCard uses children */}


          {
            <ResumeCard
            title="Internship Web Development"
            subTitle="Mern Stack - (2022 - 2023)"
            result="PAK"
            des="I have done 3 months internship as an Mern stack developer at Peritus Engineering."
          />
          }
        </div>
      </div>
      {/* <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2001 - 2020</p>
          <h2 className="text-4xl font-bold">Trainer Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
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
      </div> */}
    </motion.div>
  );
};

export default Experience;
