// // SpecialOrder.js
// import React, { useState, useEffect } from 'react';
// import './specialOrder.css';
// import MassageForm from './MassageForm';

// function SpecialOrder({ toggleForm }) {
//   const [inputValue, setInputValue] = useState({
//     inputValue: ''
//   });

//   const handleInputChange = (event) => {
//     const newValue = event.target.value;
//     setInputValue({ inputValue: newValue });
//   };

//   useEffect(() => {
//     console.log('inputValue in SpecialOrder:', inputValue.inputValue);
//   }, [inputValue]);

//   return (
//     <div className='main_border'>
//       <div className='border'>
//         <h3>Write down your special order</h3>
//         <hr className='top_line' />
//         <input
//           className='specialOrderText'
//           value={inputValue.inputValue}
//           id='input'
//           onChange={handleInputChange}
//         />
//         <hr className='button_line' />
//         <div className='bottone_button'>
//           <button onClick={toggleForm}>
//             <span></span>
//             <span></span>
//             Send
//           </button>
//         </div>
//       </div>
//       <MassageForm inputFromSpecialOrder={inputValue.inputValue} />
//     </div>
//   );
// }

// export default SpecialOrder;
