import './instructor.css'
const Instructor = ({ instructor, showInstructor }) => {
  const { name, photo } = instructor
  return (
    <div className="cardUIVerse">
      <div className="cardUIVerse-details">
        <img
          src={photo}
          alt=""
          className="h-[360px] w-full mask mask-squircle"
        />
        <h1 className="text-center font-semibold text-lg">{name}</h1>
      </div>
      <button
        className="cardUIVerse-button"
        onClick={() => {
          showInstructor(instructor)
          window.my_modal_3.showModal()
        }}
      >
        More info
      </button>
    </div>
  )
}

export default Instructor
