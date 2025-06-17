import React from "react";

const ProjectCard = ({ title, main, demoLink, codeLink, image }) => {
  return (
    <div className="relative group p-5 flex flex-col w-80 min-h-[520px] bg-white backdrop-blur-xl text-black rounded-3xl shadow-lg border border-white/20 transition-all duration-300 hover:scale-[1.03] hover:shadow-xl">

      <img
        className="p-2 h-40 object-contain rounded-xl transition-transform duration-300 group-hover:scale-105"
        src={image}
        alt="project preview"
      />

      <h3 className="px-2 text-xl md:text-2xl font-bold text-black-500 leading-tight mt-4">
        {title}
      </h3>

      <p className="px-2 text-sm md:text-md text-gray-500 py-3 flex-grow">
        {main}
      </p>

      <div className="mt-auto p-2 flex flex-wrap gap-3">
        {demoLink && (
          <a
            href={demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-center text-white py-2 px-4 text-sm md:text-md hover:opacity-90 hover:scale-105 transition-all duration-300 font-semibold rounded-full bg-blue-600"
          >
            Live Demo
          </a>
        )}
        {codeLink && (
          <a
            href={codeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-center text-white py-2 px-4 text-sm md:text-md hover:opacity-90 hover:scale-105 transition-all duration-300 font-semibold rounded-full bg-gray-700"
          >
            Source Code
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
