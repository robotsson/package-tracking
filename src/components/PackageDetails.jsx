import './PackageDetails.css';
import { Link } from 'react-router-dom';

function _capitalizeFirstLetter(val) {
  return String(val).charAt(0).toUpperCase() + String(val).slice(1);
} 

function _getPadded( nbr )
{
  return (""+nbr).padStart(2, "0");
}

/* Shows the details of a package when you click on it */
function PackageDetails(package_item) {

    // console.log( package_item["user_name"]);
    let statusText = _capitalizeFirstLetter( package_item["status"].replaceAll("-", " ",) );

    let date = new Date( package_item["eta"] );
    const dateStr = date.getFullYear() +"-"+ _getPadded( date.getMonth() ) +"-"+ _getPadded( date.getDay() ) +" "+
                    _getPadded( date.getHours() ) +":"+ date.getMinutes();

    let arrivalStr = "Estimated arrival"; 
    if( package_item["status"] === "delivered" || package_item["status"] === "ready-for-pickup")
    {
      arrivalStr = "Arrived";
    }  

    return (
        <div>
          <p></p>
          <div className="package-details">
            <h3>{ package_item["sender"] }</h3>
            { statusText }
            <p></p>
            Pickup Location:
            <br/>
            { package_item["location_name"] }
            <p></p>
            {arrivalStr}:<br/>{ dateStr }
            <p></p>
            &nbsp;
            <p></p>
            <Link className="package-details-button" to="/package-tracking/packages/">
              Close
            </Link>
            <p></p>
          </div>
          <p></p>
 
          <p></p>        
        </div>
    );

  // Shows all fields
  //   return (
  //     <div>
  //       Hello { package_item["user_name"] }!<p></p>
  //       <div className="package-details">
  //         <h3>Package Details</h3>
      
  //         <div className="package-details-textbox">
  //           { 
  //             Object.keys( package_item ).map( 
  //               ( key, index ) => <div key={index}>
  //                                    {key} : {package_item[key]}
  //                                 </div>
  //             ) 
  //           }
  //         </div>
  //         <p></p>
  //         <Link className="package-details-button" to="/package-tracking/packages/">
  //           Back
  //         </Link>
  //         <p></p>
  //       </div>
  //     </div>
  // );


}


export default PackageDetails;