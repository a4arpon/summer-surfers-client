import { Link, NavLink } from 'react-router-dom'
import useAuth from '../../../hooks/useAuth'

const NavbarLanding = () => {
  const { user } = useAuth()
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
          Home
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
          Instructors
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
          Summer Courses
        </NavLink>
      </li>
      {user && (
        <li>
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              isActive
                ? 'btn btn-secondary border-2 w-full'
                : 'btn btn-secondary btn-outline border-2 w-full'
            }
          >
            Dashboard
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
              className="dropdown-content mt-3 p-2 shadow bg-base-200 rounded-box w-52 gap-2 flex flex-col"
            >
              {NavList}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl lg:text-3xl">
            SummerSurfers
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu-horizontal px-1 gap-2">{NavList}</ul>
        </div>
        <div className="navbar-end">
          <Link to={'/login'} className="btn btn-secondary">
            Login
          </Link>
        </div>
      </div>
    </div>
  )
}

export default NavbarLanding
