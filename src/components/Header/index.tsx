import { NavLink } from 'react-router-dom'
import { logo } from '@/assets'
import { useConsumerUserProvider } from '@/hooks'
import NavbarLinks from '../NavbarLinks'
import UserPanel from '../UserPanel'

const Header = () => { 
  const { userAuthenticated, logout } = useConsumerUserProvider()
  const { fullName } = userAuthenticated

  const userName = fullName.split(' ')[0]

  return (
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
            <div className="input-group">
              <input type="text" className="form-control" placeholder="Buscar..." aria-label="Search" aria-describedby="search" />
              <button className="btn btn-outline-secondary" type="submit" id="search">
                <i className="bi bi-search" />
              </button>
            </div>
          </form>

          {
            userAuthenticated.token
              ? <UserPanel logout={logout} userName={userName} />
              : <NavbarLinks />
          }
        </div>
      </div>
    </nav>
  ) 
}

export default Header
