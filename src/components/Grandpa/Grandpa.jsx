import React, { createContext, useState } from 'react';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import Aunty from '../Aunty/Aunty';
import './Grandpa.css'

export const RingContext = createContext('gold');
export const MoneyContext = createContext(0);

const Grandpa = () => {
     const ring = 'diamond';
     const [money, setMoney] = useState(0);

     return (
          <div className='grandpa'>
               <h2>Hello!! from Grandpa..</h2>
               <p>Has Money: {money}</p>
               <MoneyContext.Provider value={[money, setMoney]}>
                    <RingContext.Provider value='Golden-ring'>
                         <section className='flex'>
                              <Father ring={ring}></Father>
                              <Uncle></Uncle>
                              <Aunty></Aunty>
                         </section>
                    </RingContext.Provider>
               </MoneyContext.Provider>
          </div>
     );
};

export default Grandpa;