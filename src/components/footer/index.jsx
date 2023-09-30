import LogoKasa from '../../assets/logoKasa.svg'
import '../../styles/Footer.css'

function Footer() {
    return (
        <footer className='kasa-footer'>
            <div>
               <img src={LogoKasa} alt="logo du site kasa" /> 
            </div>
            <div>
                <p>©️ 2020 Kasa</p>
                <p>All right reserved</p>
            </div>
        </footer>
    )
}

export default Footer