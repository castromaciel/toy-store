/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { FC } from 'react'
import { NavLink } from 'react-router-dom'

interface UserPanelProps {
  logout: () => void
  userName: string
}

const UserPanel: FC<UserPanelProps> = ({ logout, userName }) => {
  const name = userName.split(' ')[0]
  
  return (
    <ul className="navbar-nav">
      <li className="nav-item">
        <NavLink className="nav-link" aria-current="page" to="/sell">Vender</NavLink>

      </li>
      <li className="nav-item">
        <span className="nav-link active">
          Hola, 
          {' '}
          {name}
          !
        </span>
      </li>

      <li className="nav-item cursor-pointer" onClick={logout}>
        <span className="nav-link">Salir</span>
      </li>
    </ul>
  ) 
}

export default UserPanel
