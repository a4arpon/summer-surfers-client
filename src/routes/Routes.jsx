import { createBrowserRouter } from 'react-router-dom'
import Dashboard from '../layouts/Dashboard'
import Public from '../layouts/Public'
import Login from '../pages/auth/Login'
import Register from '../pages/auth/Register'
import Courses from '../pages/courses/Courses'
import MyStatus from '../pages/dashboard/student/MyStatus'
import InstructorCourses from '../pages/instructors/InstructorCourses'
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
      {
        path: '/instructors/:instructorId',
        element: <InstructorCourses />,
      },
    ],
  },
  {
    path: '/dashboard',
    element: <Dashboard />,
    children: [
      {
        path: '/dashboard/',
        element: <MyStatus />,
      },
    ],
  },
])

export default Routes
