import { FC } from 'react'
import { NavLink } from 'react-router-dom'
import { ROUTES } from '@/constants'

interface NavbarLinksProps {}

const NavbarLinks: FC<NavbarLinksProps> = () => (
  <ul className="navbar-nav">
    {ROUTES.map(({ path, label }) => (
      <li className="nav-item" key={label}>
        <NavLink className="nav-link" aria-current="page" to={path}>{label}</NavLink>
      </li>
    ))}
  </ul>
)

export default NavbarLinks
