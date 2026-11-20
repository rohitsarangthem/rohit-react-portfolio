import "./App.css";
import "./Components/Contact.css";
import HeroSection from "./Components/HeroSection";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Contact from "./Components/Contact";




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
            A selection of websites I've worked on, contributing to
            design, development, customization and user experience.
          </p>
        </div>

        <div className="projects-grid">

          <div className="project-card">
            <div className="project-number">01</div>
            <h3>Ayurveda College</h3>
            <p>
              An educational website for an Ayurvedic institution,
              featuring course information, programs and student resources.
            </p>
            <div className="project-tags">
              <span>WordPress</span>
              <span>Elementor</span>
              <span>CSS</span>
            </div>
          </div>

          <div className="project-card">
            <div className="project-number">02</div>
            <h3>Jacuzzis Florida</h3>
            <p>
              A product-focused website showcasing luxury hot tubs,
              spas and outdoor living solutions.
            </p>
            <div className="project-tags">
              <span>WordPress</span>
              <span>Elementor</span>
              <span>Responsive Design</span>
            </div>
          </div>

          <div className="project-card">
            <div className="project-number">03</div>
            <h3>Libertas Mind</h3>
            <p>
              A professional mental wellness website designed to
              present treatment services, resources and patient information.
            </p>
            <div className="project-tags">
              <span>WordPress</span>
              <span>Elementor</span>
              <span>CSS</span>
            </div>
          </div>

          <div className="project-card">
            <div className="project-number">04</div>
            <h3>Ardor Athletics</h3>
            <p>
              An athletics-focused website built to showcase sports,
              fitness and brand-related content.
            </p>
            <div className="project-tags">
              <span>WordPress</span>
              <span>Web Design</span>
              <span>CSS</span>
            </div>
          </div>

          <div className="project-card">
            <div className="project-number">05</div>
            <h3>Couture Jardin</h3>
            <p>
              A premium outdoor furniture website showcasing
              elegant collections and luxury outdoor living products.
            </p>
            <div className="project-tags">
              <span>WordPress</span>
              <span>Web Design</span>
              <span>CSS</span>
            </div>
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
          <a
            href="https://github.com/rohitsarangthem/"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/rohit-sarangthem/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>

          <a
            href="https://www.fiverr.com/s/gvy6j3A"
            target="_blank"
            rel="noopener noreferrer"
          >
            Fiverr
          </a>
        </div>

      </footer>

    </div>
  );
}

export default App;