import {
  BrowserRouter, Navigate, Route, Routes
} from 'react-router-dom'
import Layout from '@/layout'
import { ROUTES } from '@/constants'

const Navigation = () => (
  <BrowserRouter>
    <Layout>
      <Routes>
        {ROUTES.map(({ path, element: Element }) => (
          <Route 
            key={path}
            path={path} 
            element={<Element />}
          />
        ))}
        <Route path="/*" element={<Navigate to="/home" replace />} />
      </Routes>
    </Layout>
  </BrowserRouter>
)

export default Navigation
