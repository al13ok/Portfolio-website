import React from "react";
import ProjectCard from "./ProjectCard";

// Alag-alag images import kiye
import healthImg from "../../assets/img1.png";
import jnImg from "../../assets/img2.png";
import aiImg from "../../assets/img3.png";

const Projects = () => {
  return (
    <div id="Projects" className="p-10 md:p-24 text-blue-700">
      <h1 className="text-2xl md:text-4xl font-bold">Projects</h1>
     <div className="py-12 px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center">
    <ProjectCard
          title="BookMyDoc - Healthcare Website"
          main="A fully responsive healthcare website built for a client using React, Tailwind CSS, Node.js, Express.js, and MongoDB. Features include appointment booking, SEO optimization, and real-time admin dashboard."
          demoLink="https://ranjan-healthcare-r.vercel.app/"
          codeLink="https://github.com/al13ok/HEALTHCARE-WEBSITE"
          image={healthImg}
        />
        <ProjectCard
          title="JNKT Cricket Academy Website"
          main="A responsive website for JNKT Cricket Academy showcasing training programs, coach info, gallery, and contact form. Built with React, Tailwind CSS, and Firebase."
          demoLink="https://jnkt-cricket-academy-kdca.vercel.app/"
          codeLink="https://github.com/al13ok/JNKT-ACADEMY-WEBSITE"
          image={jnImg}
        />
        <ProjectCard
          title="AI Trip Planner"
          main="An AI-powered trip planner using Gemini AI and Google Places API to generate smart itineraries. Includes Google Auth and Firebase Firestore."
          demoLink="https://github.com/al13ok/AI-TRIP-PLANNER"
          codeLink="https://github.com/al13ok/AI-TRIP-PLANNER"
          image={aiImg}
        />
      </div>
    </div>
  );
};

export default Projects;
