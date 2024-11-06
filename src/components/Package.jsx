import './Package.css';
import { Link } from "react-router-dom";

function _capitalizeFirstLetter(val) {
  return String(val).charAt(0).toUpperCase() + String(val).slice(1);
} 

function Package(data) {

  const {id, status, eta, parcel_id, sender} = data;
  
  const url = `/package-tracking/details/${parcel_id}`;

  let statusText = _capitalizeFirstLetter( status.replaceAll("-", " ",) );

  return (
    <div>
      <Link to={url}>
        <div className="package">
          <h3>{sender}</h3>
          {statusText}<br/>
          <p></p>
          <div className="package-view-details">
            View details
          </div>
        </div>
      </Link>
    </div>
  )
  // return (
  //     <div>
  //       <Link to={url}>
  //         <div className="package">
  //           id: {id}<br/>
  //           status: {status}<br/>
  //           eta: {eta}<br/>
  //           parcel_id: {parcel_id}<br/>
  //           sender: {sender}<br/>
  //         </div>
  //       </Link>
  //     </div>
  // )
}

export default Package;


