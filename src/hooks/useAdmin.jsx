import { useQuery } from '@tanstack/react-query'
import useAuth from './useAuth'
import useAxiosSecure from './useAxiosSecure'

const useAdmin = () => {
  const { user, loading } = useAuth()
  const { axiosSecure } = useAxiosSecure()
  let queryPermission = false
  if (user && !loading) {
    queryPermission = true
  }
  const { data: isAdmin, isLoading: isAdminLoading } = useQuery({
    queryKey: ['isAdmin', user?.email],
    enabled: queryPermission,
    queryFn: async () => {
      const res = await axiosSecure.get(`/admin/verify/${user?.email}`)
      return res.data.admin
    },
  })
  return { isAdmin, isAdminLoading }
}

export default useAdmin
