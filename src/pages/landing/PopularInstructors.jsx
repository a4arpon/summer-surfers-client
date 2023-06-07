import Instructor from '../../components/shared/instructor/Instructor'

const PopularInstructors = () => {
  return (
    <div className="mt-10">
      <h1 className="text-3xl font-semibold text-center border-b-2 border-base-300 pb-3 mb-5">
        Our Popular Instructors
      </h1>
      <div className='grid lg:grid-cols-4 gap-x-3 gap-y-8'>
        <Instructor instructor={{}}/>
        <Instructor instructor={{}}/>
        <Instructor instructor={{}}/>
        <Instructor instructor={{}}/>
        <Instructor instructor={{}}/>
        <Instructor instructor={{}}/>
        <Instructor instructor={{}}/>
      </div>
    </div>
  )
}

export default PopularInstructors
