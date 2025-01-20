import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted");
    // You can implement the actual form submission logic here
  };

  return (
    <section id="contact" className="py-16 bg-gray-800 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-teal-500 mb-6">Contact Me</h2>
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/3 mb-8">
            <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
            <p className="mb-6">
              Feel free to send me a message. I would love to connect with you!
            </p>
            <div className="space-y-4">
              <div className="flex items-center text-teal-500">
                <i className="fas fa-phone-alt mr-3"></i>
                <span>(123) 456-7890</span>
              </div>
              <div className="flex items-center text-teal-500">
                <i className="fas fa-envelope mr-3"></i>
                <span>example@example.com</span>
              </div>
            </div>
          </div>
          <div className="w-full md:w-2/3">
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full p-4 bg-gray-700 text-white rounded-lg"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="w-full p-4 bg-gray-700 text-white rounded-lg"
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                className="w-full p-4 bg-gray-700 text-white rounded-lg"
                rows="6"
              />
              <button
                type="submit"
                className="w-full bg-teal-500 py-3 text-white rounded-lg"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
