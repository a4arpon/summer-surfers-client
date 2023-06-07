import Course from '../../components/shared/course/Course'

const PopularCourses = () => {
  return (
    <div>
      <h1 className="text-3xl font-semibold text-center border-b-2 border-base-300 pb-3 mb-5">
        Our Popular Courses
      </h1>
      <div className='grid lg:grid-cols-3 gap-3'>
        <Course course={{}} />
        <Course course={{}} />
        <Course course={{}} />
        <Course course={{}} />
      </div>
    </div>
  )
}

export default PopularCourses
