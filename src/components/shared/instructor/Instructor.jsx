import './instructor.css'
const Instructor = ({ instructor }) => {
  const { title, ratting, enrolledStudents, url, img } = instructor
  return (
    <div className="cardUIVerse">
      <div className="cardUIVerse-details">
        <p className="textUIVerse-title">Card title</p>
        <p className="textUIVerse-body">
          Here are the details of the cardUIVerse
        </p>
      </div>
      <button className="cardUIVerse-button">More info</button>
    </div>
  )
}

export default Instructor
