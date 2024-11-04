import React, { useEffect, useState } from 'react';
import Package from './Package';
import './Packages.css';

// Mine
// https://my.api.mockaroo.com/orders.json?key=cbec7fd0
// Ömer's
// https://my.api.mockaroo.com/orders.json?key=e49e6840



const allData = (values) => {
  return(
      <Package
        // firstName={values.firstName}
        // lastName={values.lastName}
        // id={values.id}
        {...values}
      />
  )
}



function Packages() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://my.api.mockaroo.com/orders.json?key=cbec7fd0')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div id="Packages">      
      {/* Render the fetched data */}
      {data ? (
        <ul className="packages">
          {data.map(allData)}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Packages;