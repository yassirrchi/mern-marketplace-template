import React,{useState,useCallback} from 'react';
import {BrowserRouter as Router,Route,Redirect,Switch} from 'react-router-dom';
import Users from './user/pages/Users';
import NewPlace from './places/pages/NewPlace';
import UserPlaces from './places/pages/UserPlaces' ;
import UpdateListing from './places/pages/UpdateListing';
import MainNavigation from './shared/Compo/Navigation/MainNavigation';
import Auth from './user/pages/Auth';
import {AuthContext} from './user/pages/auth-context';
import './user/components/UsersItem.css';
import './user/components/UsersList.css';
import'bootstrap/dist/css/bootstrap.css';
function App() {
   const [isLoggedIn,setIsLoggedIn]=useState(false);
   const [userId,setUserId]=useState(false);
  const login=useCallback((uid)=>{
    setIsLoggedIn(true);
    setUserId(uid);
  },[]);
  const logout=useCallback(()=>{
    setIsLoggedIn(false);
    setUserId(null);
  },[]);
  let routes;
  if(isLoggedIn){
  routes=(<Switch><Route path="/" exact ><Users/></Route>
  <Route path="/:userid/places" exact ><UserPlaces/></Route>
  <Route path="/place/new" exact ><NewPlace/></Route>
  <Route path="/listings/:listId" exact ><UpdateListing/></Route>
  <Redirect to="/"/>
</Switch>);}
  else{
    routes=(<Switch><Route path="/" exact ><Users/></Route>
    <Route path="/:userid/places" exact ><UserPlaces/></Route>
    <Route path="/Auth" exact ><Auth/></Route>
    <Redirect to="/Auth"/>
  </Switch>);}
    
  return(<div>
    <AuthContext.Provider value={{isLoggedIn:isLoggedIn,userId:userId,login:login,logout:logout}} >
  <Router>
    <MainNavigation/>
    
      {routes}
 
 </Router>
 </AuthContext.Provider></div>);
}

export default App;
