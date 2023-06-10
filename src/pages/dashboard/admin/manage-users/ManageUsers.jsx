import useTitle from '../../../../hooks/useTitle'
import Users from './Users'

const ManageUsers = () => {
  useTitle('Manage Users')
  return (
    <div>
      <h1 className="text-3xl border-b-2 pb-2 mb-10">Manage Users</h1>
      <Users />
    </div>
  )
}

export default ManageUsers
