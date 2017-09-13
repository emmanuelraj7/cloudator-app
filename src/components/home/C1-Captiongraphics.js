/* eslint-disable */

import React from 'react';
import {Link} from 'react-router';
import $ from 'jquery';
import background from '../../images/bg1.jpg';
import graphics1 from '../../images/sunny.png';
import graphics2 from '../../images/psunny.png';
import graphics3 from '../../images/thunder.png';



class CaptionGraphics extends React.Component {
 

  render() {
   
     return (
      <div >
      <p className="caption">WEATHER 24x7</p>    
      <p className="subcaption">Live. Forecast.</p>
      <div className="graphicsframe">    
      <img className="graphicsimg1" src={graphics1}></img>
      <img className="graphicsimg2" src={graphics2}></img>
      <img className="graphicsimg3" src={graphics3}></img>
      </div>
      </div>
     
     );
  }
}


export default CaptionGraphics;