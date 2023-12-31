import Loader from '../../components/others/Loader'
import Course from '../../components/shared/course/Course'
import useCourses from '../../hooks/useCourses'
import useTitle from '../../hooks/useTitle'

const Courses = () => {
  const { courses, courseLoading } = useCourses()
  useTitle('Courses')
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
        <Loader />
      )}
    </div>
  )
}

export default Courses
