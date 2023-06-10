import { useState } from 'react'
import loadingBar from '../../../../assets/svgs/clockLoader.svg'
const Modal = ({ data }) => {
  const [actionLoading, setActionLoading] = useState(false)
  const handleSendFeedback = (e) => {
    e.preventDefault()
    setActionLoading(true)
    const data = e.target?.feedback?.value
    console.log(data)
    e.target.reset()
    window.my_modal_edit.close()
  }
  return (
    <>
      <dialog id="my_modal_edit" className="modal">
        <form className="modal-box" onSubmit={handleSendFeedback}>
          <h3 className="font-bold text-lg mb-3">{data?.title}</h3>
          <p className="mb-2">Send Feedback</p>
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
