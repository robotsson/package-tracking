import React, { useEffect, useState } from 'react';
import Package from './Package';
import './Packages.css';

// Mine
// https://my.api.mockaroo.com/orders.json?key=cbec7fd0
// Ömer's
// https://my.api.mockaroo.com/orders.json?key=e49e6840

const mockjsondata = [
  {"id":"1","status":"delivered","eta":"2020-09-25T23:43:54Z","parcel_id":"1770","sender":"Edgeblab","verification_required":false,"location_id":"LI71 3481 0CU3 4YTA UCD5 3","location_name":"Loeprich","location_coordinate_latitude":15.0252615,"location_coordinate_longitude":120.9900454,"location_status_ok":true,"user_phone":"l46 729478015","user_name":"Jhon Doe","notes":"Revision of Drainage Device in Mouth and Throat, Via Opening","last_updated":"2020-09-05T15:15:15Z"},{"id":2,"status":"order-info-received","eta":"2020-09-09T09:01:33Z","parcel_id":"9049","sender":"Teklist","verification_required":true,"location_id":"PT22 4139 0498 4498 0322 8112 6","location_name":"Chive","location_coordinate_latitude":43.897258,"location_coordinate_longitude":89.939332,"location_status_ok":false,"user_phone":"p46 729478015","user_name":"Jhon Doe","notes":"Extirpation of Matter from Head \u0026 Neck Tendon, Open Approach","last_updated":"2020-09-26T06:23:26Z"},{"id":3,"status":"order-info-received","eta":"2020-09-21T10:27:14Z","parcel_id":"1649","sender":"Blogpad","verification_required":false,"location_id":"ME14 6526 5482 1617 7919 03","location_name":"Jackson","location_coordinate_latitude":-9.6883,"location_coordinate_longitude":124.2784,"location_status_ok":true,"user_phone":"l46 729478015","user_name":"Jhon Doe","notes":null,"last_updated":"2020-09-18T17:36:30Z"},{"id":4,"status":"on-the-way","eta":"2020-09-27T17:55:37Z","parcel_id":"6652","sender":"Abata","verification_required":false,"location_id":"KW26 VWYJ ZFTQ HA4R VQU1 EFLI LEPC LC","location_name":"Acker","location_coordinate_latitude":9.0965232,"location_coordinate_longitude":123.1989242,"location_status_ok":true,"user_phone":"p46 729478015","user_name":"Jhon Doe","notes":null,"last_updated":"2020-09-19T14:06:59Z"},{"id":5,"status":"delivered","eta":"2020-09-21T07:20:55Z","parcel_id":"3839","sender":"Yozio","verification_required":true,"location_id":"SA07 16VS 1MTI 95VU GQCM FVOT","location_name":"Maple","location_coordinate_latitude":-14.1325,"location_coordinate_longitude":-73.268611,"location_status_ok":true,"user_phone":"s46 729478015","user_name":"Jhon Doe","notes":"Drainage of Right Ethmoid Bone, Percutaneous Approach, Diagn","last_updated":"2020-09-23T20:47:10Z"},{"id":6,"status":"on-the-way","eta":"2020-09-06T10:58:04Z","parcel_id":"0859","sender":"Quire","verification_required":false,"location_id":"HU86 9891 0245 8040 9016 7221 1324","location_name":"Washington","location_coordinate_latitude":24.117102,"location_coordinate_longitude":117.613808,"location_status_ok":true,"user_phone":":46 729478015","user_name":"Jhon Doe","notes":"Introduce Nonaut Fertilized Ovum in Fem Reprod, Perc","last_updated":"2020-09-13T00:39:27Z"},{"id":7,"status":"on-the-way","eta":"2020-09-07T13:49:49Z","parcel_id":"9774","sender":"Buzzdog","verification_required":true,"location_id":"RS85 1944 0487 7492 4818 12","location_name":"Summit","location_coordinate_latitude":-28.672732,"location_coordinate_longitude":20.4284431,"location_status_ok":false,"user_phone":"s46 729478015","user_name":"Jhon Doe","notes":"Removal of Int Fix from L Humeral Head, Perc Approach","last_updated":"2020-09-23T00:17:03Z"},{"id":8,"status":"on-the-way","eta":"2020-09-27T14:39:01Z","parcel_id":"7694","sender":"Cogibox","verification_required":false,"location_id":"FR82 2623 0113 94BQ PCPD R3LC D96","location_name":"Muir","location_coordinate_latitude":45.5632781,"location_coordinate_longitude":13.769491,"location_status_ok":false,"user_phone":"p46 729478015","user_name":"Jhon Doe","notes":null,"last_updated":"2020-09-01T20:34:43Z"},{"id":9,"status":"delivered","eta":"2020-09-24T10:03:20Z","parcel_id":"3489","sender":"Bluezoom","verification_required":false,"location_id":"LB23 4369 Q25T 9EP9 HQXI UFDW DC7K","location_name":"Fairfield","location_coordinate_latitude":50.05998,"location_coordinate_longitude":21.8324138,"location_status_ok":true,"user_phone":"l46 729478015","user_name":"Jhon Doe","notes":null,"last_updated":"2020-09-02T14:20:40Z"},{"id":10,"status":"delivered","eta":"2020-09-28T22:04:39Z","parcel_id":"8020","sender":"Browsezoom","verification_required":true,"location_id":"FR02 6000 1205 209C YEAO PW7S L81","location_name":"Doe Crossing","location_coordinate_latitude":14.5508865,"location_coordinate_longitude":121.0075554,"location_status_ok":true,"user_phone":"p46 729478015","user_name":"Jhon Doe","notes":null,"last_updated":"2020-09-23T22:00:24Z"}];

const allData = (values,index) => { 
  console.log("index: "+index);
  return(
      <Package
        //parcel_id={values.parcel_id}
        //status={values.status}
        //id={values.id}
        {...values}
      />
  )
}



function Packages() {
  // const [data, setData] = useState(null);

  // useEffect(() => {
  //   fetch('https://my.api.mockaroo.com/orders.json?key=e49e6840')
  //     .then(response => response.json())
  //     .then(data => setData(data))
  //     .catch(error => console.error(error));
  // }, []);
  let index = 0;
  return ( 
      <div>
        <ul className="packages">
          { mockjsondata.map(allData, index) }
        </ul>
      </div>
  );

  // return (
  //     <div>
  //     {/* Render the fetched data */}
  //     {data ? (
  //       <ul className="packages">
  //         { data.map(allData) }
  //       </ul>
  //     ) : (
  //       <p>Loading...</p>
  //     )}
  //     </div>
  // );
}

export default Packages;