import {
  BagPlusFill,
  CalendarCheckFill,
  ColumnsGap,
  JournalPlus,
  MortarboardFill
} from 'react-bootstrap-icons'
import { Link, NavLink } from 'react-router-dom'
import useInstructor from '../../../hooks/useInstructor'

const Sidebar = () => {
  const { isInstructor, isInstructorLoading } = useInstructor()
  let sidebarMenus = null
  if (isInstructor && !isInstructorLoading) {
    sidebarMenus = [
      {
        id: 1,
        title: 'My Classes',
        icon: <MortarboardFill size={28} />,
        link: '/dashboard/instructor-classes',
      },
      {
        id: 2,
        title: 'Add a Class',
        icon: <JournalPlus size={28} />,
        link: '/dashboard/instructor-add-class',
      },
    ]
  } else {
    sidebarMenus = [
      {
        id: 1,
        title: 'Dashboard',
        icon: <ColumnsGap size={28} />,
        link: '/dashboard/',
      },
      {
        id: 2,
        title: 'My Classes',
        icon: <MortarboardFill size={28} />,
        link: '/dashboard/my-classes',
      },
      {
        id: 3,
        title: 'My Select List',
        icon: <BagPlusFill size={28} />,
        link: '/dashboard/my-list',
      },
      {
        id: 4,
        title: 'payment history',
        icon: <CalendarCheckFill size={28} />,
        link: '/dashboard/my-payments',
      },
    ]
  }
  return (
    <div className="drawer-side">
      <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
      <ul className="p-4 w-80 h-full bg-base-200 text-base-content">
        {sidebarMenus.map((items) => (
          <li className="mb-2" key={items.id}>
            <NavLink
              to={items.link}
              className={({ isActive }) =>
                isActive
                  ? 'btn btn-neutral border-2 w-full justify-start'
                  : 'btn btn-neutral border-2 btn-outline w-full justify-start'
              }
            >
              {items.icon} {items.title}
            </NavLink>
          </li>
        ))}
        <hr className="my-5 border-secondary" />
        <li className="mb-2">
          <Link to="/" className="btn btn-primary w-full">
            Home
          </Link>
        </li>
        <li className="mb-2">
          <Link to="/courses" className="btn btn-primary w-full">
            courses
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar
