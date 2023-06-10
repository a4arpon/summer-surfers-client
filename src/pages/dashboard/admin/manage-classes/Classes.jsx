import { useEffect, useState } from 'react'
import {
  ChatSquareDotsFill,
  CheckCircleFill,
  XCircleFill
} from 'react-bootstrap-icons'
import { toast } from 'react-toastify'
import useAxiosSecure from '../../../../hooks/useAxiosSecure'
import Modal from './Modal'
const Classes = () => {
  const { axiosSecure } = useAxiosSecure()
  const [courses, setCourses] = useState([])
  const [sendFeedback, setSendFeedback] = useState({})
  const [isUpdated, setIsUpdated] = useState(false)
  useEffect(() => {
    axiosSecure
      .get('/admin/courses')
      .then((res) => res.data)
      .then((res) => {
        setCourses(res)
        setIsUpdated(false)
      })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isUpdated])
  const handleApproveAction = (id) => {
    axiosSecure
      .patch(`/admin/courses/approve/${id}`)
      .then((res) => res?.data)
      .then((res) => {
        res?.modifiedCount > 0
          ? toast.success('Course Approved.')
          : toast.warn('Undefined Error.')
        setIsUpdated(true)
      })
  }
  const handleDeclinedAction = (id) => {
    axiosSecure
      .patch(`/admin/courses/declined/${id}`)
      .then((res) => res?.data)
      .then((res) => {
        res?.modifiedCount > 0
          ? toast.error('Course Declined.')
          : toast.warn('Undefined Error.')
        setIsUpdated(true)
      })
  }
  return (
    <div className="overflow-x-auto">
      <table className="table table-zebra">
        <thead>
          <tr>
            <th>#</th>
            <th></th>
            <th>Course</th>
            <th>Price</th>
            <th>Instructor name</th>
            <th>Instructor email</th>
            <th>Available seats</th>
            <th>Total Seats</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {courses &&
            courses?.map((course, index) => (
              <tr key={course._id}>
                <td>{index + 1}</td>
                <td>
                  <div className="avatar w-16 h-16">
                    <img src={course?.img} className="rounded-lg" />
                  </div>
                </td>
                <td>{course?.title}</td>
                <td>{course?.price}</td>
                <td>{course?.instructor?.name}</td>
                <td>{course?.instructor?.email}</td>
                <td>
                  {parseInt(course?.totalSeats) - parseInt(course?.enrolled)}
                </td>
                <td>{course?.totalSeats}</td>
                <td className="uppercase">{course?.status}</td>
                <td className="btn-group">
                  {course?.status === 'pending' && (
                    <>
                      <button
                        className="btn btn-success"
                        onClick={() => handleApproveAction(course?._id)}
                      >
                        <CheckCircleFill size={28} />
                      </button>
                      <button
                        className="btn btn-error"
                        onClick={() => handleDeclinedAction(course?._id)}
                      >
                        <XCircleFill size={28} />
                      </button>
                    </>
                  )}
                  <button
                    className="btn btn-primary"
                    onClick={() => {
                      setSendFeedback(course)
                      window.my_modal_edit.showModal()
                    }}
                  >
                    <ChatSquareDotsFill size={28} />
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      <Modal courseData={sendFeedback} />
    </div>
  )
}

export default Classes
