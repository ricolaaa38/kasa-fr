import LogoKasa from '../../assets/logoKasa.svg'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <header>
            <img src={LogoKasa} alt="logo Kasa" /> 
            <div>
                <Link to="/">Acceuil</Link>
                <Link to="about">A propos</Link>
            </div>
        </header>
    )
}

export default Header