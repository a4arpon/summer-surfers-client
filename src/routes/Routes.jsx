import { createBrowserRouter } from 'react-router-dom'
import Public from '../layouts/Public'
import Login from '../pages/auth/Login'
import Register from '../pages/auth/Register'
import Courses from '../pages/courses/Courses'
import Instructors from '../pages/instructors/Instructors'
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
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/register',
        element: <Register />,
      },
      {
        path: '/courses',
        element: <Courses />,
      },
      {
        path: '/instructors',
        element: <Instructors />,
      },
    ],
  },
])

export default Routes
