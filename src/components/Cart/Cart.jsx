import React from 'react';
import './Cart.css'

const Cart = ({ cart, handleRemoveFromCart }) => {

     let message;
     if (cart.length === 0) {
          message = <p className='bold'>Please add some product.
          </p>
     }
     else {
          message = <div>
               <h3>Boroloxxx</h3>
               <p>Thanks for westing your money.</p>
          </div>
     }
     return (
          <div>
               <h2 className={cart.length === 1 ? 'blue' : 'orange'}>Order summary: {cart.length}</h2>
               <p className={`bold ${cart.length === 3 ? 'yellow-green' : 'sky-blue'}`}>Conditional CSS</p>
               { cart.length < 3
                    ? <span>forkir</span>
                    : <span>Keep buying</span>
               }
               {message}
               {
                    cart.map(tshirt => <p
                         key={tshirt._id}>
                         {tshirt.name}
                         <button
                              onClick={() => handleRemoveFromCart(tshirt._id)}
                         >X</button>
                    </p>
                    )
               }
               {
                    cart.length === 2 && <p className={'bold yellow-green'}>Double bonanza!!!</p>
               }
               {
                    cart.length === 3 || <p className={'bold orange'}>It is not triple</p>
               }
          </div>
     );
};

export default Cart;