import { Navigate } from 'react-router-dom'
import Loader from '../components/others/Loader'
import useAdmin from '../hooks/useAdmin'
import useAuth from '../hooks/useAuth'
const AdminRoute = ({ children }) => {
  const { user, loading } = useAuth()
  const { isAdmin, isAdminLoading } = useAdmin()
  if (loading || isAdminLoading) {
    return (
      <div className="h-screen">
        <Loader />
      </div>
    )
  } else if (user && isAdmin) {
    return children
  } else {
    return <Navigate to={'/'} replace />
  }
}

export default AdminRoute
