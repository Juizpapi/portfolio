import "../css/projects.css";

function Projects() {

  const projects = [
    {
      title: "Come Again Restaurant",
      description:
        "A full-stack restaurant ordering platform with authentication, online payments, admin management and customer reviews.",
      tech:
        "React, Node.js, Express, MongoDB, Paystack"
    }
  ];


  return (

    <section className="projects" id="projects">

      <h2>My Projects</h2>


      <div className="projects-container">

        {projects.map((project, index) => (

          <div 
            className="project-card"
            key={index}
          >

            <h3>
              {project.title}
            </h3>


            <p>
              {project.description}
            </p>


            <span>
              {project.tech}
            </span>


 <div className="project-buttons">

  <a 
    href="https://come-again.vercel.app/"
    target="_blank"
    rel="noopener noreferrer"
  >
    Live Demo
  </a>


  <a 
    href="https://github.com/Juizpapi/ComeAgain.git"
    target="_blank"
    rel="noopener noreferrer"
  >
    GitHub
  </a>

</div>

          </div>

        ))}


      </div>


    </section>

  );
}

export default Projects;