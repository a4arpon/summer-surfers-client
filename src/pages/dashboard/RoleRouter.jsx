import { Navigate } from 'react-router-dom'
import useAdmin from '../../hooks/useAdmin'
import useInstructor from '../../hooks/useInstructor'

const RoleRouter = () => {
  const { isInstructor, isInstructorLoading } = useInstructor()
  const { isAdmin, isAdminLoading } = useAdmin()
  if (isInstructor && !isInstructorLoading) {
    return <Navigate to={'/dashboard/instructor-classes'} replace />
  } else if (isAdmin && !isAdminLoading) {
    return <Navigate to={'/dashboard/manage-classes'} replace />
  } else if (
    !isAdmin &&
    !isInstructor &&
    !isAdminLoading &&
    !isInstructorLoading
  ) {
    return <Navigate to={'/dashboard/my-status'} replace />
  }
}

export default RoleRouter
