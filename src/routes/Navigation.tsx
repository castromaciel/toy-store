import {
  BrowserRouter, Navigate, Route, Routes
} from 'react-router-dom'
import { ROUTES } from '@/constants'
import Layout from '@/layout'
import ProtectedRoutes from './ProtectedRoutes'

const Navigation = () => (
  <BrowserRouter>
    <Layout>

      <Routes>
        {/* Rutas públicas */}
        {ROUTES.filter((route) => !route.isPrivate).map(({ path, element: Element }) => (
          <Route 
            key={path}
            path={path} 
            element={<Element />}
          />
        ))}

        <Route path="/" element={<ProtectedRoutes />}>
          {ROUTES.filter((route) => route.isPrivate).map(({ path, element: Element }) => (
            <Route 
              key={path}
              path={path} 
              element={<Element />}
            />
          ))}
        </Route>

        <Route path="/*" element={<Navigate to="/" replace />} />
      </Routes>
    </Layout>
  </BrowserRouter>
)

export default Navigation
