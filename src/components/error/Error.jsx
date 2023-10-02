import { Link } from 'react-router-dom'
import '../../styles/error/Error.css'

function Error() {
  return (
    <div className="kasa-error">
      <h1>404</h1>
      <h2>Oups! La page que vous demandez n'existe pas.</h2>
      <Link to="/">Retourner sur la page d'acceuil</Link>
    </div>
  )
}

export default Error
