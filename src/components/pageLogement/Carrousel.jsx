import Chevron from '../../assets/chevron.svg'
import { useState } from 'react'
import '../../styles/articles/Carrousel.css'

function Carrousel({ pictures }) {
  const [slide, setSlide] = useState(0)

  const nextSlide = () => {
    setSlide(slide === pictures.length - 1 ? 0 : slide + 1)
  }

  const prevSlide = () => {
    setSlide(slide === 0 ? pictures.length - 1 : slide - 1)
  }

  return (
    <div className="carrousel">
      <img
        src={Chevron}
        alt="chevron-gauche"
        className="arrow arrow-left"
        onClick={prevSlide}
      />
      {pictures.map((element, index) => (
        <img
          src={element}
          alt="carrousel"
          key={index}
          className={slide === index ? 'slide' : 'slide slide-hidden'}
        />
      ))}
      <img
        src={Chevron}
        alt="chevron-droit"
        className="arrow arrow-right"
        onClick={nextSlide}
      />
      <span className="indicators">
        {pictures.map((_, index) => (
          <button
            key={index}
            onClick={() => setSlide(index)}
            className={
              slide === index ? 'indicator' : 'indicator indicator-inactive'
            }
          ></button>
        ))}
      </span>
    </div>
  )
}

export default Carrousel
