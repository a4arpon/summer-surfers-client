import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import { useQuery } from '@tanstack/react-query'
import { BagCheckFill } from 'react-bootstrap-icons'
import useAuth from '../../../../hooks/useAuth'
import useAxiosSecure from '../../../../hooks/useAxiosSecure'
import Checkout from './Checkout'

const Payment = () => {
  const secret_key = import.meta.env.VITE_STRIPE_KEY
  const stripePromise = loadStripe(secret_key)
  const { user } = useAuth()
  const { axiosSecure } = useAxiosSecure()
  const { data: cart = [], refetch } = useQuery({
    queryKey: ['course'],
    queryFn: async () => {
      const res = await axiosSecure.get(`/courses/my-lists/${user?.email}`)
      const price = await res?.data?.reduce((sum, course) => {
        return sum + course.price
      }, 0)

      return { price: price, courses: res?.data }
    },
  })
  return (
    <div className="flex gap-2">
      <div className="card bg-accent lg:w-1/2 text-primary-content card-compact ">
        <div className="card-body">
          <div className="flex justify-between">
            <h2 className="card-title text-2xl">Order Summery</h2>
            <h2 className="card-title text-2xl">
              <BagCheckFill size={28} /> {cart?.courses?.length} Course
            </h2>
          </div>
          <ul className="list-decimal list-inside text-lg">
            {cart?.courses &&
              cart?.courses.map((item) => (
                <li key={item._id} className="flex justify-between border-b">
                  {item?.title} <strong>{item?.price}$</strong>
                </li>
              ))}
            <li className="flex justify-between">
              Others <strong>0$</strong>
            </li>
          </ul>
          <div className="my-2 pt-2 border-t-2 flex justify-between text-2xl">
            <span>Total cost</span> <strong>{cart?.price}$</strong>
          </div>
          <div className="alert alert-warning">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-current shrink-0 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
            <span>
              Please check several times before making any payment. Sometimes
              might you have trouble to make payment because of high demand on
              server. Then reload page several times.
            </span>
          </div>
        </div>
      </div>
      {cart?.price !== 0 && (
        <Elements stripe={stripePromise}>
          <Checkout price={cart?.price} cart={cart?.courses} />
        </Elements>
      )}
    </div>
  )
}

export default Payment
