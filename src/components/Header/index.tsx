import { NavLink } from 'react-router-dom'
import { logo } from '@/assets'

const Header = () => (
  <nav className="navbar navbar-expand-lg py-0 background-navbar">
    <div className="container-fluid">

      <NavLink className="navbar-brand py-0" to="/">
        <img src={logo} alt="Logo" width="75" height="75" />
      </NavLink>

      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#nav-content" aria-controls="nav-content" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      
      <div className="justify-content-between mt-4 mt-lg-0 collapse navbar-collapse" id="nav-content">
        <form className="d-flex" role="search" onSubmit={(event) => event.preventDefault()}>
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-dark" type="submit">Search</button>
        </form>

        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink className="nav-link" aria-current="page" to="/sell">Vender</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/register">Registrarse</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/login">Ingresar</NavLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
)

export default Header
