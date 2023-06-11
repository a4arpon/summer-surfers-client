import useTitle from '../../../../hooks/useTitle'
import Classes from './Classes'

const ManageClasses = () => {
  useTitle('Manage Classes')
  return (
    <>
      <h1 className="text-3xl border-b-2 pb-2 mb-10">Manage Classes</h1>
      <Classes />
    </>
  )
}

export default ManageClasses
