import React, { Children } from 'react';

const Cousin = ({children}) => {
     return (
          <div>
               <h2>Cousin</h2>
               <p>{children}</p>
          </div>
     );
};

export default Cousin;