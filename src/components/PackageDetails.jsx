import './PackageDetails.css';

function PackageDetails(data) {
    return (
        <div className="package-details">
          { Object.keys( data ).map( ( key, index ) => 
              <div key={index}>
                {key} : {data[key]}
              </div>
            )
          }
        </div>
    )

}