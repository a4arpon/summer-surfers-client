import { useQuery } from '@tanstack/react-query'
import { BagCheckFill, CreditCardFill, TrashFill } from 'react-bootstrap-icons'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import useAuth from '../../../../hooks/useAuth'
import useAxiosSecure from '../../../../hooks/useAxiosSecure'

const MyList = () => {
  const { user } = useAuth()
  const { axiosSecure } = useAxiosSecure()
  const { data: cart = [], refetch } = useQuery({
    queryKey: ['course'],
    queryFn: async () => {
      const res = await axiosSecure.get(`/courses/my-lists/${user?.email}`)
      return res.data
    },
  })
  const handleDeleteCart = async (id) => {
    if (confirm('Are you sure?')) {
      await axiosSecure
        .delete(`/carts/${id}`)
        .then((res) =>
          !res?.error ? toast.success(res?.message) : toast.error(res?.message)
        )
      refetch()
    }
  }
  return (
    <div>
      <div className="flex justify-between mb-10">
        <h1 className="text-3xl flex gap-2">
          <BagCheckFill size={34} /> Payment Due:{' '}
          <strong>
            {cart &&
              cart.reduce((sum, course) => {
                return sum + course.price
              }, 0)}
          </strong>
        </h1>
        <Link className="btn btn-accent" to={'/dashboard/payment'}>
          <CreditCardFill size={28} /> Pay Now
        </Link>
      </div>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          <thead>
            <tr>
              <th>#</th>
              <th>Course</th>
              <th>Instructor</th>
              <th>Price</th>
              <th>Enrolled</th>
              <th>Total Seats</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cart &&
              cart.map((course, index) => (
                <tr key={course._id}>
                  <td>{index + 1}</td>
                  <td>{course?.title}</td>
                  <td>{course?.instructor?.name}</td>
                  <td>{course?.price}</td>
                  <td>{course?.enrolled}</td>
                  <td>{course?.totalSeats}</td>
                  <td>
                    <button
                      className="btn btn-error"
                      onClick={() => handleDeleteCart(course?._id)}
                    >
                      <TrashFill size={28} />
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default MyList
