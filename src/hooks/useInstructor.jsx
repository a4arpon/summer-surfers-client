import { useQuery } from '@tanstack/react-query'
import useAuth from './useAuth'
import useAxiosSecure from './useAxiosSecure'
const useInstructor = () => {
  const { user, loading } = useAuth()
  const { axiosSecure } = useAxiosSecure()
  let queryPermission = false
  if (user && !loading) {
    queryPermission = true
  }
  const { data: isInstructor, isLoading: isInstructorLoading } = useQuery({
    queryKey: ['isInstructor', user?.email],
    enabled: queryPermission,
    queryFn: async () => {
      const res = await axiosSecure.get(`/instructor/verify/${user?.email}`)
      return res.data.instructor
    },
  })
  return { isInstructor, isInstructorLoading }
}

export default useInstructor
