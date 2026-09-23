function Navbar() {
  return (
    <nav className="navbar">

      <div className="logo">
        RS.
      </div>

      <div className="nav-links" id="header">
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>

      <a href="#contact" className="nav-button">
        Let's Talk
      </a>

    </nav>
  );
}

export default Navbar;