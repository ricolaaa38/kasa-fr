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
          isActive ? 'accordion-content animated' : 'accordion-content'
        }
      >
        {content}
      </div>
    </div>
  )
}

export default Accordion

// {
//   /* <div className="wrapper">
//         <div className="collapse-component">
//           {AboutArray.map((aPropos, index) => (
//             <div className="accordion">
//               <div className="accordion-visible" onClick={toggleState}>
//                 <h2>{aPropos.title}</h2>
//                 <img
//                   className={toggle && 'active'}
//                   src={Chevron}
//                   alt="chevron"
//                 />
//               </div>
//               <div
//                 className={
//                   toggle ? 'accordion-toggle animated' : 'accordion-toggle'
//                 }
//                 style={{ height: toggle ? `${heightEl}` : '0px' }}
//                 ref={refHeight}
//               >
//                 <p aria-hidden={toggle ? 'true' : 'false'}>{aPropos.text}</p>
//               </div> */
// }
