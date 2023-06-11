import './WhoWeAre.css'
const WhoWeAre = ({ about }) => {
  return (
    <article className="who-we-card">
      <img src={about?.img} />
      <div className="who-we-card_content">
        <span className="who-we-card_title">{about?.title}</span>
        <span className="who-we-card_subtitle">
          <strong>{about?.position}</strong> <br /> at {about?.where}
        </span>
      </div>
    </article>
  )
}

export default WhoWeAre
