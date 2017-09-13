//This component compiles all components for multple days forecast page 
/* eslint-disable */

import React from 'react';
import {Link} from 'react-router';
import $ from 'jquery';
import background from '../../images/bg1.jpg';
import Request from 'superagent';
import icon1 from '../../images/sunny.png';
import icon2 from '../../images/heavy-rain.png';
import icon3 from '../../images/temp.png';
import icon4 from '../../images/snow.png';
import icon5 from '../../images/cloudy-haze.png';
import icon6 from '../../images/thunder.png';


class OutputWeather extends React.Component {
  
  //Renders icon based on weather Alerts
  renderIcon() {
    if(this.props.values.conditions=='Rain'){
   return (
     <img className="graphicsimg1" src={icon2}></img>
   )
 } if(this.props.values.conditions=='Clear'){
   return (
     <img className="graphicsimg1" src={icon1}></img>
   )
 } if(this.props.values.conditions=='Clouds'){
  return (
    <img className="graphicsimg1" src={icon5}></img>
  )
} if(this.props.values.conditions=='Haze'){
  return (
    <img className="graphicsimg1" src={icon5}></img>
  )
} if(this.props.values.conditions=='Snow'){
  return (
    <img className="graphicsimg1" src={icon4}></img>
  )
} if(this.props.values.conditions=='Thunderstorm'){
  return (
    <img className="graphicsimg1" src={icon6}></img>
  )
} if(this.props.values.conditions=='Mist'){
  return (
    <img className="graphicsimg1" src={icon5}></img>
  )
}  


 }

 //Renders temperature icon
 tempIcon() {
   if(this.props.values.currenttemp) {
    return (
      <img className="graphicsimg1" src={icon3}></img>
    ) 
  } else {
    console.log("none");
  }
 }

 //Fetches Weather Alerts
 WeatherConditions () {
  if(this.props.values.units==1) {
   return (
    <span className="test">{this.renderIcon()}{this.props.values.conditions}</span>
   )
  }
 }

//Fetches current temperature
 currentTemp () {
  if(this.props.values.units==1) {
   return (
    <span className="test">{this.tempIcon()}{this.props.values.currenttemp} C</span>
   )
  }
 }

//Fetches minimum temperature 
 minTemp () {
  if(this.props.values.units==1) {
   return (
    <span className="test">Min: {this.props.values.mintemp} C</span>
   )
  }
 }

//Fetches maximum temperature 
 maxTemp () {
  if(this.props.values.units==1) {
   return (
    <span className="test">Max: {this.props.values.maxtemp} C</span>
   )
  }
 }

    render() {

  console.log(this.props.values);
     return (
        <div> 
          <div id="output1"><span className="weatheroutput">{this.WeatherConditions()}</span></div>
         <div id="output2"><span className="weatheroutput">{this.currentTemp()}</span></div>
         <div id="output3"><span className="weatheroutput">{this.minTemp()}</span></div>
         <div id="output4"><span className="weatheroutput">{this.maxTemp()}</span></div>
        </div>    
       
     );
 }
 }

export default OutputWeather;

OutputWeather.PropTypes = {
  currenttemp: React.PropTypes.number,
  conditions: React.PropTypes.string,
  mintemp: React.PropTypes.number,
  maxtemp: React.PropTypes.number,
  units: React.PropTypes.number
};