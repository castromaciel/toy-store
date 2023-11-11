import {
  BrowserRouter, NavLink, Navigate, Route, Routes
} from 'react-router-dom'

const Navigation = () => (
  <BrowserRouter>
    <div className="main-layout">
      <nav>
        <img src="/react.svg" alt="react logo" width={100} />
        <ul>
          <li key="login">
            <NavLink
              to="/login"
              className={({ isActive }) => (isActive ? 'nav-active' : '')}
            >
              Login
            </NavLink>
          </li>
          <li key="home">
            <NavLink
              to="/home"
              className={({ isActive }) => (isActive ? 'nav-active' : '')}
            >
              Home
            </NavLink>
          </li>
        </ul>

      </nav>

      <Routes>
        <Route key="login-route" path="login" element={<h1>Login</h1>} />
        <Route key="home-route" path="home" element={<h1>Home</h1>} />

        <Route path="/*" element={<Navigate to="/home" replace />} />
      </Routes>
    </div>
  </BrowserRouter>
)

export default Navigation