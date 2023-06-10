import { Navigate } from 'react-router-dom'
import Loader from '../components/others/Loader'
import useAdmin from '../hooks/useAdmin'
import useAuth from '../hooks/useAuth'
import useInstructor from '../hooks/useInstructor'

const InstructorRoute = ({ children }) => {
  const { user, loading } = useAuth()
  const { isAdmin, isAdminLoading } = useAdmin()
  const { isInstructor, isInstructorLoading } = useInstructor()
  if (loading || isInstructorLoading) {
    return (
      <div className="h-screen">
        <Loader />
      </div>
    )
  } else if (user && isInstructor) {
    return children
  } else {
    return <Navigate to={'/'} replace />
  }
}

export default InstructorRoute
