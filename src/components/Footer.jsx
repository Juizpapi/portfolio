import "../css/footer.css";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-brand">
          <h2>Michael Adeyemi</h2>

          <p>
            Full Stack Developer building modern,
            responsive and user-friendly web applications.
          </p>
        </div>


        <div className="footer-links">

          <h3>Quick Links</h3>

          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>

        </div>


        <div className="footer-social">

          <h3>Follow Me</h3>

          <div className="social-icons">

            <a href="https://github.com/Juizpapi" target="_blank">
              <FaGithub />
            </a>

            <a href="https://www.linkedin.com/in/michael-adeyemi-248484301?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank">
              <FaLinkedin />
            </a>

            <a href="https://x.com/juzpapi" target="_blank">
              <FaTwitter />
            </a>

          </div>

        </div>


      </div>


      <div className="footer-bottom">

        <p>
          © {new Date().getFullYear()} Michael Adeyemi.
          All rights reserved.
        </p>

      </div>


    </footer>
  );
}

export default Footer;