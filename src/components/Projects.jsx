import "../css/projects.css";

function Projects() {

  const projects = [
    {
      title: "Come Again Restaurant",
      description:
        "A full-stack restaurant ordering platform with authentication, online payments, admin management and customer reviews.",
      tech:
        "React, Node.js, Express, MongoDB, Paystack",
      demo:
        "https://come-again.vercel.app/",
      github:
        "https://github.com/Juizpapi/ComeAgain.git"
    },

    {
      title: "AddTech Fabrication Engineering",
      description:
        "A modern company website for a fabrication engineering business featuring services, project showcases, videos, image sliders and contact integration.",
      tech:
        "React, Vite, CSS, Swiper.js",
      demo:
        "https://addtech-fabrication.vercel.app/",
      github:
        "https://github.com/Juizpapi/addtech-fabrication.git"
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
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo
              </a>


              <a 
                href={project.github}
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