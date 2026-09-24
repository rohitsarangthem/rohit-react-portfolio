import "./App.css";
import "./Components/Contact.css";
import HeroSection from "./Components/HeroSection";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Contact from "./components/Contact";
import emailjs from "@emailjs/browser";


function App() {
  return (
    <div className="portfolio">

      {/* Navbar Component */}
      <Navbar />

      {/* Hero Section Component */}
      <HeroSection />

      {/* About Component */}
      <About />

      {/* Skills Component */}
      <Skills />



      {/* Projects */}
      <section className="section" id="projects">

        <p className="section-label">03 — PROJECTS</p>

        <div className="projects-heading">
          <h2>Selected work.</h2>
          <p>
            A few projects I've worked on and continue to build.
          </p>
        </div>

        <div className="projects-grid">

          <div className="project-card">
            <div className="project-number">01</div>

            <h3>Job Portal</h3>

            <p>
              A job information platform designed to help users discover
              the latest job opportunities and recruitment updates.
            </p>

            <div className="project-tags">
              <span>WordPress</span>
              <span>SEO</span>
              <span>PHP</span>
            </div>

            <a href="#" className="project-link">
              View Project ↗
            </a>
          </div>


          <div className="project-card">
            <div className="project-number">02</div>

            <h3>E-Commerce Store</h3>

            <p>
              A modern e-commerce website with responsive layouts,
              product pages and customized shopping experiences.
            </p>

            <div className="project-tags">
              <span>Shopify</span>
              <span>Liquid</span>
              <span>CSS</span>
            </div>

            <a href="#" className="project-link">
              View Project ↗
            </a>
          </div>


          <div className="project-card">
            <div className="project-number">03</div>

            <h3>React Portfolio</h3>

            <p>
              My first React project, built to learn components,
              JSX, state and modern frontend development.
            </p>

            <div className="project-tags">
              <span>React</span>
              <span>JavaScript</span>
              <span>CSS</span>
            </div>

            <a href="#" className="project-link">
              View Project ↗
            </a>
          </div>

        </div>

      </section>


      {/* Experience */}
      <section className="section experience">

        <p className="section-label">04 — EXPERIENCE</p>

        <div className="experience-item">

          <div>
            <span className="experience-year">
              2025 — Present
            </span>
          </div>

          <div>
            <h3>Junior Developer</h3>

            <p>
              Working on websites, landing pages, responsive interfaces,
              CMS customization and frontend development.
            </p>

            <div className="project-tags">
              <span>Web Development</span>
              <span>WordPress</span>
              <span>Shopify</span>
              <span>React</span>
              <span>Full Stack Web Apps</span>
            </div>
          </div>

        </div>

      </section>

      {/* Contact Component */}
      <Contact />


      {/* Footer */}
      <footer>

        <p>© 2026 Rohit Sarangthem</p>

        <div>
          <a href="#">GitHub</a>
          <a href="#">LinkedIn</a>
          <a href="#">Fiverr</a>
        </div>

      </footer>

    </div>
  );
}

export default App;