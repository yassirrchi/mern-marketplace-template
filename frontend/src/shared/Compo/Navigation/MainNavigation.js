import React from 'react';
import {Link} from 'react-router-dom';
import MainHeader from './MainHeader';
import NavLinks from './NavLinks';
import NavLinksBootstrap from './NavLinksBootstrap';//temp
import './MainNavigation.css';

const MainNavigation =props=>{

    return(<MainHeader className="main-nav-menu-btn">
        
        
       <nav> <NavLinksBootstrap/></nav>
    </MainHeader>);
}
export default MainNavigation;