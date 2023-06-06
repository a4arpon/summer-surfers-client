import { Outlet } from 'react-router-dom'
import Footer from '../components/shared/footer/Footer'
import NavbarLanding from '../components/shared/navbar/NavbarLanding'
const Public = () => {
  return (
    <>
      <NavbarLanding />
      <Outlet />
      <Footer />
    </>
  )
}

export default Public
