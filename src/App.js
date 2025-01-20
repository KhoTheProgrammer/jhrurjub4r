import React, { useState } from "react";
import "./App.css";

function App() {
  const [activeTab, setActiveTab] = useState("skills");
  const [menuOpen, setMenuOpen] = useState(false);

  const opentab = (tabname) => {
    setActiveTab(tabname);
  };

  const openmenu = () => {
    setMenuOpen(true);
  };

  const closemenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <meta charSet="UTF-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <title>Kondwani Padyera</title>
      <link rel="stylesheet" href="style.css" />
      <div id="header">
        <div className="container">
          <nav>
            <img src="IMAGES/logo.png" alt="Logo" className="logo" />
            <ul
              id="sidemenu"
              style={{
                right: menuOpen ? "0" : "-200px",
              }}
            >
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#portfolio">Portfolio</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
              <i className="fa-solid fa-xmark" onClick={closemenu} />
            </ul>
            <i className="fa-solid fa-bars" onClick={openmenu} />
          </nav>
          <div className="header-text">
            <p>Full Stack Developer</p>
            <h1>
              Hi, I'm <span>Kondwani</span> <br />
              Padyera From Malawi
            </h1>
          </div>
        </div>
      </div>
      {/*-----------------------ABOUT----------------*/}
      <div id="about">
        <div className="container">
          <div className="row">
            <div className="about-col-1">
              <img src="IMAGES/aboutUs.jpg" alt="About Me" />
            </div>
            <div className="about-col-2">
              <h1 className="subtitle">About me</h1>
              <p>
                As a third-year Computer Science student at the University of
                Malawi, I specialize in Full Stack Development with a proven
                ability to design, develop, and deploy dynamic web applications.
                Proficient in React, Tailwind CSS, and NestJS, I also bring
                expertise in Java, JavaScript, and C++. I thrive in
                collaborative, agile environments, combining technical knowledge
                with a results-driven mindset to deliver impactful solutions
                that meet business objectives.
              </p>
              <div className="tab-titles">
                <p
                  className={`tab-links ${
                    activeTab === "skills" ? "active-link" : ""
                  }`}
                  onClick={() => opentab("skills")}
                >
                  Skills
                </p>
                <p
                  className={`tab-links ${
                    activeTab === "experience" ? "active-link" : ""
                  }`}
                  onClick={() => opentab("experience")}
                >
                  Experience
                </p>
                <p
                  className={`tab-links ${
                    activeTab === "education" ? "active-link" : ""
                  }`}
                  onClick={() => opentab("education")}
                >
                  Education
                </p>
              </div>
              <div
                className={`tab-contents ${
                  activeTab === "skills" ? "active-tab" : ""
                }`}
                id="skills"
              >
                <ul>
                  <li>
                    <span>Web Development</span>
                    <br />
                    React, NestJs, Tailwind CSS
                  </li>
                  <li>
                    <span>Programming</span>
                    <br />
                    Java, Javascript, C++, Assembly Language, C
                  </li>
                  <li>
                    <span>Database Management</span>
                    <br />
                    Postgresql
                  </li>
                  <li>
                    <span>Development Tools</span>
                    <br />
                    Visual Studio Code, Postman
                  </li>
                  <li>
                    <span>Version Control</span>
                    <br />
                    Git, Github
                  </li>
                </ul>
              </div>
              <div
                className={`tab-contents ${
                  activeTab === "experience" ? "active-tab" : ""
                }`}
                id="experience"
              >
                <ul>
                  <li>
                    <span>Web Chat Application (2024 - 2025)</span>
                    <br />
                    <i>Role: </i>
                    <span className="role">Full Stack Developer</span>
                    <br />
                    Currently Developing a real-time chat application to
                    facilitate user communication.
                  </li>
                  <li>
                    <span>DHIS2 Reminder Application (2024-2025)</span>
                    <br />
                    <i>Role: </i>
                    <span className="role">Developer</span>
                    <br />
                    Created an app for sending health reminders, enhancing
                    healthcare accessibility.
                  </li>
                  <li>
                    <span>Konektus (2024)</span>
                    <br />
                    <i>Role: </i>
                    <span className="role">Developer</span>
                    <br />
                    Built a platform connecting local farmers with buyers.
                  </li>
                  <li>
                    <span>Personal Portfolio Website (2024)</span>
                    <br />
                    <i>Role: </i>
                    <span className="role">Developer</span>
                    <br />
                    Designed and implemented a personal portfolio website
                    showcasing projects and skills.
                  </li>
                </ul>
              </div>
              <div
                className={`tab-contents ${
                  activeTab === "education" ? "active-tab" : ""
                }`}
                id="education"
              >
                <ul>
                  <li>
                    <span>2022 - Current</span>
                    <br />
                    Bachelor of Science in Computer Science
                  </li>
                  <li>
                    <span>2024</span>
                    <br />
                    Certificate of completion in Introduction to DHIS2 from
                    DHIS2 academy
                  </li>
                  <li>
                    <span>2024</span>
                    <br />
                    Certificate of completion in seeds for the future program
                    from HUAWEI
                  </li>
                  <li>
                    <span>2023</span>
                    <br />
                    Certificate of completion in introduction to Java
                    Programming from Sololearn
                  </li>
                  <li>
                    <span>2021</span>
                    <br />
                    Certificate of attendance in introduction to computer skills
                  </li>
                  <li>
                    <span>2023-2024</span>
                    <br />
                    Dean's List for Academic Excellence with GPA of 3.8 (Year 1)
                    and 3.9 (Year 2)
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Remaining JSX sections */}
      {/*-------------PORTFOLIO----------*/}
      <div id="portfolio">
        <div className="container">
          <h1 className="subtitle">My Projects</h1>
          <div className="work-list">
            <div className="work">
              <img src="IMAGES/home.jpg" alt="" />
              <div className="layer">
                <h3>Business Artwork</h3>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Accusantium odio dicta unde iusto minima nulla doloribus illo,
                  commodi laboriosam consectetur. Consectetur nesciunt expedita
                  voluptate nam quas! Eum cupiditate explicabo ipsa!
                </p>
                <a href="#">
                  <i className="fa-solid fa-up-right-from-square" />
                </a>
              </div>
            </div>
            <div className="work">
              <img src="IMAGES/Screenshot (30).png" alt="" />
              <div className="layer">
                <h3>Web Application</h3>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Accusantium odio dicta unde iusto minima nulla doloribus illo,
                  commodi laboriosam consectetur. Consectetur nesciunt expedita
                  voluptate nam quas! Eum cupiditate explicabo ipsa!
                </p>
                <a href="#">
                  <i className="fa-solid fa-up-right-from-square" />
                </a>
              </div>
            </div>
            <div className="work">
              <img src="IMAGES/Screenshot (31).png" alt="" />
              <div className="layer">
                <h3>Biography</h3>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Accusantium odio dicta unde iusto minima nulla doloribus illo,
                  commodi laboriosam consectetur. Consectetur nesciunt expedita
                  voluptate nam quas! Eum cupiditate explicabo ipsa!
                </p>
                <a href="#">
                  <i className="fa-solid fa-up-right-from-square" />
                </a>
              </div>
            </div>
          </div>
          <a href="" className="btn">
            See More
          </a>
        </div>
      </div>
      {/*---------------------CONTACT-----------*/}
      <div id="contact">
        <div className="container">
          <div className="row">
            <div className="contact-left">
              <h1 className="subtitle">Contact Me</h1>
              <a
                href="mailto:kondwanipadyera@gmail.com"
                className="contact-links"
              >
                <p>kondwanipadyera@gmail.com</p>
              </a>
              <a href="tel:+265887107311" className="contact-links">
                <p>+265887107311</p>
              </a>
              <div className="social-icons">
                <a href="https://www.facebook.com/profile.php?id=100084319704616">
                  <i className="fa-brands fa-facebook" />
                </a>
                <a href="https://www.linkedin.com/in/kondwani-padyera-9a511a26b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                  <i className="fa-brands fa-linkedin" />
                </a>
                <a href="https://www.instagram.com/padyerakondwani?utm_source=qr&igsh=Y3F5Zjh3b2F3ZWdp">
                  <i className="fa-brands fa-instagram" />
                </a>
                <a href="https://x.com/KPadyera?t=55bmJblVSq4lthSdrhm2Ow&s=09">
                  <i className="fa-brands fa-x-twitter" />
                </a>
                <a href="">
                  <i className="fa-brands fa-whatsapp" />
                </a>
              </div>
              <a
                href="IMAGES/Blue Simple Professional CV Resume.pdf"
                download=""
                className="btn btn2"
              >
                Download Resume
              </a>
            </div>
            <div className="contact-right">
              <form action="">
                <input
                  type="text"
                  name="Name"
                  placeholder="Your Name"
                  required=""
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your email"
                  required=""
                />
                <textarea
                  name="message"
                  rows={6}
                  placeholder="Your message"
                  defaultValue={""}
                />
                <button type="submit" className="btn btn2">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="copyright">
          <p>Designed and developed by Kondwani Padyera</p>
          <p>Copyright @ KHOO 2024</p>
        </div>
      </div>
    </>
  );
}

export default App;
