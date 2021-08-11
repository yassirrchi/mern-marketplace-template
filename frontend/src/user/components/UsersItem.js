import React from 'react';
import {Link} from 'react-router-dom';
import {Card} from'react-bootstrap';
const UserItem=(props)=>{
    const link=`/${props.id}/places`;
    return(<li className="user-item" style={{marginTop:"10px"}} ><Link to={link}>

         <div  style={{textAlign:"center"}}>
        <Card style={{width:"10rem",marginLeft:"50%",marginRight:"50%"}}>
         <Card.Img src={props.image} />  
         <Card.Body>
         <Card.Title>{props.name}</Card.Title>
         <Card.Text>Listings: {props.placeCount}</Card.Text>
             
        </Card.Body> 
        </Card>
</div>

        </Link></li>);
}
export default UserItem;