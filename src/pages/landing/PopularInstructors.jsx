import axios from 'axios'
import { useEffect, useState } from 'react'
import Instructor from '../../components/shared/instructor/Instructor'
import Modal from '../../components/shared/instructor/Modal'

const PopularInstructors = () => {
  const [popularInstructors, setPopularInstructors] = useState([])
  const [showInstructor, setShowInstructor] = useState(null)
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_SERVER_URL}/instructors/popular`)
      .then((res) => setPopularInstructors(res.data))
  }, [])
  return (
    <div className="mt-10">
      <h1 className="divider text-3xl font-semibold text-center mb-10">
        Our Popular Instructors
      </h1>
      <div className="grid lg:grid-cols-4 gap-x-3 gap-y-8">
        {popularInstructors.map((instructor) => (
          <Instructor
            instructor={instructor}
            key={instructor._id}
            showInstructor={setShowInstructor}
          />
        ))}
        <Modal instructor={showInstructor} />
      </div>
    </div>
  )
}

export default PopularInstructors
