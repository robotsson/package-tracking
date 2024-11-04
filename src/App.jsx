import './App.css';
import './components/Packages.css';
// import Packages from './components/Packages';
import Package from './components/Package';
import PackageDetails from './components/PackageDetails';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


const testItem = {
  "id": 999,
  "status": "delivered",
  "eta": "2020-09-25T23:43:54Z",
  "parcel_id": "17070",
  "sender": "Mr.T's Steakhouse",
  "verification_required": false,
  "location_id": "LI71 3481 0CU3 4YTA UCD5 3",
  "location_name": "Loeprich",
  "location_coordinate_latitude": 15.0252615,
  "location_coordinate_longitude": 120.9900454,
  "location_status_ok": true,
  "user_phone": "l46 729478015",
  "user_name": "Jhon Doe",
  "notes": "Bla bla bla bla",
  "last_updated": "2020-09-05T15:15:15Z"
};


function PackageDetailsWrapper({ packages }) {
    const parcel_id = useParams().id;

    let item = parcel_id === "testitem" 
        ? testItem 
        : packages?.find(p => p.parcel_id === parcel_id) || null;
    
    return item ? (
      <PackageDetails {...item} />
    ) : (
      <p>Package Details Not Found</p>
    );
}

function Packages({ packages }) {
  return (
    <div>
      {packages ? (
        <ul className="packages">
          { packages.map( ( values, index ) => (
            <Package
              key={index}
              {...values}
            />
          ))}
        </ul>
      ) : (
        <p>Packages Loading...</p>
      )}
    </div>
  );
}

function App() {
  const [packages, setPackages] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
 
  useEffect(() => {
    const fetchPackages = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://my.api.mockaroo.com/orders.json?key=e49e6840');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setPackages(data);
      } catch (error) {
        setError(error.message);
        console.error('Error fetching packages:', error);
      } finally {
        setLoading(false);
      }
    };
 
    fetchPackages();
  }, []);
 
  if (error) {
    return <div>Error loading packages: {error}</div>;
  }
 

  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <nav className="App-navigation">
            <Link className="test" to="/package-tracking/packages/">Packages</Link>&nbsp;
            <Link className="test" to="/package-tracking/details/testitem">Details</Link>&nbsp;
          </nav> 
          <div className="App-title"><h1>Package Tracking</h1></div>

          <Routes>
            <Route 
              path="/package-tracking/" 
              element={<Packages packages={packages} />} 
            />
            <Route 
              path="/package-tracking/packages/" 
              element={<Packages packages={packages} />} 
            />
            <Route 
              path="/package-tracking/details/" 
              element={<PackageDetailsWrapper packages={packages} />} 
            />
            <Route 
              path="/package-tracking/details/:id" 
              element={<PackageDetailsWrapper packages={packages} />} 
            />
          </Routes>
        </header>
      </Router>
    </div>
  );
}

export default App;