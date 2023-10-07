import '../../styles/footer/Footer.css'
import WhiteLogoKasa from '../../assets/WhiteLogoKasa'

function Footer() {
  return (
    <footer className="kasa-footer">
      <div className="logo-mention">
        <WhiteLogoKasa />
        <div className="mention-leg">
          <p>© 2020 Kasa.</p>
          <p>All rights reserved</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
