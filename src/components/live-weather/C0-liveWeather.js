//This componenet compiles all components for multple days forecast page 
/* eslint-disable */

import React from 'react';
import {Link} from 'react-router';
import $ from 'jquery';
import background from '../../images/bg1.jpg';
import InputCity from './C1-inputcity';
import OutputWeather from './C2-OutputWeather';


var sectionStyle = {
  width: "100%",
  height: "800px",
  backgroundSize: 'cover',
  overflow: 'hidden',
  backgroundImage: "url(" + background + ")"
};


class LiveWeather extends React.Component {
  render() {
    const parameters = {
      currenttemp: '',
      conditions: '',
      mintemp: '',
      maxtemp: '',
      units: ''
    };
     return (
      <section className="background" style={sectionStyle}>
       <InputCity parameters={parameters}/>
        </section>
     );
 }
 }

export default LiveWeather;