import { Navigate } from 'react-router-dom'
import useAuth from '../hooks/useAuth'

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth()
  if (user) {
    return children
  } else if (loading) {
    return <h1>Hello World</h1>
  } else {
    return <Navigate to={'/login'} replace />
  }
}

export default PrivateRoute
