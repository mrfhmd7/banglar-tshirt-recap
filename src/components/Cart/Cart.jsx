import React from 'react';

const Cart = ({ cart, handleRemoveFromCart }) => {

     let message;
     if (cart.length === 0) {
          message = <p>Please add some product.
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
               <h2>Order summary: {cart.length}</h2>
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
                    cart.length === 2 && <p>Double bonanza!!!</p>
               }
               {
                    cart.length === 3 || <p>It is not triple</p>
               }
          </div>
     );
};

export default Cart;