import useTitle from '../../../../hooks/useTitle'
import ApprovedClasses from './ApprovedClasses'
import DeclinedClasses from './DeclinedClasses'
import PendingClasses from './PendingClasses'

const InstructorClasses = () => {
  useTitle('My Classes')
  return (
    <>
      <h1 className="text-3xl text-center border-b-2 pb-2 mb-10">My Courses</h1>
      <div className="ring p-2 ring-success rounded-lg">
        <h2 className="text-2xl">Approved Courses</h2>
        <ApprovedClasses />
      </div>
      <div className="ring p-2 ring-info rounded-lg mt-10">
        <h2 className="text-2xl">Pending Courses</h2>
        <PendingClasses />
      </div>
      <div className="ring p-2 ring-error rounded-lg mt-10">
        <h2 className="text-2xl">Declined Courses</h2>
        <DeclinedClasses />
      </div>
    </>
  )
}

export default InstructorClasses
