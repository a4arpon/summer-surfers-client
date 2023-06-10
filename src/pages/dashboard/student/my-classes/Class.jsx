import { Link } from 'react-router-dom'

const Class = ({ course }) => {
  return (
    <div className="card card-compact bg-base-200">
      <figure>
        <img src={course?.img} className="h-96 w-full rounded-lg" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{course?.title}</h2>
        <div className="card-actions justify-end">
          <Link to={'/dashboard/my-class'} className="btn btn-primary">
            Continue Course
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Class
