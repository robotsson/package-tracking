import './Package.css';

// "id": 1,
// "status": "delivered",
// "eta": "2020-09-25T23:43:54Z",
// "parcel_id": "1770",
// "sender": "Edgeblab",
// "verification_required": false,
// "location_id": "LI71 3481 0CU3 4YTA UCD5 3",
// "location_name": "Loeprich",
// "location_coordinate_latitude": 15.0252615,
// "location_coordinate_longitude": 120.9900454,
// "location_status_ok": true,
// "user_phone": "l46 729478015",
// "user_name": "Jhon Doe",
// "notes": "Revision of Drainage Device in Mouth and Throat, Via Opening",
// "last_updated": "2020-09-05T15:15:15Z"


function Package(data) {
  const {id, status, eta, parcel_id, sender} = data;
  return (
      <div className="package">
          <p>id: {id}</p>
          <p>id: {status}</p>
          <p>eta: {eta}</p>
          <p>parcel_id: {parcel_id}</p>
          <p>sender: {sender}</p>
      </div>
  )
}

export default Package;

