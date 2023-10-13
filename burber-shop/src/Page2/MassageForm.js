// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect} from 'react';
import './MassageForm.css';

function MassageForm({ toggleFormOff }) {
  const [formData, setFormData] = useState({
    name: '',
    SpecialOrder: '',
    Email: '',
    PhoneNumber: '',
  });
  const [ buttonDisability , setButtonDisability] = useState(true);
  const [formSubmitted, setFormSubmitted] = useState(false);
  useEffect(() =>{
    if(
      formData.name.trim() !== '' &&
      formData.SpecialOrder.trim() !== '' &&
      formData.Email.trim() !== '' &&
      formData.PhoneNumber.trim() !== ''
    ) {
      setButtonDisability(false)
    } else {
      setButtonDisability(true)
    } 

    if( formData.PhoneNumber.includes(' ')) {
      alert('wright your phone number without spaces')
    }

    if(formSubmitted) {
      setButtonDisability(true)
      setTimeout(() => {
        setFormSubmitted(false)
      }, 1800000)
    }

  }, [formSubmitted, formData])



  const apiUrl = 'http://localhost:3003'; // Replace with your backend URL

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send formData to the backend API using fetch or Axios
      const response = await fetch(`${apiUrl}/submit-order`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Sended , wait for answer to your E-mail')
        setFormSubmitted(true)
        
       // You can show a success message to the user here if needed
      } else {
        console.log('Error sending the order to the server.');
        // You can show an error message to the user here if needed
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

console.log('Button disabled:', buttonDisability);


  return (
    <React.Fragment>
      <div className="window">
        <button onClick={() => toggleFormOff()} className='cancel'>
          <span/>
          <span/>     
          X
        </button>
        <form onSubmit={handleSubmit}>
          <p>
            Name: <input name="name" onChange={handleChange} value={formData.name} />
          </p>
          <p>
            SpecialOrder:
            <textarea
              name="SpecialOrder"
              onChange={handleChange}
              value={formData.SpecialOrder}
            />
          </p>
          <p>
            E-mail: <input name="Email" onChange={handleChange} value={formData.Email} />
          </p>
          <p>
            Phone Number: +1
            <input
              type="text"
              name="PhoneNumber"
              onChange={handleChange}
              value={formData.PhoneNumber}
            />
          </p>
          <div className="wrapperButton">
            <button disabled={buttonDisability}  id='sendButton' className={`formButton ${buttonDisability ? 'buttonDisabilytu' : ''}`} type="submit" >
              <span></span>
              <span></span>
              Send
            </button>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
}

export default MassageForm;
