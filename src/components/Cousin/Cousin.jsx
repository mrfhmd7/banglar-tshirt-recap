import React, { Children } from 'react';
import Friend from '../Friend/Friend';

const Cousin = ({children, hasFriend}) => {
     return (
          <div>
               <h2>Cousin</h2>
               <p>{children}</p>
               {hasFriend && <Friend/>}
          </div>
     );
};

export default Cousin;