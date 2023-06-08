import { List } from 'react-bootstrap-icons'
import { Link } from 'react-router-dom'
import useAuth from '../../../hooks/useAuth'
const Navbar = () => {
  const { user, logout } = useAuth()
  return (
    <div className="navbar bg-base-300">
      <div className="flex-1">
        <label
          htmlFor="my-drawer-2"
          className="btn btn-neutral drawer-button lg:hidden"
        >
          <List size={28} />
        </label>
        <Link to={'/dashboard'} className="btn btn-ghost normal-case text-3xl">
          SummerSurf
        </Link>
      </div>
      <div className="flex-none gap-2">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src={user?.photoURL} />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="mt-5 p-2 shadow menu menu-sm dropdown-content bg-base-200 rounded-box w-52"
          >
            <li>
              <a>Settings</a>
            </li>
            <li>
              <button
                onClick={() => logout()}
                className="hover:bg-error hover:text-white"
              >
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
