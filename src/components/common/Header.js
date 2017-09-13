/* eslint-disable */
import React, {PropTrypes} from 'react';
import { Link, IndexLink } from 'react-router';
import logo from '../../images/logo.png';


const Header = () => {
    return (
        <nav className="navbar navbar-default main">
         <div>   
        <a href="/" className="navbar-brand"><img className="logo" src={logo}></img></a>
         </div>  
         <div className="container-fluid">
        </div>
        
    </nav>  

  
    
    );
};

export default Header;