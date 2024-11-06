import './App.css';
import Packages from './components/Packages';
import PackageDetailsPage from './components/PackageDetailsPage';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";



/* Main app, fetches data, and sets up routes to components */
function App() {

  const [data, setData] = useState(null);

  useEffect(() => {
    // If you're using Create React App and the file is in the public folder
    fetch('https://raw.githubusercontent.com/robotsson/package-tracking/refs/heads/main/src/orders.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => setData(data))
      .catch(error => console.error('There has been a problem with your fetch operation:', error));
  }, []);


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
              element={<Packages packages={data} />} 
            />
            <Route 
              path="/package-tracking/packages/" 
              element={<Packages packages={data} />} 
            />
            <Route 
              path="/package-tracking/details/" 
              element={<PackageDetailsPage packages={data} />} 
            />
            <Route 
              path="/package-tracking/details/:id" 
              element={<PackageDetailsPage packages={data} />} 
            />
          </Routes>
        </header>
      </Router>
    </div>
  );
}

export default App;