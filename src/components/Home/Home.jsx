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
          // console.log(tshirt);
          const newCart = [...cart, tshirt];
          setCart(newCart);
     }

     const handleRemoveFromCart = id => {
          const remaining = cart.filter(ts => ts._id !== id);
          setCart(remaining);
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
                    <Cart
                         cart={cart}
                         handleRemoveFromCart={handleRemoveFromCart}
                    ></Cart>
               </div>
          </div>
     );
};

export default Home;