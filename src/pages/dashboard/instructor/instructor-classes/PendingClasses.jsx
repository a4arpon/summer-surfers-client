import { useEffect, useState } from 'react'
import { PencilSquare } from 'react-bootstrap-icons'
import { Link } from 'react-router-dom'
import useAuth from '../../../../hooks/useAuth'
import useAxiosSecure from '../../../../hooks/useAxiosSecure'

const PendingClasses = () => {
  const { user, loading } = useAuth()
  const { axiosSecure } = useAxiosSecure()
  const [myCourses, setMyCourses] = useState([])
  useEffect(() => {
    axiosSecure(`/instructor/courses/pending/${user?.email}`).then((res) =>
      setMyCourses(res?.data)
    )
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {myCourses &&
            myCourses.map((item, index) => (
              <tr key={item._id}>
                <td>{index + 1}</td>
                <td>{item?.title}</td>
                <td>{item?.enrolled}</td>
                <td>{item?.totalSeats}</td>
                <td>{item?.price}</td>
                <td>
                  <Link
                    className="btn btn-primary"
                    to={`/dashboard/instructor-edit-class/${item._id}`}
                  >
                    <PencilSquare size={28} />
                  </Link>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  )
}

export default PendingClasses
