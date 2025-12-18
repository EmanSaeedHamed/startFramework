import { Link, NavLink } from 'react-router'
import './Navbar.css'
export default function Navbar() {
  return (
    <>
     <nav className="navbar fixed-top navbar-expand-lg py-4">
  <div className="container">
    <Link className="navbar-brand" to="/">
      START FRAMEWORK
    </Link>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item me-3">
          <NavLink className="nav-link rounded-3" aria-current="page" to="/about">
            ABOUT
          </NavLink>
        </li>
        <li className="nav-item me-3">
          <NavLink className="nav-link rounded-3" to="/portfolio">
            PORTFOLIO
          </NavLink>
        </li>
        <li className="nav-item me-3">
          <NavLink className="nav-link rounded-3" to="/contact">
            CONTACT
          </NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}
