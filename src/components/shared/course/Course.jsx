import { useState } from 'react'
import {
  CartPlusFill,
  CartXFill,
  EnvelopeAt,
  PersonFillLock,
  PersonPlusFill
} from 'react-bootstrap-icons'
import { toast } from 'react-toastify'
import loadingBar from '../../../assets/svgs/clockLoader.svg'
import useAdmin from '../../../hooks/useAdmin'
import useAuth from '../../../hooks/useAuth'
import useAxiosSecure from '../../../hooks/useAxiosSecure'
import useCourses from '../../../hooks/useCourses'
import useInstructor from '../../../hooks/useInstructor'
import './Course.css'
const Course = ({ course }) => {
  const { _id, title, price, totalSeats, img, instructor, enrolled } = course
  const { user } = useAuth()
  const { axiosSecure } = useAxiosSecure()
  const [actionLoading, setActionLoading] = useState(false)
  const { refetch } = useCourses()
  const { isInstructor } = useInstructor()
  const { isAdmin } = useAdmin()
  const handleAddToCart = (id) => {
    if (user) {
      setActionLoading(true)
      const cartItem = {
        course: id,
        name: user?.displayName,
        email: user?.email,
        status: 'unpaid',
      }
      axiosSecure
        .post('/carts', cartItem)
        .then((res) => res.data)
        .then((res) => {
          if (res.error === false) {
            setActionLoading(false)
            toast.success(res.message)
            refetch()
          } else {
            setActionLoading(false)
            toast.error(res.message)
          }
        })
    } else {
      toast.warning('You need to create a account first.')
    }
  }
  return (
    <div
      className={`plan ${
        parseInt(totalSeats) > parseInt(enrolled)
          ? 'bg-primary border-primary'
          : 'bg-error border-error'
      }`}
    >
      <span className="pricing">
        <span>
          ${price} <small>Only</small>
        </span>
      </span>
      <img src={img} alt="" className="h-96 w-full rounded-lg" />
      <p className="title text-xl font-semibold mt-10">{title}</p>
      <p className="info text-lg text-secondary">
        by <strong>{instructor?.name}</strong>
        {user && (
          <span className="mt-2 flex items-center gap-2">
            <EnvelopeAt /> {instructor?.email}
          </span>
        )}
      </p>
      <ul className="features">
        <li>
          <span className="icon">
            <PersonPlusFill size={24} />
          </span>
          <span>
            <strong>{parseInt(totalSeats) - parseInt(enrolled)}</strong> seats
            left
          </span>
        </li>
        <li>
          <span className="icon">
            <PersonFillLock size={24} />
          </span>
          <span>
            <strong>{totalSeats}</strong> Seats at total
          </span>
        </li>
      </ul>
      <div className="">
        {parseInt(totalSeats) > parseInt(enrolled) ? (
          <button
            className="btn btn-primary w-full"
            to={`/courses/${_id}`}
            disabled={actionLoading || isAdmin || isInstructor}
            onClick={() => handleAddToCart(_id)}
          >
            {actionLoading ? (
              <img src={loadingBar} className="h-10" />
            ) : (
              <>
                <CartPlusFill size={28} /> Select This Course
              </>
            )}
          </button>
        ) : (
          <button disabled className="btn btn-primary w-full">
            <CartXFill size={28} /> Select This Course
          </button>
        )}
      </div>
    </div>
  )
}

export default Course
