import { useQuery } from '@tanstack/react-query'
import useAuth from '../../../../hooks/useAuth'
import useAxiosSecure from '../../../../hooks/useAxiosSecure'
import useTitle from '../../../../hooks/useTitle'
import Class from './Class'

const MyClasses = () => {
  const { user } = useAuth()
  const { axiosSecure } = useAxiosSecure()
  const { data: courses = [], isLoading: loadingStatus } = useQuery({
    queryKey: ['myCourse'],
    queryFn: async () => {
      const res = await axiosSecure.get(`/courses/my-courses/${user?.email}`)
      return res.data
    },
  })
  useTitle('My Classes')
  return (
    <div className="grid lg:grid-cols-3 gap-3">
      {!loadingStatus &&
        courses &&
        courses?.map((course) => <Class key={course?._id} course={course} />)}
    </div>
  )
}

export default MyClasses
