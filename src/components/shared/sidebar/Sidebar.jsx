import { BagPlusFill, ColumnsGap, MortarboardFill } from 'react-bootstrap-icons'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  const studentMenu = [
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
  ]
  return (
    <div className="drawer-side">
      <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
      <ul className="p-4 w-80 h-full bg-base-200 text-base-content">
        {studentMenu.map((items) => (
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
      </ul>
    </div>
  )
}

export default Sidebar
