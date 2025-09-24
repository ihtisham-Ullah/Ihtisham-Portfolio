import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';
import { barcode } from '../../assets';


const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2016 - 2025</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education </h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
  title="Masters in High Integrity Systems"
  subTitle="Frankfurt University of Applied Sciences (Ongoing)"
  result="—"
  des="Currently pursuing a Master’s degree in High Integrity Systems, focusing on advanced computer science concepts, secure system design, and practical applications in critical domains."
/>
          <ResumeCard
            title="BS in Computer Science"
            subTitle="Szabist University Islamabad (2019 - 2023)"
            result="3.70/4"
            des="The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture."
          />
          <ResumeCard
            title="Intermediate - Computer Science"
            subTitle="F.G Inter College Batkhela (2018 - 2019)"
            result="A"
            des="Higher education is tertiary education leading to award of an academic degree. Higher education, also called post-secondary education."
          />
          <ResumeCard
            title="Matric"
            subTitle="Danish Public School Batkhela (2016 - 2017)"
            result="A"
            des="Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale."
          />
        </div>
      </div>
      {/* part Two */}

     <div>
  <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
    <p className="text-sm text-designColor tracking-[4px]">2023 - 2024</p>
    <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
  </div>

  {/* Removed fixed height */}
<div>
  {/* Section header */}
 

  {/* Timeline container */}
  <div className="mt-6 lgl:mt-14 w-full h-auto border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">

    {/* Research Intern ResumeCard */}
    <ResumeCard
      title="Research Intern"
      subTitle="Sciekore | AI & Machine Learning (2023 - 2024)"
      result="PAK"
      des={
        <div className="relative pb-24"> {/* padding bottom reserves space for barcode */}
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>Assisted in conducting research on <strong>House Price Prediction</strong> using Artificial Intelligence and Machine Learning techniques.</li>
            <li>Gained hands-on experience with research methodologies, data analysis, and model development.</li>
            <li>Learned and utilized various research tools and platforms relevant to AI and Machine Learning.</li>
            <li>Contributed to data collection, pre-processing, and feature engineering for the project.</li>
            <li>Analyzed large datasets using statistical methods and visualization techniques.</li>
            <li>Assisted in training and evaluating different machine learning models for house price prediction.</li>
          </ul>

          {/* Barcode positioned bottom right */}
          <div className="absolute bottom-0 right-0 flex flex-col items-center">
            <img 
              src={barcode}
              alt="Certificate Verification Barcode"
              className="w-20 h-auto"
            />
            <p className="text-[10px] text-gray-500 text-center mt-1">
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
  </div>
</div>
</div>
    </motion.div>
  );
}

export default Education