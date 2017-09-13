/* eslint-disable */

import React from 'react';
import {Link} from 'react-router';
import $ from 'jquery';


class WeatherButtons extends React.Component {
 
  componentDidMount() {
    
    window.onload = function() {
      document.getElementById("firstbutton").onmouseover = function()
      {
          this.style.backgroundColor = "#ff8328";
      };

      document.getElementById("secondbutton").onmouseout = function()
      {
          this.style.backgroundColor = "#ff8328";
      };
  };
 
         

  }


  render() {
   
     return (
     
    
       <div className="buttons">
       <div><Link to="live"><button id="firstbutton">Live Weather</button></Link></div>
       <div><Link to="forecast"><button id="secondbutton">Forecast</button></Link></div>
       </div> 
  
     
     );
  }
}


export default WeatherButtons;
