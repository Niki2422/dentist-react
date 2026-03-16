import "../styles/navbar.css"

function Navbar() {

  return (
    <nav className="navbar">

      <div className="navbar-logo">
        DentistReact
      </div>

      <ul className="navbar-links">
        <li><a href="#services">Servicios</a></li>
        <li><a href="#gallery">Galería</a></li>
        <li><a href="#about">Nosotros</a></li>
        <li><a href="#contact">Contacto</a></li>
      </ul>

    </nav>
  )
}

export default Navbar