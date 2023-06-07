import { CartPlusFill, Check2Circle } from 'react-bootstrap-icons'
import { Link } from 'react-router-dom'
import './Course.css'
const Course = ({ course }) => {
  const { title, price, enrolledStudents, url, img, instructor } = course
  return (
    <div className="plan">
      <span className="pricing">
        <span>
          $49 <small>Only</small>
        </span>
      </span>
      <p className="title">Professional</p>
      <p className="info">
        This plan is for those who have a team already and running a large
        business.
      </p>
      <ul className="features">
        <li>
          <span className="icon">
            <Check2Circle size={18}/>
          </span>
          <span>
            <strong>20</strong> team members
          </span>
        </li>
      </ul>
      <div className="action">
        <Link className="btn btn-primary w-full" href="#">
          <CartPlusFill size={28} /> Choose plan
        </Link>
      </div>
    </div>
  )
}

export default Course
