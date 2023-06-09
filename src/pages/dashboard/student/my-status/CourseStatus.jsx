const CourseStatus = () => {
  return (
    <div className="grid lg:grid-cols-3 gap-3 mt-10">
      <div className="p-5 text-center bg-primary rounded-xl text-base-100">
        <h3 className="text-3xl">Enrolled Courses</h3>
        <h1 className="text-5xl font-semibold mt-5">3</h1>
      </div>
      <div className="p-5 text-center bg-accent rounded-xl text-base-100">
        <h3 className="text-3xl">Total Courses Runtime</h3>
        <h1 className="text-5xl font-semibold mt-5">30hr, 40mins.</h1>
      </div>
      <div className="p-5 text-center bg-success rounded-xl text-base-100">
        <h3 className="text-3xl">Achieved Certificates</h3>
        <h1 className="text-5xl font-semibold mt-5">0</h1>
      </div>
    </div>
  )
}

export default CourseStatus
