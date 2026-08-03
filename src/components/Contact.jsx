import { FaWhatsapp } from "react-icons/fa";
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

  <a
    href="mailto:miknelandex@gmail.com"
    className="contact-pill"
  >
    📧 Email
  </a>



  <a
    href="https://github.com/Juizpapi"
    target="_blank"
    rel="noopener noreferrer"
    className="contact-pill"
  >
    💻 GitHub
  </a>

  <a
    href="https://www.linkedin.com/in/michael-adeyemi-248484301"
    target="_blank"
    rel="noopener noreferrer"
    className="contact-pill"
  >
    🔗 LinkedIn
  </a>

</div>

<a
  href="https://wa.me/2347040313437?text=Hi%20Michael,%20I%20came%20across%20your%20portfolio%20and%20I'd%20like%20to%20discuss%20a%20project%20with%20you."
  target="_blank"
  rel="noopener noreferrer"
  className="send-button"
>
   <FaWhatsapp />
   WhatsApp
</a>


    </section>

  );

}


export default Contact;