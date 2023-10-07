import Accordion from '../accordeon'

function Equipments({ title, content }) {
  const listEquipments = []

  for (let i = 0; i < content.length; i++) {
    listEquipments[i] = content[i]
  }

  return (
    <div>
      {listEquipments.map((element, index) => (
        <p key={index}>{element}</p>
      ))}
    </div>
  )
}

export default Equipments
