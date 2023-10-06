import GreyStar from '../../assets/Vector.svg'
import RedStar from '../../assets/VectorRed.svg'

function Rating(rating) {
  let levelRating = []
  let levelNotRating = []

  for (let i = 0; i < rating.rating; i++) {
    levelRating[i] = [i]
  }

  for (let i = 5; i > rating.rating; i--) {
    levelNotRating[i] = [i]
  }

  return (
    <div>
      {levelRating.map((_, index) => (
        <img key={index} src={RedStar} alt="star" />
      ))}
      {levelNotRating.map((_, index) => (
        <img key={index} src={GreyStar} alt="star" />
      ))}
    </div>
  )
}
export default Rating
