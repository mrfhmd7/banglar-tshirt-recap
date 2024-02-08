import React from 'react';
import './TShirt.css';

const TShirt = ({ tshirt }) => {
     console.log(tshirt);

     const { name, picture, price } = tshirt;

     return (
          <div className='t-shirt'>
               <img src={picture} alt="" />
          </div>
     );
};

export default TShirt;