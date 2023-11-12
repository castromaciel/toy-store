import { Navigate, Outlet } from 'react-router-dom'
import { useConsumerUserProvider } from '@/hooks'

const ProtectedRoutes = () => {
  const { userAuthenticated } = useConsumerUserProvider()

  return userAuthenticated.token ? (
    <Outlet />
  ) : (
    <Navigate to="/login" />
  )
}

export default ProtectedRoutes
