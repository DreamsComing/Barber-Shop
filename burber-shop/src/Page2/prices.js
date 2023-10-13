/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react'
import './prices.css'
import './Layout/priceLayout.css'

function Prices({togglePrice}) {
    const price1 = '100'
    const price2 = '100'
    const price3 = '100'
    const specialOrderPrice = '300'
    

    const [showPrice, setShowPrice] = useState(false);

    const table = () => {
        setShowPrice(!showPrice);
    }
    useEffect(() => { 
        const tablePrice = document.getElementById('price')
        if(tablePrice) {
            tablePrice.addEventListener('click', table)
        }
        return() => {
            if(tablePrice) {
                tablePrice.removeEventListener('click', table)
            }
        }
        
    }, [table]);


  return (
    <div>
    <a className='exitTable' onClick={() => togglePrice()}/>
        <table className='tableStyle'>
          <thead >
            <tr>
              <th className='thStyle'>Style</th>
              <th className='thStyle'>Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className='tdStyleGreen'>Style 1</td>
              <td className='tdStyleGreen'>${price1}</td>
            </tr>
            <tr>
              <td className='tdStyleGreen'>Style 2</td>
              <td className='tdStyleGreen'>${price2}</td>
            </tr>
            <tr>
              <td className='tdStyleGreen'>Style 3</td>
              <td className='tdStyleGreen'>${price3}</td>
            </tr>
            <tr>
              <td className='tdStyleGreen'>Special Order</td>
              <td className='tdStyleGreen'>${specialOrderPrice}</td>
            </tr>
          </tbody>
        </table>
    </div>
    )
        
}

export default Prices
