import { useEffect, useState } from 'react'
import { PencilSquare } from 'react-bootstrap-icons'
import useAuth from '../../../../hooks/useAuth'
import useAxiosSecure from '../../../../hooks/useAxiosSecure'

const DeclinedClasses = () => {
  const { user, loading } = useAuth()
  const { axiosSecure } = useAxiosSecure()
  const [myCourses, setMyCourses] = useState([])
  useEffect(() => {
    axiosSecure(`/courses/instructor/declined/${user?.email}`).then((res) =>
      setMyCourses(res?.data)
    )
  }, [loading])
  return (
    <div className="overflow-x-auto">
      <table className="table table-zebra">
        <thead>
          <tr>
            <th>#</th>
            <th>Course</th>
            <th>Enrolled</th>
            <th>Total Seats</th>
            <th>Price</th>
            <th>Feedback</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {myCourses &&
            myCourses.map((item) => (
              <tr key={item._id}>
                <td>{item?.title}</td>
                <td>{item?.enrolled}</td>
                <td>{item?.totalSeats}</td>
                <td>{item?.price}</td>
                <td>{item?.feedback}</td>
                <td>
                  <button className="btn btn-primary">
                    <PencilSquare size={28} />
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  )
}

export default DeclinedClasses
