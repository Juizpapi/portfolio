import "../css/skills.css";

function Skills({ id }) {

  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node.js",
    "Express",
    "MongoDB",
    "Git & GitHub"
  ];


  return (

    <section className="skills" id={id}>

      <h2>My Skills</h2>


      <div className="skills-container">

        {skills.map((skill, index) => (

          <div 
            className="skill-card" 
            key={index}
          >
            {skill}

          </div>

        ))}

      </div>


    </section>

  );

}


export default Skills;