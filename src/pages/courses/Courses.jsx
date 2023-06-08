import Course from '../../components/shared/course/Course'
import useCourses from '../../hooks/useCourses'

const Courses = () => {
  const { courses, courseLoading } = useCourses()
  return (
    <div className="container mx-auto my-20">
      <h1 className="divider text-3xl font-semibold text-center mb-10 text-primary">
        Our Courses
      </h1>
      {!courseLoading && courses ? (
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

export default Courses
