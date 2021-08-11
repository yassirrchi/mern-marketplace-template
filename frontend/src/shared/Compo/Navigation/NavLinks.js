import React,{useContext} from 'react';
import {NavLink} from 'react-router-dom';
import Auth from '../../../user/pages/Auth';
import {AuthContext} from '../../../user/pages/auth-context';
import {Navbar,Nav} from 'react-bootstrap';
   

const NavLinks =(props)=>{
    const auth=useContext(AuthContext);
return(

<ul>
           <li><NavLink to="/newplace">all listings</NavLink> </li>  

           <li><NavLink to="/" exact>All Users</NavLink> </li>

           {auth.isLoggedIn&&<li><NavLink to="/place/new">Add listing</NavLink> </li>}

           {auth.isLoggedIn&&<li><button onClick={auth.logout}>LOGOUT</button> </li>}
          
          {!auth.isLoggedIn&&<li><NavLink to="/Auth">Authentificate</NavLink> </li>} </ul>
           
          
          
          );
}
export default NavLinks;