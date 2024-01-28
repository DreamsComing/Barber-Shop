/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React, {useState} from 'react';
import './mainPage.css';
import Logo from '../Page1/css/image/hairStyle.jpg'
import Acount from '../Page1/acount.js';
import commant from '../Page1/css/image/CommantsIMG.png'

import Comment from './Comment.js';
import DateAndTime from './DateAndTime.js';
import SelectService from './selectService.js';

function mainPage() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [selectedLanguage, setSelectedLanguage] = useState('en')
  const text = {
    en: {
      services: 'Select Services',
      timeAndDate: 'Make an appointment.',
      leaveComment: 'You can leave your comment here',
    },
    uk: {
      services: 'Виберіть послуги',
      timeAndDate: 'Зробити запис',
      leaveComment: 'Ви можете залишити свій коментар тут',
    },
    pl: {
      services: 'Wybierz usługi',
      timeAndDate: 'Umówić się na spotkanie.',
      leaveComment: 'Możesz tutaj zostawić swój komentarz',
    },
  };

  const English = () => {
    setSelectedLanguage('en')
  }
  const Ukrainian = () => {
    setSelectedLanguage('uk')
  }
  const Polihs = () => {
    setSelectedLanguage('pl')
  }

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [openComment, setOpenComment] = useState(false)

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [openData, setOpenDate] = useState(false)

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [openService, setOpenService] = useState(false)

  const openComments = () => {
    setOpenComment(!openComment)
  }
  const openDataTime = () => {
    setOpenDate(!openData)
  }
  const openSelectService = () => {
    setOpenService(!openService)
  }

  return (
    <React.Fragment>
<div className='wrapper'>
      <div className='acountBlock'>
        <div>
          <Acount English={English} Ukrainian={Ukrainian} Polihs={Polihs} />
        </div>
      </div>
      <main>
        {/* -------------------- */}
        <div className='logoBlock'>
          <a className='logoLink'>
            <img className='logo' src={ Logo } />
          </a>
        </div>
        {/* ----------- */}
        <div className='ManageBlock'>
          <button className='Commats' onClick={() => openComments()}>
            <div className='wrapperImg'>
              <img src={commant} />
            </div>

            <h3>{ text[selectedLanguage].leaveComment }</h3>
          </button>
          {/* ---------- */}
          <button className='Commats' onClick={() => openDataTime()}>
            <div className='wrapperImg'>
              <img src={commant} />
            </div>

              <h3>{ text[selectedLanguage].timeAndDate }</h3>
          </button>
          {/* ------------ */}
          <button className='Commats ' onClick={() => openSelectService()}>
            <div className='wrapperImg'>
              <img src={commant} />
            </div>

            <h3>{ text[selectedLanguage].services }</h3>
          </button>

        </div>
      </main>

      </div>
      {openComment && <Comment closeComments={openComments} />}
      {openData && <DateAndTime closeDateTime={openDataTime} />}
      {openService && <SelectService openDataTime={openDataTime} openData={openData} Logo={ Logo } />}
    </React.Fragment>
    
  );
  // Design +
  // languageSwitcher+
  // Coments +
  // data and time +
  // Select Service -
  // DateBase -
  // adaptiveLoyat -
}

export default mainPage;
