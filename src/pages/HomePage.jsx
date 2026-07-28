import Navbar from "../components/Navbar";
import michael from "../assets/images/michael2.png";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import cv from "../assets/cv/Michael_Adeyemi_CV.pdf";
import { ReactTyped } from "react-typed";
import "../css/homepage.css";

function HomePage() {
  return (
    <>
      <Navbar />

      <section className="hero" id="home">

        <div className="hero-text">

<p className="availability">
  <span className="availability-dot"></span>
  Available for work
</p>

          <h1>
            Hi, I'm Michael
          </h1>

 <h2 className="typing">

  <ReactTyped
    strings={[
      "Full Stack Developer",
      "React Developer",
      "Node.js Developer"
    ]}
    typeSpeed={80}
    backSpeed={50}
    backDelay={1500}
    loop
  />

</h2>

<p>
  I create fast, responsive and user-friendly web applications
  with modern technologies like React, Node.js and MongoDB.
</p>

 <div className="hero-buttons">

  <button
    onClick={() =>
      document.getElementById("projects").scrollIntoView({
        behavior: "smooth",
      })
    }
  >
    View Projects
  </button>

  <a href={cv} download="Michael_Adeyemi_CV.pdf">
    <button>
      Download CV
    </button>
  </a>

</div>
        </div>

        <div className="hero-image">

  <img 
    src={michael} 
    alt="Michael Adeyemi"
  />

</div>

      </section>


<About id="about" />

<Skills id="skills" />

<Projects id="projects" />

<Contact id="contact" />

<Footer />

    </>
  );
}

export default HomePage;