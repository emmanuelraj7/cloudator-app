//This componenet compiles all components for multple days forecast page 
/* eslint-disable */

import React from 'react';
import {Link} from 'react-router';
import $ from 'jquery';
import background from '../../images/bg1.jpg';
import graphics1 from '../../images/sunny.png';
import graphics2 from '../../images/heavy-rain.png';
import graphics3 from '../../images/snow.png';
import OutputWeather from './C2-OutputWeather';



class InputCity extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
          currenttemp: this.props.currenttemp,
          conditions: this.props.conditions,
          mintemp: this.props.mintemp,
          maxtemp: this.props.maxtemp,
          units: this.props.units
      
      };
      }
    
      componentWillMount() {
        
        
      }
    

     fetchLiveTemp() {

        const api = 'http://api.openweathermap.org/data/2.5/weather?q=';
        const apiKey = '&APPID=7a5726cd5744406fca3306daec5fb416';
        const units = '&units=metric';
        const city= document.getElementById('livecity').value;
        const url = api + city + apiKey + units;
             
      return $.getJSON(url)
      .then((data) => {
        this.setState({ 
          currenttemp: data.main.temp,
          conditions: data.weather[0].main, 
          mintemp: data.main.temp_min, 
          maxtemp: data.main.temp_max,
          units: 1 
        });
      });


     }
  
      


  render() {
    const values = {
      currenttemp: this.state.currenttemp,
      conditions: this.state.conditions,
      mintemp: this.state.mintemp,
      maxtemp: this.state.maxtemp,
      units: this.state.units
    };
     return (
      
        <div> 
         <input type="text" size="30" id="livecity" placeholder="city..."></input>
         <button id="livebutton" onClick={() => this.fetchLiveTemp()}>Live</button>
         <OutputWeather values={values}/>
        </div>    
       
     );
 }
 }

export default InputCity;


InputCity.PropTypes = {
  currenttemp: React.PropTypes.number,
  conditions: React.PropTypes.string,
  mintemp: React.PropTypes.number,
  maxtemp: React.PropTypes.number,
  units: React.PropTypes.number
};