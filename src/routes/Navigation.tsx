import {
  BrowserRouter, NavLink, Navigate, Route, Routes
} from 'react-router-dom'
import Layout from '@/components/Layout'
import { ROUTES } from '@/constants'

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
  
      <Layout>
        <Routes>
          {ROUTES.map(({ path, element, needsLayout }) => (
            <Route 
              key={path}
              path={path} 
              element={needsLayout ? <Layout>{element()}</Layout> : element()}
            />
          ))}
          <Route path="/*" element={<Navigate to="/home" replace />} />
        </Routes>
      </Layout>
    </div>
  </BrowserRouter>
)

export default Navigation
