import PackageDetails from './PackageDetails';
import { useParams, Link } from 'react-router-dom';

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


function PackageDetailsPage({ packages }) {
    const parcel_id = useParams().id;

    let item = ( parcel_id === "testitem" ) 
               ? testItem 
               : packages?.find(p => p.parcel_id === parcel_id) || null;
    
    return item ? (
      <PackageDetails {...item} />
    ) : (
      <p>`Package Details Not Found :(`</p>
    );
} 

export default PackageDetailsPage;