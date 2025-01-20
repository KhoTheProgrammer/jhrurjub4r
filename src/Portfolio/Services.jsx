import React from "react";

const Services = () => {
  return (
    <section id="services" className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-teal-500 mb-6">My Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:bg-teal-500 transform transition duration-300 hover:scale-105">
            <h3 className="text-xl font-semibold mb-4">Web Development</h3>
            <p>
              Building responsive and performant websites with modern
              technologies like ReactJS and TailwindCSS.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:bg-teal-500 transform transition duration-300 hover:scale-105">
            <h3 className="text-xl font-semibold mb-4">UI/UX Design</h3>
            <p>
              Creating user-friendly and intuitive designs that provide a
              seamless user experience.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:bg-teal-500 transform transition duration-300 hover:scale-105">
            <h3 className="text-xl font-semibold mb-4">Consultation</h3>
            <p>
              Offering expert consultation to help you take your project to the
              next level, whether it's a startup or a large business.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
