import React from 'react'
import './acount.css'
import UkrainianFlag from "../Page1/css/image/UkrainianFlag.png"
import PolishFlag from "../Page1/css/image/PolishFlag.png"
import UKFlag from "../Page1/css/image/UKFlag.png"
function Acount({English, Ukrainian, Polihs}) {
  return (
    <div className='languageSwitcher'>
      <button onClick={ English}>
        <img src={ UKFlag } />  
      </button>
      <button onClick={Ukrainian}>
        <img src={ UkrainianFlag } />  
      </button>
      <button onClick={Polihs}>
        <img src={ PolishFlag } />  
      </button>
    </div>
  )
}
  
export default Acount
