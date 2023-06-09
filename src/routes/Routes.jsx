import { createBrowserRouter } from 'react-router-dom'
import Dashboard from '../layouts/Dashboard'
import Public from '../layouts/Public'
import Login from '../pages/auth/Login'
import Register from '../pages/auth/Register'
import Courses from '../pages/courses/Courses'
import MyClass from '../pages/dashboard/student/my-classes/MyClass'
import MyClasses from '../pages/dashboard/student/my-classes/MyClasses'
import MyList from '../pages/dashboard/student/my-list/MyList'
import MyStatus from '../pages/dashboard/student/my-status/MyStatus'
import Payment from '../pages/dashboard/student/payment/Payment'
import InstructorCourses from '../pages/instructors/InstructorCourses'
import Instructors from '../pages/instructors/Instructors'
import LandingPage from '../pages/landing/LandingPage'
import PrivateRoute from './PrivateRoute'

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
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
    children: [
      {
        path: '/dashboard/',
        element: <MyStatus />,
      },
      {
        path: '/dashboard/my-classes',
        element: <MyClasses />,
      },
      {
        path: '/dashboard/my-class',
        element: <MyClass />,
      },
      {
        path: '/dashboard/my-list',
        element: <MyList />,
      },
      {
        path: '/dashboard/payment',
        element: <Payment />,
      },
    ],
  },
])

export default Routes
