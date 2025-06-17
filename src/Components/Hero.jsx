import React from "react";
import TextChange from "./TextChange"; // Import animated text component

const Hero = () => {
  return (
    <section className="min-h-screen bg-white flex items-center justify-center px-6 md:px-24">
      <div className="max-w-3xl">
        <p className="text-lg text-gray-600">Hello !</p>

        <h1 className="text-3xl md:text-5xl font-bold mt-2">
          <TextChange /> {/* Your animated text */}
          <br />
          Web Developer & AI Builder
        </h1>

        <p className="text-gray-500 text-md md:text-lg mt-4">
          Passionate full-stack developer skilled in React, Node.js, and AI tools.
          Building clean, scalable, and impactful web experiences.
        </p>

        <div className="mt-6 flex gap-4">
          <button className="bg-blue-700 hover:bg-blue-700 text-white px-6 py-2 rounded-full font-semibold transition">
            Hire Me
          </button>
          <a href="https://wa.me/91XXXXXXXXXX" target="_blank" rel="noopener noreferrer">
            <button className="border border-gray-400 hover:border-black text-black px-6 py-2 rounded-full font-semibold transition">
              WhatsApp
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
