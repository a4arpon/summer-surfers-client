import { useQuery } from '@tanstack/react-query'
import Loader from '../../../../components/others/Loader'
import useAuth from '../../../../hooks/useAuth'
import useAxiosSecure from '../../../../hooks/useAxiosSecure'
import useTitle from '../../../../hooks/useTitle'

const MyPayments = () => {
  const { user } = useAuth()
  const { axiosSecure } = useAxiosSecure()
  const { data: cart = [] } = useQuery({
    queryKey: ['course'],
    queryFn: async () => {
      const res = await axiosSecure.get(`/payments/${user?.email}`)
      return res.data
    },
  })
  const timeFormats = {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  }
  useTitle('My Payment History')
  return (
    <div>
      <div className="my-5 border-b-2 pb-3 flex justify-between">
        <h1 className="text-3xl">Payment History</h1>
      </div>
      {cart ? (
        <div className="overflow-x-auto">
          <table className="table table-zebra">
            <thead>
              <tr>
                <th>#</th>
                <th>Amount</th>
                <th>Course Quantity</th>
                <th>Method</th>
                <th>TrxID</th>
                <th>Time</th>
              </tr>
            </thead>
            <tbody>
              {cart?.map((item, index) => {
                const date = new Date(item?.billingTime)
                const formattedDate = date.toLocaleString('en-US', timeFormats)
                return (
                  <tr key={item._id}>
                    <td>{index + 1}</td>
                    <td>{item?.paid}</td>
                    <td>{item?.items?.length}</td>
                    <td>{item?.billing?.card}</td>
                    <td>{item?.trxID}</td>
                    <td>{formattedDate}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      ) : (
        <Loader />
      )}
    </div>
  )
}

export default MyPayments
