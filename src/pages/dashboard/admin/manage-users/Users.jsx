import { useEffect, useState } from 'react'
import {
  MortarboardFill,
  PersonCircle,
  PersonFillLock
} from 'react-bootstrap-icons'
import { toast } from 'react-toastify'
import Loader from '../../../../components/others/Loader'
import useAxiosSecure from '../../../../hooks/useAxiosSecure'

const Users = () => {
  const { axiosSecure } = useAxiosSecure()
  const [users, setUsers] = useState([])
  const [isUpdated, setIsUpdated] = useState(false)
  useEffect(() => {
    axiosSecure
      .get('/admin/users')
      .then((res) => res.data)
      .then((res) => {
        setUsers(res)
        setIsUpdated(false)
      })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isUpdated])
  const handleMakeInstructor = (id) => {
    if (confirm('Are you sure to do this?')) {
      axiosSecure
        .patch(`/admin/update/instructor/${id}`)
        .then((res) => res?.data)
        .then((res) => {
          res?.modifiedCount > 0
            ? toast.success('User upgraded as instructor.')
            : toast.warn('Undefined Error.')
          setIsUpdated(true)
        })
    }
  }
  const handleMakeAdmin = (id) => {
    if (confirm('Are you sure to do this?')) {
      axiosSecure
        .patch(`/admin/update/admin/${id}`)
        .then((res) => res?.data)
        .then((res) => {
          res?.modifiedCount > 0
            ? toast.success('User upgraded as admin.')
            : toast.warn('Undefined Error.')
          setIsUpdated(true)
        })
    }
  }
  const handleDowngrade = (id) => {
    if (confirm('Are you sure to do this?')) {
      axiosSecure
        .patch(`/admin/downgrade/user/${id}`)
        .then((res) => res?.data)
        .then((res) => {
          res?.modifiedCount > 0
            ? toast.success('User downgrade as user.')
            : toast.warn('Undefined Error.')
          setIsUpdated(true)
        })
    }
  }
  if (users.length > 0) {
    return (
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          <thead>
            <tr>
              <th>#</th>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users &&
              users?.map((user, index) => (
                <tr key={user._id}>
                  <td>{index + 1}</td>
                  <td>
                    <div className="avatar w-16 h-16">
                      <img src={user?.photo} className="rounded-lg" />
                    </div>
                  </td>
                  <td>{user?.name}</td>
                  <td>{user?.email}</td>
                  <td className="uppercase">
                    {user?.role === 'admin' || user?.role === 'instructor'
                      ? user?.role
                      : 'user'}
                  </td>
                  <td className="btn-group">
                    <button
                      disabled={!user?.role || user?.role === 'user'}
                      className="btn btn-primary"
                      onClick={() => handleDowngrade(user?._id)}
                    >
                      <PersonCircle size={28} />
                      Make User
                    </button>
                    <button
                      disabled={user?.role === 'instructor'}
                      className="btn btn-warning"
                      onClick={() => handleMakeInstructor(user?._id)}
                    >
                      <MortarboardFill size={28} />
                      Make Instructor
                    </button>
                    <button
                      disabled={user?.role === 'admin'}
                      className="btn btn-error"
                      onClick={() => handleMakeAdmin(user?._id)}
                    >
                      <PersonFillLock size={28} />
                      Make Admin
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    )
  } else {
    return <Loader />
  }
}

export default Users
