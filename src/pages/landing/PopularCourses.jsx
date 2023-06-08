import axios from 'axios'
import { useEffect, useState } from 'react'
import Course from '../../components/shared/course/Course'

const PopularCourses = () => {
  const [courses, setCourses] = useState([])
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_SERVER_URL}/courses/popular`)
      .then((res) => setCourses(res.data))
  }, [])
  return (
    <div>
      <h1 className="text-3xl font-semibold text-center divider text-primary mb-10">
        Our Popular Courses
      </h1>
      {courses ? (
        <div className="grid lg:grid-cols-3 gap-3">
          {courses.map((courseItem) => (
            <Course course={courseItem} key={courseItem._id} />
          ))}
        </div>
      ) : (
        <h1>Hello</h1>
      )}
    </div>
  )
}

export default PopularCourses
