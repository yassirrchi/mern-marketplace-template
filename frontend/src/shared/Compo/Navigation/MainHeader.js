import React from 'react';
import './MainHeader.css';

const MainHeader=(props)=>{
    return(<header className="Main-Header">
     {props.children}
    </header>);
};
export default MainHeader;