import Logement from '../../logements.json'
import Card from '../../components/card'

function LogementPage() {
  return <div>bienvenus sur la page de ...</div>
}

export default LogementPage

// {Logement.map((logement, index) => (
//         <Card
//           key={`${logement.id}-${index}`}
//           id={logement.id}
//           title={logement.title}
//           cover={logement.cover}
//           pictures={logement.pictures}
//           description={logement.description}
//           host={logement.host}
//           rating={logement.rating}
//           location={logement.location}
//           equipments={logement.equipments}
//           tags={logement.tags}
//         />
//       ))}
