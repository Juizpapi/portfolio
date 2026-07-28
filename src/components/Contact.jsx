
import "../css/contact.css";

function Contact() {

  return (

    <section className="contact" id="contact">

      <h2>Contact Me</h2>


      <p>
        Have a project in mind or want to work together?
        Feel free to reach out.
      </p>


<div className="contact-info">

  <p>
    📧 Email: 
    <a href="mailto:miknelandex@gmail.com">
      miknelandex@gmail.com
    </a>
  </p>


  <p>
    📍 Location: Lagos, Nigeria
  </p>


  <p>
    💻 GitHub:
    <a 
      href="https://github.com/Juizpapi"
      target="_blank"
      rel="noopener noreferrer"
    >
      Github
    </a>
  </p>


  <p>
    🔗 LinkedIn:
    <a 
      href="https://www.linkedin.com/in/michael-adeyemi-248484301?utm_source=share_via&utm_content=profile&utm_medium=member_android"
      target="_blank"
      rel="noopener noreferrer"
    >
      LinkedIn Profile
    </a>
  </p>

</div>

<a 
  href="mailto:miknelandex@gmail.com?subject=Portfolio Contact&body=Hi Michael, I would like to discuss a project with you."
  className="send-button"
>
  Send Message
</a>


    </section>

  );

}


export default Contact;