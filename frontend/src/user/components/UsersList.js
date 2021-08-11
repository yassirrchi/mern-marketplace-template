import React from 'react';
import UserItem from '../../user/components/UsersItem';
 
const UsersList=props=>{
    if(props.items.length===0)
    return (<div style={{textAlign:"center"}}><h4>NO USERS FOUND</h4></div>);
    else
    return( <ul >{props.items.map(user=>{
        return(<UserItem key={user.id} id={user.id} image={user.image} name={user.name} placeCount={user.listings.length } /> );
    })}</ul> );
};
export default UsersList; 