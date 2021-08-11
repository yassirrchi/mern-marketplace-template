import React,{useContext} from 'react';
import {NavLink} from 'react-router-dom';
import Auth from '../../../user/pages/Auth';
import {AuthContext} from '../../../user/pages/auth-context';
import {Navbar,Nav,Form,FormControl,Button} from 'react-bootstrap';
   

const NavLinksBootstrap =(props)=>{
    const auth=useContext(AuthContext);
return(<div>

 {/*   <ul>
           <li><NavLink to="/newplace">all listings</NavLink> </li>  

           <li><NavLink to="/" exact>All Users</NavLink> </li>

           {auth.isLoggedIn&&<li><NavLink to="/place/new">Add Places</NavLink> </li>}

           {auth.isLoggedIn&&<li><button onClick={auth.logout}>LOGOUT</button> </li>}
          
          {!auth.isLoggedIn&&<li><NavLink to="/Auth">Authentificate</NavLink> </li>} </ul>
          
          
          
 */  } <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">Annonces.ma</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto"> 
      <Nav.Link><NavLink to="/newplace">all listings</NavLink></Nav.Link>
      <Nav.Link ><NavLink to="/" exact>All Users</NavLink></Nav.Link>
        {auth.isLoggedIn&& <Nav.Link ><NavLink to="/place/new">Add Listings</NavLink></Nav.Link>}
        {!auth.isLoggedIn&& <Nav.Link ><NavLink to="/Auth">Authentificate</NavLink></Nav.Link>}
      

    </Nav>
    {auth.isLoggedIn&&<Nav.Link ><button onClick={auth.logout} className="btn btn-danger">LOGOUT</button></Nav.Link>}
  </Navbar.Collapse>
</Navbar>
</div>
 
  
          );
}
export default NavLinksBootstrap;