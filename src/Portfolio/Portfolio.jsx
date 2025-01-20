import React from "react";
import Tabs from "./Tabs";

const Portfolio = () => {
  const tabs = [
    {
      name: "skills",
      label: "Skills",
      content: <div>Content for Skills</div>,
    },
    {
      name: "experience",
      label: "Experience",
      content: <div>Content for Experience</div>,
    },
    {
      name: "education",
      label: "Education",
      content: <div>Content for Education</div>,
    },
  ];

  return (
    <section id="portfolio" className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-teal-500 mb-6">Portfolio</h2>
        <Tabs tabs={tabs} />
      </div>
    </section>
  );
};

export default Portfolio;
