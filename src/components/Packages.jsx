import Package from './Package';
import './Packages.css';

/* creates a list of package items */
function Packages({ packages }) {
  
  if( packages )
  {   
    return (
    <div>
      Hello {packages[0].user_name}!
      <ul className="packages">
        { 
          packages.map( 
            ( package_item, index ) => ( <Package key={index} {...package_item}/> )
          ) 
        }
      </ul>
    </div> );
  }
  else
  {
    return ( <p>Packages Loading...</p> );
  }
}

export default Packages;