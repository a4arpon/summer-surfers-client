import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

const useCourses = () => {
  const {
    data: courses = [],
    isLoading: courseLoading,
    refetch,
  } = useQuery({
    queryKey: ['courses'],
    queryFn: async () => {
      const res = await axios.get(`${import.meta.env.VITE_SERVER_URL}/courses`)
      return res.data
    },
  })
  return { courses, courseLoading, refetch }
}

export default useCourses
