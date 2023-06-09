import { Navigate, useLocation } from 'react-router-dom'
import useAuth from '../hooks/useAuth'

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth()
  const location = useLocation()
  if (loading) {
    return <h1>Hello World</h1>
  } else if (user) {
    return children
  } else {
    return <Navigate to={'/login'} replace state={{ from: location }} />
  }
}

export default PrivateRoute
