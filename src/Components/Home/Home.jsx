import React from "react";
import avatarImg from "../../assets/mann.png";
import TextChange from "../TextChange";

const Home = () => {
  return (
    <section
      id="Home"
      className="bg-white min-h-screen flex flex-col-reverse md:flex-row items-center justify-center md:justify-between px-6 md:px-20 py-12 gap-10"
    >
      {/* Left Content */}
      <div className="md:w-1/2 space-y-4 md:space-y-6 text-center md:text-left">
        <h1 className="text-3xl md:text-5xl font-bold leading-tight">
          <TextChange />
        </h1>
        
        <div className="flex gap-4 mt-5 md:mt-10">
  <a
    href="#Footer"
    className="text-white py-2 px-4 text-sm md:text-lg font-semibold rounded-3xl bg-blue-700 hover:bg-blue-800 transition"
  >
    Contact Me
  </a>

  <a
    href="/Alok-Ranjan-Resume.pdf"  // Ye file public folder mein honi chahiye
    target="_blank"
    rel="noopener noreferrer"
    className="text-blue-700 border-2 border-blue-700 py-2 px-4 text-sm md:text-lg font-semibold rounded-3xl hover:bg-blue-700 hover:text-white transition"
  >
    Resume
  </a>
</div>

      </div>

      {/* Right Image */}
      <div className="md:w-1/2 flex justify-center">
        <img
          src={avatarImg}
          alt="avatar"
          className="w-64 md:w-[360px] object-contain drop-shadow-xl"
        />
      </div>
    </section>
  );
};

export default Home;
