import React from "react";

const About = () => {
  return (
    <section id="about" className="py-16 bg-gray-800 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-teal-500 mb-6">About Me</h2>
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/3 mb-8">
            <img
              src="/path-to-your-image.jpg"
              alt="About Me"
              className="rounded-lg w-full"
            />
          </div>
          <div className="w-full md:w-2/3">
            <p className="text-lg">
              Hello! I'm a passionate web developer with experience in building
              beautiful and functional websites. I specialize in frontend
              development, particularly with ReactJS and TailwindCSS. I am
              always eager to learn new technologies and improve my skills.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
