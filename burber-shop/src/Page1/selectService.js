import React, {useState} from 'react'
import "../Page1/selectService.css"
import DateAndTime from './DateAndTime';
    
function SelectService({ Logo, openDataTime, openData}) {
    const price = ({
        hairCut: 50,
        nozzlesHairCut: 50,
        beardTrimming: 30
    });
  const [selectedServices, setSelectedServices] = useState([]);

    const [colorActiveHair, setColorActiveHair] = useState({
       backgroundColor: '#ffffff',
   })
    const [colorActiveNozzles, setColorActiveNozzles] = useState({
       backgroundColor: '#ffffff',
   })
    const [colorActiveBeard, setColorActiveBeard] = useState({
       backgroundColor: '#ffffff',
    })
    
    const [PlusMinus, setPlusMinus] = useState({
       hairCut: '+',
        nozzlesHairCut: '+',
        beardTrimming: '+'
    }
    )
    const handleServiceClick = (service) => {
 
    // Check if the service is already selected
    if (selectedServices.includes(service)) {
      // If selected, remove it
        setSelectedServices(selectedServices.filter(selectedService => selectedService !== service));
        if (service === "hairCut") {
        setColorActiveHair({
            backgroundColor: '#fff',
            color: '#1f1e1e'
        })
            setPlusMinus({
                ...PlusMinus,
                hairCut: PlusMinus.hairCut = "-" ? "+" : "-"
            })
        } else if (service === "nozzlesHairCut") {
            setColorActiveNozzles({
                backgroundColor: '#fff',
                color: '#1f1e1e'
            })
            setPlusMinus({
                ...PlusMinus,
                nozzlesHairCut: PlusMinus.nozzlesHairCut = "-" ? "+" : "-"
            })
        } else if (service === "beardTrimming") {
            setColorActiveBeard({
                backgroundColor: '#fff',
                color: '#1f1e1e'
            })
            setPlusMinus({
                ...PlusMinus,
                beardTrimming: PlusMinus.beardTrimming = "-" ? "+" : "-"
            })
        }
    } else {
      // If not selected, add it
        setSelectedServices([...selectedServices, service]);
        if (service === "hairCut") {
            setColorActiveHair({
                backgroundColor: 'rgb(1, 101, 1)',
                color: 'white'
            })
            setPlusMinus({
                ...PlusMinus,
                  hairCut: PlusMinus.hairCut === '+' ? '-' : '+'
            })
        } else if (service === "nozzlesHairCut") {
            setColorActiveNozzles({
                backgroundColor: 'rgb(1, 101, 1)',
                color: 'white'
            })
            setPlusMinus({
                ...PlusMinus,
                  nozzlesHairCut: PlusMinus.nozzlesHairCut === '+' ? '-' : '+'
            })
        }   else if (service === "beardTrimming") {
                setColorActiveBeard({
                    backgroundColor: 'rgb(1, 101, 1)',
                    color: 'white'
                })
                setPlusMinus({
                    ...PlusMinus,
                    beardTrimming: PlusMinus.beardTrimming = "+" ? "-" : "+"
                })
            }

    }
    };
    
  const calculateTotalPrice = () => {
    return selectedServices.reduce((total, selectedService) => total + price[selectedService], 0);
    };
    

    return ( 
      <React.Fragment>
            <div className='selectService'>
          <div className='blockSelectService'>
              <div className='Intro'>
                  <div className='BlockLogo'>
                      <img className='logo' src={Logo} />
                  </div>
                    <p>Любомир || Lubomyr</p> 
              </div>
            <h3>Select your Service</h3>
          </div>

          <div className='services'>
              <div className='Service' onClick={() => handleServiceClick('hairCut')}>     
                    <div className='TypeOfService' >
                        <p>Haircut</p>
                      <button style={colorActiveHair} className='addService'>{ PlusMinus.hairCut }</button>  
                    </div>

                  <div className='price'>
                      <p>{ price.hairCut }$</p>
                  </div>           
              </div>
              {/* //// */}
            <div className='Service' onClick={() => handleServiceClick('nozzlesHairCut')}>           
                  <div>
                    <div className='TypeOfService' >
                        <p>Haircut under nozzle (up to 3 nozzles)</p>
                          <button style={colorActiveNozzles} className='addService' >{  PlusMinus.nozzlesHairCut }</button>    
                    </div>
                 </div>

                  <div className='price'>
                      <p>{ price.nozzlesHairCut }$</p>
                  </div>           
              </div>
              {/* ////// */}
                <div className='Service' onClick={() => handleServiceClick('beardTrimming')}>           
                  <div>
                    <div className='TypeOfService' >
                        <p>Beard Trimming</p>
                        <button style={colorActiveBeard} className='addService' >{ PlusMinus.beardTrimming }</button>        
                    </div>
                  </div>

                  <div className='price'>
                      <p>{ price.beardTrimming }$</p>
                  </div>           
                </div>
              {/* ///// */}   
                <div className='priceBlock'>
                  <p>Total Price: {calculateTotalPrice()}$</p>
                  <button onClick={ openDataTime }>Conection</button>
                </div>
            </div>
              
        </div>
            {openData && <DateAndTime closeDateTime={openDataTime}/>}
      </React.Fragment>
    
  )
}

export default SelectService
