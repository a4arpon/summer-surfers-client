import axios from 'axios'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import loadingBar from '../../../../assets/svgs/clockLoader.svg'
import useAuth from '../../../../hooks/useAuth'
import useAxiosSecure from '../../../../hooks/useAxiosSecure'
const AddClass = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const { user } = useAuth()
  const { axiosSecure } = useAxiosSecure()
  const [actionLoading, setActionLoading] = useState(false)
  const navigator = useNavigate()
  // imgbb url
  const imgBBUrl = `https://api.imgbb.com/1/upload?key=${
    import.meta.env.VITE_IMGBB_KEY
  }`

  const handleCourseSubmit = (data) => {
    setActionLoading(true)
    const imgData = new FormData()
    imgData.append('image', data.img[0])
    axios
      .post(imgBBUrl, imgData)
      .then((imageData) => {
        const courseData = {
          title: data?.title,
          price: parseFloat(parseFloat(data?.price).toFixed(2)),
          enrolled: 0,
          totalSeats: parseInt(data?.totalSeats),
          instructor: {
            name: data?.instructorName,
            email: data?.instructorEmail,
          },
          img: imageData?.data?.data.display_url,
          status: 'pending',
        }
        axiosSecure.post('/instructor/courses/add', courseData).then((res) => {
          res?.data?.insertedId && toast.success('Course Added')
          navigator('/dashboard/instructor-classes')
        })
      })
      .catch((err) => {
        setActionLoading(false)
        console.log(err)
      })
  }

  return (
    <>
      <h1 className="text-3xl border-b-2 text-center pb-2 mb-10">
        Add New Course
      </h1>
      <form
        className="ring ring-secondary p-5 rounded-lg"
        onSubmit={handleSubmit(handleCourseSubmit)}
      >
        <div className="mb-3">
          <label>Course Title</label>
          <input
            type="text"
            className="w-full input input-bordered focus:outline-none mt-2 input-secondary focus:border-2"
            {...register('title', { required: true })}
          />
          {errors.title && (
            <span className="text-red-500 mt-1 block">Title is required.</span>
          )}
        </div>
        <div className="flex gap-3">
          <div className="mb-3 w-1/3">
            <label>Course Price</label>
            <input
              type="text"
              className="w-full input input-bordered focus:outline-none mt-2 input-secondary focus:border-2"
              {...register('price', { required: true })}
            />
            {errors.price && (
              <span className="text-red-500 mt-1 block">
                Price is required.
              </span>
            )}
          </div>
          <div className="mb-3 w-1/3">
            <label>Course Total Seats</label>
            <input
              type="number"
              className="w-full input input-bordered focus:outline-none mt-2 input-secondary focus:border-2"
              {...register('totalSeats', { required: true })}
            />
            {errors.totalSeats && (
              <span className="text-red-500 mt-1 block">
                Seat number is required.
              </span>
            )}
          </div>
          <div className="mb-3 w-1/3">
            <label>Course Thumbnail</label>
            <input
              type="file"
              className="w-full file-input focus:outline-none mt-2"
              {...register('img', { required: true })}
            />
            {errors.img && (
              <span className="text-red-500 mt-1 block">
                Profile photo is required.
              </span>
            )}
          </div>
        </div>
        <div className="flex gap-3">
          <div className="mb-3 w-1/2">
            <label>Course Instructor</label>
            <input
              type="text"
              className="w-full input input-bordered focus:outline-none mt-2 input-secondary focus:border-2"
              value={user?.displayName}
              readOnly
              {...register('instructorName', { required: true })}
            />
          </div>
          <div className="mb-3 w-1/2">
            <label>Course Instructor Email</label>
            <input
              type="text"
              className="w-full input input-bordered focus:outline-none mt-2 input-secondary focus:border-2"
              value={user?.email}
              readOnly
              {...register('instructorEmail', { required: true })}
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
            'Submit Course'
          )}
        </button>
      </form>
    </>
  )
}

export default AddClass
