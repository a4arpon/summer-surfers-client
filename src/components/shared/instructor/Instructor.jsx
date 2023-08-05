import { useRef, useState } from 'react'
import './instructor.css'
import Modal from './Modal'
const Instructor = ({ instructor }) => {
  const { name, photo } = instructor
  const [showInstructor, setShowInstructor] = useState({})
  const checkedModal = useRef()
  return (
    <div className="cardUIVerse">
      <div className="cardUIVerse-details">
        <img
          src={photo}
          alt=""
          className="h-[360px] object-cover w-full mask mask-squircle"
        />
        <h1 className="text-center font-semibold text-lg">{name}</h1>
      </div>
      <button
        htmlFor="my_modal_instructor"
        className="cardUIVerse-button"
        onClick={() => {
          checkedModal.current.checked = true
          setShowInstructor(instructor)
        }}
      >
        More info
      </button>
      <input
        type="checkbox"
        id="my_modal_instructor"
        className="modal-toggle"
        ref={checkedModal}
      />
      <Modal instructor={showInstructor} control={checkedModal} />
    </div>
  )
}

export default Instructor
