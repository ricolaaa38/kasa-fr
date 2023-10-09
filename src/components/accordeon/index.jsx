import { useState } from 'react'
import '../../styles/about/About.css'
import Chevron from '../../assets/chevron.svg'

const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false)

  return (
    <div className="accordion-item">
      <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
        <h2>{title}</h2>
        <img
          src={Chevron}
          alt="chevron"
          className={isActive ? 'chevron-active' : 'chevron-nonActive'}
        />
      </div>
      <div
        className={
          isActive ? 'accordion-content animation' : 'accordion-content'
        }
      >
        <span className="contenu-accordeon">{content}</span>
      </div>
    </div>
  )
}

export default Accordion
