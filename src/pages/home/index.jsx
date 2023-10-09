import ImageAccueil from '../../assets/seashore.png'
import Card from '../../components/card'
import Logement from '../../logements.json'
import '../../styles/home/home.css'

function Home() {
  return (
    <main>
      <div>
        <div className="home-kasa">
          <div className="home-kasa-img">
            <img src={ImageAccueil} alt="rivage" />
          </div>
          <h1>Chez vous, partout et ailleurs</h1>
        </div>
        <div className="card-home">
          {Logement.map((logement, index) => (
            <Card
              key={`${logement.id}-${index}`}
              id={logement.id}
              cover={logement.cover}
              title={logement.title}
            />
          ))}
        </div>
      </div>
    </main>
  )
}

export default Home
