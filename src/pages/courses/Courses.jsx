import Course from '../../components/shared/course/Course'
import useCourses from '../../hooks/useCourses'

const Courses = () => {
  const { courses, courseLoading } = useCourses()
  return (
    <div className="container mx-auto">
      {!courseLoading && courses ? (
        <div className="grid lg:grid-cols-3 gap-3 my-20">
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

export default Courses
