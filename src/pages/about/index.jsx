import ImageAbout from '../../assets/mountain.png'
import '../../styles/home/home.css'
import Accordion from '../../components/accordeon'
import { accordionData } from '../../components/accordeon/content'

function About() {
  return (
    <div>
      <div className="home-kasa">
        <img src={ImageAbout} alt="mountain" />
      </div>
      <div className="accordion">
        {accordionData.map(({ title, content, index }) => (
          <Accordion
            key={`${title}-${index}`}
            title={title}
            content={content}
          />
        ))}
      </div>
    </div>
  )
}

export default About
