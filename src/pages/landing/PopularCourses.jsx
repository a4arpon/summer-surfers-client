import Course from '../../components/shared/course/Course'
import useCourses from '../../hooks/useCourses'

const PopularCourses = () => {
  const { courses, courseLoading } = useCourses()
  return (
    <div>
      <h1 className="text-3xl font-semibold text-center border-b-2  pb-3 mb-5 border-primary">
        Our Popular Courses
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

export default PopularCourses
