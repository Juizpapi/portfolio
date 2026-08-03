import "../css/about.css";

function About({ id }) {
  return (
    <section className="about" id={id}>

      <h2>About Me</h2>

      <p>
        I'm Michael Adeyemi, a Full Stack Developer passionate about
        building modern websites and web applications.

        I specialize in creating responsive user interfaces,
        backend APIs, authentication systems, payment integrations,
        and database-driven applications.
      </p>

    </section>
  );
}

export default About;