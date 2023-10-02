import { Link } from 'react-router-dom'
import LogoKasa from '../../assets/LogoKasa.jsx'
import '../../styles/header/header.css'

function Header() {
  return (
    <header className="kasa-header">
      <LogoKasa />
      <nav>
        <Link to="/">Accueil</Link>
        <Link to="about">A propos</Link>
      </nav>
    </header>
  )
}

export default Header
