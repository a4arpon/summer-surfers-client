import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Course from '../../components/shared/course/Course'

const InstructorCourses = () => {
  const { instructorEmail } = useParams()
  const [coursesList, setCoursesList] = useState([])
  useEffect(() => {
    axios
      .get(
        `${
          import.meta.env.VITE_SERVER_URL
        }/courses/instructor/${instructorEmail}`
      )
      .then((res) => setCoursesList(res.data))
  }, [instructorEmail])
  return (
    <div className="container mx-auto">
      <div className="grid lg:grid-cols-3 gap-3 my-20">
        {coursesList &&
          coursesList.map((course) => (
            <Course course={course} key={course._id} />
          ))}
      </div>
    </div>
  )
}

export default InstructorCourses
