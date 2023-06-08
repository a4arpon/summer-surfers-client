import { Outlet } from 'react-router-dom'
import Navbar from '../components/shared/navbar/Navbar'
import Sidebar from '../components/shared/sidebar/Sidebar'

const Dashboard = () => {
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <Navbar />
        <div className='p-2'>
          <Outlet />
        </div>
      </div>
      <Sidebar />
    </div>
  )
}

export default Dashboard
