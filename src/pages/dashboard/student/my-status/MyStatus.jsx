import useTitle from '../../../../hooks/useTitle'
import CourseStatus from './CourseStatus'
import LeaderBoard from './LeaderBoard'
import Notifications from './Notifications'

const MyStatus = () => {
  useTitle('My Dashboard')
  return (
    <>
      <Notifications />
      <CourseStatus />
      <LeaderBoard />
    </>
  )
}

export default MyStatus
