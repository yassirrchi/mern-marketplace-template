import React from 'react';
import {Link} from 'react-router-dom';
import PlaceItem from './PlaceItem';

const PlaceList=(props)=>{
if(props.items.length===0){
return(<div className="place-list">
   <h2>No listin Found. share one ?</h2>
   <Link to="/place/new"> <button>Share listin</button> </Link>
</div>);}
else 
return(<ul>{props.items.map(place=>
<PlaceItem key={place.id}
 id={place.id}
 image={place.image}
 description={place.description}
 title={place.title}
 creatorId={place.creator} 
 address={place.address}
 coordinates={place.location}/>)}</ul>);
}
export default PlaceList;