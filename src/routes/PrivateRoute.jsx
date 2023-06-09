import { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import Loader from '../components/others/Loader'
import { AuthContext } from '../contexts/AuthProvider'

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext)
  if (loading) {
    return (
      <div className="h-screen">
        <Loader />
      </div>
    )
  } else if (user) {
    return children
  } else {
    return <Navigate to={'/login'} replace />
  }
}

export default PrivateRoute
