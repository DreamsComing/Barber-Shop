/* eslint-disable jsx-a11y/alt-text */
import React, {useState} from 'react';
import './css/introduction.css';
import './css/adeptiveLoyat/IntroductionLayout.css'
import '../Page2/Main.css'
import Main from '../Page2/Main';
import scissors from './css/image/scissors.png'

function Introduction() {

  const [isMainVisible, setMainVisible] = useState(false);


  return (
    <React.Fragment >
 <div className="main">
      <div className="page_1">
        <div className="introduction">
          <h1>the best </h1>
          <h2>BARBER SHOP</h2>
        </div>
        <div className="button_block">
          <button onClick={() => window.location.href = 'tel: 7733024795'} > call</button>
          <button onClick={() => setMainVisible(true)} >main</button>
        </div>
        <footer>
          <img src={scissors}/>
        </footer>
      </div>
     
    </div>
     {isMainVisible && <Main isMainVisible={isMainVisible} setMainVisible={setMainVisible} />}
    </React.Fragment>
   
    
  );
}

export default Introduction;
