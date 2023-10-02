import '../../styles/card/Card.css'
import { Link } from 'react-router-dom'

function Card({ cover, title, id }) {
  return (
    <div className="div-link-card">
      <Link to={`/articles/${id}`}>
        <div className="kasa-card">
          <div className="img-overlay">
            <img src={cover} alt={title} />
          </div>
          <h2>{title}</h2>
        </div>
      </Link>
    </div>
  )
}

export default Card
