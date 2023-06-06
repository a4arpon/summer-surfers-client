import { createBrowserRouter } from 'react-router-dom'
import Public from '../layouts/Public'
import LandingPage from '../pages/landing/LandingPage'

const Routes = createBrowserRouter([
  {
    path: '/',
    element: <Public />,
    children: [
      {
        path: '/',
        element: <LandingPage />,
      },
    ],
  },
])

export default Routes
