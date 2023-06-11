import { Link } from 'react-router-dom'
import useAuth from '../../../hooks/useAuth'
const Modal = ({ instructor, control }) => {
  const { user } = useAuth()
  if (instructor) {
    const { name, email, totalStudents, profession } = instructor
    const err = 'Accurate info not available now.'
    return (
      <>
        <div className="modal">
          <div className="modal-box">
            <button
              htmlFor="my-modal-3"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={() => (control.current.checked = false)}
            >
              ✕
            </button>
            <h3 className="font-bold text-3xl">{name || err}</h3>
            <div className="py-4">
              <p>
                <strong>Profession:</strong> Photographer | {profession || err}
              </p>
              <p>
                <strong>Email: </strong>
                {user?.email ? email : 'Login first to see contact info.'}
              </p>
              <p>
                <strong>Total Students:</strong> {totalStudents || err}
              </p>
              <Link
                to={`/instructors/${email}`}
                className="btn btn-primary mt-5 w-full"
              >
                View Courses
              </Link>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default Modal
