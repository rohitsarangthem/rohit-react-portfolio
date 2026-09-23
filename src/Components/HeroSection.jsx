
function HeroSection() {
  return (
    <section className="hero">
      {/* Hero */}
        <div className="hero-content">

          <p className="small-title">HELLO, I'M ROHIT 👋</p>

          <h1>
            I build modern
            <span> websites & web experiences.</span>
          </h1>

          <p className="hero-description">
            I'm a Web Developer focused on creating clean, responsive
            and user-friendly websites using modern web technologies.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="primary-button">
              View My Work
            </a>

            <a href="#contact" className="secondary-button">
              Contact Me
            </a>
          </div>

        </div>

        <div className="hero-card">
          <div className="code-window">

            <div className="window-header">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <pre>
{`const developer = {
  name: "Rohit",
  role: "Web Developer",
  skills: [
    "React",
    "JavaScript",
    "HTML",
    "CSS"
  ],
  learning: "MERN Stack"
};`}
            </pre>

          </div>
        </div>
      </section>
    );
}

export default HeroSection;