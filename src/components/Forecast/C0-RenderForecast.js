//This Componenet is a mash of all components for forecast page 

/* eslint-disable */

import React from 'react';
import {Link} from 'react-router';
import $ from 'jquery';
import background from '../../images/bg1.jpg';
import graphics from '../../images/ecg.png';
import ForecastAllInOne from './C1-Forecast_allinone';


var sectionStyle = {
  width: "100%",
  height: "800px",
  backgroundSize: 'cover',
  overflow: 'hidden',
  backgroundImage: "url(" + background + ")"
};



class RenderForecast extends React.Component {
  render() {
     return (
      <section className="background" style={sectionStyle}>
       <ForecastAllInOne />
       </section>
     );
 }
 }

export default RenderForecast;
