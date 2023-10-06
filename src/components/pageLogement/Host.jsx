import '../../styles/articles/Host.css'

function Host({ name, picture }) {
  return (
    <div className="infos-host">
      <h3>{name}</h3>
      <img src={picture} alt={name} />
    </div>
  )
}
export default Host
