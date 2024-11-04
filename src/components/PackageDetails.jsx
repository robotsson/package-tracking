import './PackageDetails.css';
import { Link } from 'react-router-dom';


/* Shows the details of a package when you click on it */
function PackageDetails(package_item) {

    console.log( package_item["user_name"]);

    return (
        <div>
          Hello { package_item["user_name"] }!<p></p>
          <div className="package-details">
            <h3>Package Details</h3>
        
            <div className="package-details-textbox">
              { 
                Object.keys( package_item ).map( 
                  ( key, index ) => <div key={index}>
                                       {key} : {package_item[key]}
                                    </div>
                ) 
              }
            </div>
            <p></p>
            <Link className="package-details-button" to="/package-tracking/packages/">
              Back
            </Link>
            <p></p>
          </div>
        </div>
    );

}


export default PackageDetails;