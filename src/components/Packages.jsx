import React, { useEffect, useState } from 'react';
import Package from './Package';
import './Packages.css';

function Packages({ packages }) {
  return (
    <div>
      {packages ? (
        <ul className="packages">
          { packages.map( ( values, index ) => (
            <Package
              key={index}
              {...values}
            /> ) )
          }
        </ul>
      ) : (
        <p>Packages Loading...</p>
      )}
    </div>
  );
}

export default Packages;