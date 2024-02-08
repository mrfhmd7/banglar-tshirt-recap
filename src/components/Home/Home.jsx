import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import TShirt from '../TShirt/TShirt';
import Cart from '../Cart/Cart';
import './Home.css'

const Home = () => {
     const tshirts = useLoaderData();
     // console.log(tshirts);

     const [cart, setCart] = useState([]);

     const handleAddToCart = tshirt => {
          console.log(tshirt);
     }

     return (
          <div className='home-container'>
               <div className='t-shirt-container'>
                    {
                         tshirts.map(tShirt => <TShirt
                              key={tShirt._id}
                              tshirt={tShirt}
                              handleAddToCart={handleAddToCart}
                         />)
                    }
               </div>
               <div className='cart-container'>
                    <Cart></Cart>
               </div>
          </div>
     );
};

export default Home;