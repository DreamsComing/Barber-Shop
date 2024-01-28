/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import "./DateAndTime.css"



function DateAndTime({closeDateTime}) {

  return (
    <div className='DateAndTime'>
      <div className='exit'>
        <button onClick={closeDateTime }>x</button>
      </div>
      <div className='blockDateAndTime'>
        <div>
          <p>If you want to make an appointment, send me a message or call me.  </p>
          <a className='phone' href='tel:3126470146'>+1 312-647-0146</a>
        </div>
      </div>
    </div>
  )
}

export default DateAndTime
