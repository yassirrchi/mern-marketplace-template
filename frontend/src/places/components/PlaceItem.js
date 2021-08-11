import React,{useContext} from 'react';
import {Link,useHistory} from 'react-router-dom';
import {AuthContext} from '../../user/pages/auth-context';
import {Card} from'react-bootstrap';


const PlaceItem=(props)=>{
    const history=useHistory();
    const auth=useContext(AuthContext);
    const editlink=`/listings/${props.id}`;///listings/:listId


    const deleteListing=async ()=>{
        console.log("deleing");
            try{const res=await fetch(`http://localhost:5000/api/listings/${props.id}`,
            {method:'DELETE'}
            );
            history.push(`/${auth.userId}`);
              
            }
            catch(err){
            console.log(4);
            }
   
    }
    return(<li style={{marginTop:"10px"}}>
        
      
        <div>{/* place edit edit*/}
         
        
        </div>
        <div  style={{textAlign:"center"}}>
        <Card style={{width:"20rem",marginLeft:"40%",marginRight:"50%"}}>
         <Card.Img src={props.image}  />  
         <Card.Body>
         <Card.Title>{props.title} </Card.Title>
         <Card.Text> {props.description}</Card.Text>
         
        </Card.Body> 
        <Card.Footer>
        { auth.userId===props.creatorId&&<Link to={editlink}> <button>Edit</button></Link>}
        {auth.userId===props.creatorId&&<button onClick={deleteListing}>Delete</button>}
        </Card.Footer>
        </Card>
</div>
        
        </li>);
}
export default PlaceItem;