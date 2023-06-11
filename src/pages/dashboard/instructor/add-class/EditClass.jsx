import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import loadingBar from '../../../../assets/svgs/clockLoader.svg'
import useAxiosSecure from '../../../../hooks/useAxiosSecure'
const EditClass = () => {
  const { axiosSecure } = useAxiosSecure()
  const [actionLoading, setActionLoading] = useState(false)
  const navigator = useNavigate()
  const { courseID } = useParams()
  const [editCourse, setEditCourse] = useState(null)
  useEffect(() => {
    axiosSecure
      .get(`/instructor/course/${courseID}`)
      .then((res) => setEditCourse(res?.data))
  }, [])
  const handleCourseSubmit = (e) => {
    e.preventDefault()
    setActionLoading(true)
    const data = e.target
    const courseData = {
      id: editCourse?._id,
      title: data?.title?.value,
      price: parseFloat(data?.price?.value).toFixed(2),
      totalSeats: parseInt(data?.totalSeats?.value),
    }
    axiosSecure.put('/instructor/courses/update', courseData).then((res) => {
      res?.data?.modifiedCount > 0 && toast.success('Course Updated')
      navigator('/dashboard/instructor-classes')
      setActionLoading(false)
    })
  }
  return (
    <>
      <h1 className="text-3xl border-b-2 text-center pb-2 mb-10">
        Update Course
      </h1>
      <form
        className="ring ring-secondary p-5 rounded-lg"
        onSubmit={handleCourseSubmit}
      >
        <div className="mb-3">
          <label>Course Title</label>
          <input
            type="text"
            className="w-full input input-bordered focus:outline-none mt-2 input-secondary focus:border-2"
            defaultValue={editCourse?.title}
            name="title"
            required
          />
        </div>
        <div className="flex gap-3">
          <div className="mb-3 w-1/2">
            <label>Course Price</label>
            <input
              type="text"
              className="w-full input input-bordered focus:outline-none mt-2 input-secondary focus:border-2"
              defaultValue={editCourse?.price}
              name="price"
              required
            />
          </div>
          <div className="mb-3 w-1/2">
            <label>Course Total Seats</label>
            <input
              type="number"
              className="w-full input input-bordered focus:outline-none mt-2 input-secondary focus:border-2"
              defaultValue={editCourse?.totalSeats}
              name="totalSeats"
              required
            />
          </div>
        </div>
        <button
          type="submit"
          className="btn btn-secondary w-full my-2"
          disabled={actionLoading}
        >
          {actionLoading ? (
            <img src={loadingBar} className="h-10" />
          ) : (
            'Submit Update'
          )}
        </button>
      </form>
    </>
  )
}

export default EditClass
