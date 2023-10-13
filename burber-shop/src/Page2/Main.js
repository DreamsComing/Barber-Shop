/* eslint-disable no-undef */
import React, {useState } from 'react'
import Photos from './photos.js'
import Prices from './prices.js'
import './Main.css'
import'./Layout/MainLayout.css'
import Introduction from '../Page1/introduction.js'
import Arrow from '../Page1/css/image/arrow.png'
import MassageForm from './MassageForm.js'



function Main({isMainVisible ,setMainVisible}) {
 const [showPhoto, setShowPhoto]= useState(false)
 const [showPrice, setShowPrice] = useState(false)
 const [showForm, setShowForm] = useState(false)
 const [cancel, setCancel] = useState(false)


 const [exitStyle, setExitStyle] = useState(false)
 const togglePhoto = () => {
  setShowPhoto(!showPhoto)
  setShowPrice(false);
  setShowForm(false)
 }

 const togglePrice = () => {
  setShowPrice(!showPrice)
  setShowPhoto(false);
  setShowForm(false)
  setCancel(!cancel)
 }


 const toggleForm = () => {
  setShowForm(!showForm)
  setShowPhoto(false);
  setShowPrice(false)
  setCancel(!cancel)
}
 const toggleFormOff = () =>{
  setCancel(!cancel)
  setShowForm(false)
 }
 const exit = () => {
  setExitStyle(true)
  setShowForm(false)
  setMainVisible(!isMainVisible)
}


  return (
    <div className={`${isMainVisible ? 'openMain' : 'ExitMain'}`}>
        <div className='main_wrapper'>
          <div className={`${cancel ? 'exitButtonCancel' : 'exitButton'}`}>
            <button  onClick={exit}>
              <img src={Arrow}  alt='arrow'/>
            </button>
          </div>
          <div className={`${cancel ? 'links_block_cancel' : 'links_block'}`}>
            <button id='photos' className='MainButton' onClick={togglePhoto}>
              photos
            </button>
            <button id='price' className='MainButton' onClick={togglePrice}>
              prices
            </button>
            <button id='order' className='MainButton' onClick={toggleForm}>
              special order
            </button>
          </div>

        </div>
        
        <div id ="showWindow">
          { showPhoto && <Photos togglePhoto={togglePhoto}/>}
          { showPrice && <Prices togglePrice={togglePrice} />}
          {showForm && <MassageForm toggleFormOff={toggleFormOff}/>}
        </div>
        {exitStyle && < Introduction />}
    </div>
  )
}

export default Main
