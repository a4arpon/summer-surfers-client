import axios from 'axios'
import { useEffect, useState } from 'react'
import Loader from '../../components/others/Loader'
import Instructor from '../../components/shared/instructor/Instructor'
import useTitle from '../../hooks/useTitle'
const Instructors = () => {
  const [instructors, setInstructors] = useState([])
  useTitle('Instructors')
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_SERVER_URL}/instructors`)
      .then((res) => setInstructors(res.data))
  }, [])
  return (
    <div className="container mx-auto my-20">
      <h1 className="divider text-3xl font-semibold text-center mb-10">
        Our Instructors
      </h1>
      {instructors ? (
        <div className="grid lg:grid-cols-4 gap-x-3 gap-y-8">
          {instructors?.map((instructor) => (
            <Instructor instructor={instructor} key={instructor._id} />
          ))}
        </div>
      ) : (
        <Loader />
      )}
    </div>
  )
}

export default Instructors
