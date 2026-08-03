import { useState, useEffect } from "react";
import "../css/navbar.css";

function Navbar() {

  const [activeSection, setActiveSection] = useState("home");


  useEffect(() => {

    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {

        entries.forEach((entry) => {

          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }

        });

      },
      {
        threshold: 0.5
      }
    );


    sections.forEach((section) => {
      observer.observe(section);
    });


    return () => observer.disconnect();

  }, []);



  return (
    <nav>

      <h2>Michael.dev</h2>


      <ul>

        <li>
          <a
            href="#home"
            className={activeSection === "home" ? "active" : ""}
          >
            Home
          </a>
        </li>


        <li>
          <a
            href="#about"
            className={activeSection === "about" ? "active" : ""}
          >
            About
          </a>
        </li>


        <li>
          <a
            href="#skills"
            className={activeSection === "skills" ? "active" : ""}
          >
            Skills
          </a>
        </li>


        <li>
          <a
            href="#projects"
            className={activeSection === "projects" ? "active" : ""}
          >
            Projects
          </a>
        </li>


        <li>
          <a
            href="#contact"
            className={activeSection === "contact" ? "active" : ""}
          >
            Contact
          </a>
        </li>


      </ul>

    </nav>
  );
}

export default Navbar;