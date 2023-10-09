import { useLocation } from 'react-router-dom'
import Logement from '../../logements.json'
import { Navigate } from 'react-router-dom'
import Carrousel from '../../components/pageLogement/Carrousel'
import '../../styles/articles/pageLogement.css'
import Accordion from '../../components/accordeon'
import Equipments from '../../components/pageLogement/Equipments'
import Tags from '../../components/pageLogement/Tags'
import Host from '../../components/pageLogement/Host.jsx'
import Rating from '../../components/pageLogement/Rating'

function LogementPage() {
  const sampleLocation = useLocation()
  const idLogement = sampleLocation.pathname.replace('/articles/', '')
  let pageLogement = []
  let realLogement = false

  for (let logement of Logement) {
    if (logement.id === idLogement) {
      pageLogement = logement
      realLogement = true
      break
    } else {
      realLogement = false
    }
  }

  if (!realLogement) {
    return <Navigate to="*" />
  } else {
    return (
      <div className="body-logement">
        <Carrousel pictures={pageLogement.pictures} />
        <div className="presentation">
          <div className="kasa-logement-host">
            <h1>{pageLogement.title}</h1>
            <h3 className="localisation">{pageLogement.location}</h3>
            <Tags tags={pageLogement.tags} />
          </div>

          <div className="host-rating">
            <Host
              name={pageLogement.host.name}
              picture={pageLogement.host.picture}
            />
            <Rating rating={pageLogement.rating} />
          </div>
        </div>

        <div className="accordion-pageLogement">
          <div className="accordion-description">
            <Accordion title="Description" content={pageLogement.description} />
          </div>
          <div className="accordion-equipments">
            <Accordion
              title="Equipements"
              content={<Equipments content={pageLogement.equipments} />}
            />
          </div>
        </div>
      </div>
    )

    // <Card
    //   id={pageLogement.id}
    //   title={pageLogement.title}
    //   cover={pageLogement.cover}
    //   pictures={pageLogement.pictures}
    //   description={pageLogement.description}
    //   host={pageLogement.host}
    //   rating={pageLogement.rating}
    //   location={pageLogement.location}
    //   equipments={pageLogement.equipments}
    //   tags={pageLogement.tags}
    // />
  }
}

export default LogementPage
