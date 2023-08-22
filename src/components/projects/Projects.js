import React from "react";
import Title from "../layouts/Title";
import { projectOne, projectTwo, projectThree } from "../../assets/index";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Workforce Management Solution"
          des=" I developed a workforce management application in React JS that helps businesses optimize their workforce. The application is user-friendly and interactive, and it is scalable and reliable. I am proficient in React JS and I am familiar with the workforce management domain. I am a creative and detail-oriented developer who is committed to creating high-quality workforce management applications."
          src={projectOne}
        />
        <ProjectsCard
          title="Todo App"
          des="  developed a full stack todo app using the MERN stack (MongoDB, Express, React, and Node.js). The app allows users to create, delete, view, and update their todo items. It is a user-friendly and interactive application that is scalable and reliable."
          src={projectTwo}
        />
        <ProjectsCard
          title="Chatting App"
          des=" Currently working on Chatting web App."
          src={projectThree}
        />
      
      </div>
    </section>
  );
};

export default Projects;
