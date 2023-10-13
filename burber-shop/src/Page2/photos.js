/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React , {useEffect, useState} from 'react'
import './photo.css'
import '../Page1/css/image/hairStyle2.jpg'
import '../Page1/css/image/hairStyle3.jpg'
import '../Page1/css/image/hairStyle4.jpg'

function Photos({togglePhoto}) {
  const [showPhoto, setShowPhoto]= useState(false)
  const [randomPhoto , setRandomPhoto] = useState(null)

  const libraryOfPhotos = [
    require('../Page1/css/image/hairStyle2.jpg'),
    require('../Page1/css/image/hairStyle3.jpg'),
    require('../Page1/css/image/hairStyle4.jpg')
  ];

useEffect(() =>{
  const photos = document.getElementById('photos')
  if(photos) {
    const updatePhoto = () => {

      const randomIndex = Math.floor(Math.random() * libraryOfPhotos.length);
      setRandomPhoto(libraryOfPhotos[randomIndex]) 
    }
    updatePhoto()
    const intervalId = setInterval(updatePhoto, 3000)

    photos.addEventListener('click', function slideShow() {
      setShowPhoto(!showPhoto)
    }, []);
    return () => clearInterval(intervalId);
    
  }

}, [showPhoto])

return (
  <React.Fragment>
  <div className='ImageBlock'>
    <a className='photo_cancel' onClick={() => togglePhoto()} id='cancel'/>
      <img className='hairStyle'  src={randomPhoto} alt="Random Photo" />
  </div>
  </React.Fragment>

);
}

export default Photos
