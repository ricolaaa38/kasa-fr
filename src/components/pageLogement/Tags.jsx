import '../../styles/articles/Tags.css'

function Tags({ tags }) {
  return (
    <div className="tags-zone">
      {tags.map((element, index) => (
        <button className="tags-btn" key={index} onClick={null}>
          {element}
        </button>
      ))}
    </div>
  )
}

export default Tags
