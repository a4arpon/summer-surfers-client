import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Course from '../../components/shared/course/Course'

const InstructorCourses = () => {
  const { instructorId } = useParams()
  const [coursesList, setCoursesList] = useState([])
  useEffect(() => {
    axios
      .get(
        `${import.meta.env.VITE_SERVER_URL}/courses/instructor/${instructorId}`
      )
      .then((res) => setCoursesList(res.data))
  }, [instructorId])
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
