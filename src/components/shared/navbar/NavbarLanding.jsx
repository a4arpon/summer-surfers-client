import {
  ColumnsGap,
  House,
  MortarboardFill,
  People,
  PersonCircle,
  WrenchAdjustableCircleFill,
  XCircleFill
} from 'react-bootstrap-icons'
import { Link, NavLink } from 'react-router-dom'
import useAuth from '../../../hooks/useAuth'

const NavbarLanding = () => {
  const { user, logout } = useAuth()
  const NavList = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? 'btn btn-secondary border-2 w-full'
              : 'btn btn-secondary btn-outline border-2 w-full'
          }
        >
          <House size={24} /> Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/instructors"
          className={({ isActive }) =>
            isActive
              ? 'btn btn-secondary border-2 w-full'
              : 'btn btn-secondary btn-outline border-2 w-full'
          }
        >
          <People size={24} /> Instructors
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/courses"
          className={({ isActive }) =>
            isActive
              ? 'btn btn-secondary border-2 w-full'
              : 'btn btn-secondary btn-outline border-2 w-full'
          }
        >
          <MortarboardFill size={24} /> Summer Courses
        </NavLink>
      </li>
      {user && (
        <li>
          <NavLink
            to="/dashboard/"
            className={({ isActive }) =>
              isActive
                ? 'btn btn-secondary border-2 w-full'
                : 'btn btn-secondary btn-outline border-2 w-full'
            }
          >
            <ColumnsGap size={24} /> Dashboard
          </NavLink>
        </li>
      )}
    </>
  )
  return (
    <div className="bg-base-200">
      <div className="navbar container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content mt-3 p-2 shadow bg-base-200 rounded-box w-60 gap-2 flex flex-col z-10"
            >
              {NavList}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl lg:text-3xl">
            SummerSurf
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu-horizontal px-1 gap-2">{NavList}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src={user?.photoURL} />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-200 rounded-box w-52 gap-2 z-10"
              >
                <li>
                  <Link>
                    <PersonCircle size={18} /> Profile
                  </Link>
                </li>
                <li>
                  <Link>
                    <WrenchAdjustableCircleFill size={18} /> Settings
                  </Link>
                </li>
                <li>
                  <button onClick={() => logout()} className="hover:btn-error">
                    <XCircleFill size={18} /> Logout
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <Link to={'/login'} className="btn btn-secondary ">
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}

export default NavbarLanding
