import { useState } from 'react'
import loadingBar from '../../../../assets/svgs/clockLoader.svg'
import useAxiosSecure from '../../../../hooks/useAxiosSecure'
const Modal = ({ courseData }) => {
  const [actionLoading, setActionLoading] = useState(false)
  const { axiosSecure } = useAxiosSecure()
  const handleSendFeedback = (e) => {
    e.preventDefault()
    setActionLoading(true)
    const data = {
      id: courseData?._id,
      feedback: e.target?.feedback?.value,
    }
    axiosSecure.post('/admin/courses/feedback', data).then((res) => {
      e.target.reset()
      window.my_modal_edit.close()
      setActionLoading(false)
    })
  }
  return (
    <>
      <dialog id="my_modal_edit" className="modal">
        <form className="modal-box" onSubmit={handleSendFeedback}>
          <h3 className="font-bold text-lg mb-3">{courseData?.title}</h3>
          <p>
            Instructor: <strong>{courseData?.instructor?.name}</strong>
          </p>
          <p className="my-2">Send Feedback</p>
          <textarea
            className="textarea textarea-bordered w-full mb-2 h-28"
            placeholder="Feedback"
            name="feedback"
            required
          ></textarea>
          <button
            type="submit"
            className="btn btn-secondary w-full"
            disabled={actionLoading}
          >
            {actionLoading ? (
              <img src={loadingBar} className="h-10" />
            ) : (
              'Send Feedback'
            )}
          </button>
        </form>
      </dialog>
    </>
  )
}

export default Modal
