import { Navigate } from 'react-router-dom'
import useAdmin from '../hooks/useAdmin'
import useInstructor from '../hooks/useInstructor'

const StudentRoute = ({ children }) => {
  const { isInstructor } = useInstructor()
  const { isAdmin } = useAdmin()
  if (!isInstructor && !isAdmin) {
    return children
  } else {
    return <Navigate to={'/'} replace />
  }
}

export default StudentRoute
