import React from "react";
import AboutImg from "../../assets/man.png";

const About = () => {
  return (
    <section
      id="About"
      className="bg-white text-gray-800 px-6 md:px-20 py-20"
    >
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-blue-700 font-semibold text-lg tracking-wide uppercase">
          About Me
        </h2>
        <h1 className="text-3xl md:text-5xl font-bold mt-2">
          Who is Alok Ranjan?
        </h1>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-sm md:text-md">
          Alok Ranjan is a Full Stack Developer who blends frontend finesse with backend logic.
          He's passionate about solving real-world problems using clean and scalable code.
        </p>
      </div>

      {/* Top Section */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left: Image */}
        <img
          src={AboutImg}
          alt="Alok Ranjan"
          className="w-72 h-72 object-cover rounded-xl shadow-md"
        />

        {/* Right: Description & Button */}
        <div className="space-y-6 text-center md:text-left">
          <p className="text-md md:text-lg">
            I’m skilled in React, Node.js, MongoDB, and Tailwind CSS, with hands-on experience building full-stack apps from scratch. I also enjoy deploying and managing apps on platforms like Vercel and Netlify.
          </p>

          {/* Quick Stats */}
          <div className="flex justify-center md:justify-start gap-6 text-center">
            <div>
              <h2 className="text-3xl font-bold text-blue-700">10+</h2>
              <p className="text-xs text-gray-500">Projects Completed</p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-blue-700">5+</h2>
              <p className="text-xs text-gray-500">Tech Stacks Used</p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-blue-700">1+</h2>
              <p className="text-xs text-gray-500">Years Experience</p>
            </div>
          </div>

          {/* Button */}
          <a
            href="/Resume_Alok_Full.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 px-6 py-3 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition font-medium"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
