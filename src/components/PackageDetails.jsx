import './PackageDetails.css';
import { useParams, Link } from 'react-router-dom';



function PackageDetails(data) {

    return (
        <div className="package-details">
          <h3>Package Details</h3>
          <div className="package-details-textbox">
            { Object.keys( data ).map( ( key, index ) => 
                <div key={index}>
                {key} : {data[key]}
                </div>
            ) }
          </div>
          <p></p>
          <Link className="package-details-button" to="/package-tracking/packages/">
            Back
          </Link>
          <p></p>
        </div>

    )

}

export default PackageDetails;