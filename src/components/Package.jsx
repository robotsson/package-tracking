import './Package.css';

import { Link } from "react-router-dom";


function Package(data) {

  const {id, status, eta, parcel_id, sender} = data;
  
  // whyyyyy does this appear twice for every id
  console.log("id: "+id+ ", parcel_id: "+parcel_id+", sender: "+sender);
  
  let url = `/package-tracking/details/${parcel_id}`;

  return (
      <div>
        <Link to={url}>
          <div className="package">
            id: {id}<br/>
            status: {status}<br/>
            eta: {eta}<br/>
            parcel_id: {parcel_id}<br/>
            sender: {sender}<br/>
          </div>
        </Link>
      </div>
  )
}

export default Package;


