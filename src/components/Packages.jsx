import Package from './Package';
import './Packages.css';



function _Compare( package1, package2 )
{
    const sortOrder = { "ready-for-pickup": 0, 
                        "on-the-way": 1,
                        "order-info-received": 2, 
                        "delivered": 3 };  
  
    return ( sortOrder[package1["status"]] - sortOrder[package2["status"]] );
}


/* creates a list of package items */
function Packages({ packages }) {
  
  if( packages )
  {   
    packages.sort( _Compare );

    return (
    <div>
      Hello {packages[0].user_name}!
      <div className="packages">
        <ul className="packages">
        { 
          packages.map( 
            ( package_item, index ) => ( <Package key={index} {...package_item}/> )
          ) 
        }
        </ul>
        <p></p>
      </div>
    </div> );
  }
  else
  {
    return ( <p>Packages Loading...</p> );
  }
}

export default Packages;