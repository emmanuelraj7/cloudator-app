/* eslint-disable no-console */

import React from 'react';
import {Link} from 'react-router';
import $ from 'jquery';
import DisplayResults from './C2-DisplayResults.js';





class ForecastAllInOne extends React.Component {
  constructor(props) {
    super(props);
    this.setState = this.setState.bind(this);
    this.state = {
      text: '',
      cities : [{
         id: '1',
         text: 'Helsinki'
      }
    ],
    day: 4,
    min_temp: '',
    max_temp: '',
    min_temp_one: '',
    max_temp_one: '',
    min_temp_two: '',
    max_temp_two: '',
    min_temp_three: '',
    max_temp_three: '',
    min_temp_three: '',
    max_temp_three: '',
    min_temp_four: '',
    max_temp_four: '',
    condition_one:'',
    condition_two:'',
    condition_three:'',
    condition_four:'',
    condition_five:'',
    units: '',
    day1: '',
    day2: '',
    day3: '',
    day4: '',
    day5: '',
    citiesoutrange : ''
  };
  }


  fetchRange1() {
    const get = document.getElementById('get1').value;
    document.getElementById('sliderval1').value = get;
  
  }

  fetchRange2() {
    const get = document.getElementById('get2').value;
    document.getElementById('sliderval2').value = get;
  
  }

 

//Add City to City list
  addCities() {
    const citytoadd = document.getElementById('cityname').value;  
    if(document.getElementById('cityname').value==''){
      alert('Please enter a valid city');
      return;
    }
    {this.addElementToCityList(citytoadd)}
    document.getElementById('cityname').value = '';
  }

  addElementToCityList(citytoadd) {
    
    const newCity = {
      id: this.state.cities.length + 1,
      text: citytoadd
    }
    this.setState({cities: this.state.cities.concat(newCity)});

 
  }

  //Delete Selected city
  onDelete(citys) {
    var cities = this.state.cities;
    for(var i=0; i < cities.length; i++){
      if(cities[i].id == citys.id){
        cities.splice(i, 1);
      }
    }
    this.setState({cities: cities});
  }
   


  DaySelector() {
    const day = document.getElementById('daysselector').value;
    this.state.day = day;   //changing state of component
 }
 


    fetchForecast() {
      
      

    const cities = this.state.cities;
    const minvalue = document.getElementById('sliderval1').value;;
    const maxvalue = document.getElementById('sliderval2').value;
    const numberofcities = cities.length;
  

    for(var i=0; i<cities.length; i++){
    const citytocheck = cities[i].text;

    CheckCityRange.bind(this)(minvalue, maxvalue, citytocheck);

      function CheckCityRange(minvalue, maxvalue, citytocheck){
      
      const api = 'http://api.openweathermap.org/data/2.5/forecast?q=';
      const apiKey = '&APPID=7a5726cd5744406fca3306daec5fb416';
      const units = '&units=metric';
      const city= citytocheck;
      const url = api + city + apiKey + units;
           
    return $.getJSON(url)
    .then((data) => {
       const a = 1;
       const all = new Array(); 
       for(var i=0; i<=35; i++) { 
         all[i] = (data.list[i].main.temp) 
      }
      const min = all.reduce((a, b) => Math.min(a, b));
      const max = all.reduce((a, b) => Math.max(a, b));
      
      if(min<minvalue){
        this.setState({citiesoutrange: citytocheck});
        console.log(citytocheck);
      }if(max>maxvalue){
        this.setState({citiesoutrange: citytocheck});
        console.log(citytocheck);
      }



      
    });  
    }
       

   }

  }
 

 


//Master function: API Calls,statechanges, Alerts, 5day forecast
  viewForecastData(citys) {
    
    const cityname_decode = citys.text;
    
   
    
    if(this.state.day=='1'){ 
     DayOneForecast.bind(this)(cityname_decode);  
    }
   
    if(this.state.day=='2'){
      DayOneForecast.bind(this)(cityname_decode);
      DayTwoForecast.bind(this)(cityname_decode);
    }
    if(this.state.day=='3'){
      DayOneForecast.bind(this)(cityname_decode);
      DayTwoForecast.bind(this)(cityname_decode);
      DayThreeForecast.bind(this)(cityname_decode);
    }
    if(this.state.day=='4'){
      DayOneForecast.bind(this)(cityname_decode);
      DayTwoForecast.bind(this)(cityname_decode);
      DayThreeForecast.bind(this)(cityname_decode);
      DayFourForecast.bind(this)(cityname_decode);
    }
    if(this.state.day=='5'){
      DayOneForecast.bind(this)(cityname_decode);
      DayTwoForecast.bind(this)(cityname_decode);
      DayThreeForecast.bind(this)(cityname_decode);
      DayFourForecast.bind(this)(cityname_decode);
      DayFiveForecast.bind(this)(cityname_decode);
    }

   
    function DayOneForecast(cityname_decode){
      const api = 'http://api.openweathermap.org/data/2.5/forecast?q=';
      const apiKey = '&APPID=7a5726cd5744406fca3306daec5fb416';
      const units = '&units=metric';
      const city= cityname_decode;
      const url = api + city + apiKey + units;
           
    return $.getJSON(url)
    .then((data) => {
       const a = 1;
       const all = new Array(); 
       for(var i=0; i<=8; i++) { 
         all[i] = (data.list[i].main.temp) 
      }
      const min = all.reduce((a, b) => Math.min(a, b));
      const max = all.reduce((a, b) => Math.max(a, b));
      
      const alerts = (data.list[1].weather[0].main);

      this.setState({condition_one: alerts});
      this.setState({day1: 'Day1(Today)'});
      this.setState({min_temp: min});
      this.setState({max_temp: max});
      
    });  
  }
   


  function DayTwoForecast(cityname_decode){
    const api = 'http://api.openweathermap.org/data/2.5/forecast?q=';
    const apiKey = '&APPID=7a5726cd5744406fca3306daec5fb416';
    const units = '&units=metric';
    const city= cityname_decode;
    const url = api + city + apiKey + units;
         
  return $.getJSON(url)
  .then((data) => {
     const a = 1;
     const all = new Array(); 
     for(var i=8; i<=15; i++) { 
       //console.log(data.list[i].main.temp);
       all[i] = (data.list[i].main.temp) 
    }
    var min = all.reduce((a, b) => Math.min(a, b));
    var max = all.reduce((a, b) => Math.max(a, b));
    const alerts = (data.list[9].weather[0].main);
    
    this.setState({condition_two: alerts});
    this.setState({day2: 'Day2'});
    this.setState({min_temp_one: min});
    this.setState({max_temp_one: max});
  });
     
} 

function DayThreeForecast(cityname_decode){
  const api = 'http://api.openweathermap.org/data/2.5/forecast?q=';
  const apiKey = '&APPID=7a5726cd5744406fca3306daec5fb416';
  const units = '&units=metric';
  const city= cityname_decode;
  const url = api + city + apiKey + units;
       
return $.getJSON(url)
.then((data) => {
   const a = 1;
   const all = new Array(); 
   for(var i=16; i<=23; i++) { 
     all[i] = (data.list[i].main.temp) 
  }
  var min = all.reduce((a, b) => Math.min(a, b));
  var max = all.reduce((a, b) => Math.max(a, b));
  const alerts = (data.list[17].weather[0].main);
  
        this.setState({condition_three: alerts});
        this.setState({day3: 'Day3'});
  this.setState({min_temp_two: min});
  this.setState({max_temp_two: max});
});
   
}

function DayFourForecast(cityname_decode){
  const api = 'http://api.openweathermap.org/data/2.5/forecast?q=';
  const apiKey = '&APPID=7a5726cd5744406fca3306daec5fb416';
  const units = '&units=metric';
  const city= cityname_decode;
  const url = api + city + apiKey + units;
       
return $.getJSON(url)
.then((data) => {
   const a = 1;
   const all = new Array(); 
   for(var i=24; i<=31; i++) { 
     all[i] = (data.list[i].main.temp) 
  }
  var min = all.reduce((a, b) => Math.min(a, b));
  var max = all.reduce((a, b) => Math.max(a, b));
  const alerts = (data.list[25].weather[0].main);
  
        this.setState({condition_four: alerts});
        this.setState({day4: 'Day4'});
  this.setState({min_temp_three: min});
  this.setState({max_temp_three: max});
});
   
}

function DayFiveForecast(cityname_decode){
  const api = 'http://api.openweathermap.org/data/2.5/forecast?q=';
  const apiKey = '&APPID=7a5726cd5744406fca3306daec5fb416';
  const units = '&units=metric';
  const city= cityname_decode;
  const url = api + city + apiKey + units;
       
return $.getJSON(url)
.then((data) => {
   const a = 1;
   const all = new Array(); 
   for(var i=32; i<=39; i++) { 
     all[i] = (data.list[i].main.temp) 
  }
  var min = all.reduce((a, b) => Math.min(a, b));
  var max = all.reduce((a, b) => Math.max(a, b));
  const alerts = (data.list[33].weather[0].main);
  
  this.setState({condition_five: alerts});
  this.setState({day5: 'Day5'});
  this.setState({min_temp_four: min});
  this.setState({max_temp_four: max});
});
   
}

     }

     componentDidMount() {
      
      window.onload = function() {
        document.getElementById("livebutton").onmouseover = function()
        {
            this.style.backgroundColor = "#ff8328";
        };

    };
   
           
  
    }
        


    render() {
      
   
      const values ={
        citesoutrange: this.state.citiesoutrange,
        min: 'Min',
        heading1: 'Day1'

      }

       return (
         <div>
           <div className="contentboxc1">
        
         <p className="subheading">Select cities:</p>
         <input type="text" size="30" id="cityname" placeholder="city..." ref="text"></input>
         <button id="livebutton" onClick={() => this.addCities()}>Add</button>
         <button id="livebutton" onClick={() => this.fetchForecast()}>Track</button><br></br>
        

        
        <span className="inputdays">
         <p className="subheading3">Days : </p> 
         <select onChange={() => this.DaySelector()} id="daysselector">
         <option value="default">-</option>
         <option value="1">1</option>
         <option value="2">2</option>
         <option value="3">3</option>
         <option value="4">4</option>
         <option value="5">5</option>
         </select>
         </span>
         </div>



         <div className="contentboxc2">   
        <div className="Range1"><p id="parameter">Min</p><input type="range" id="get1" min="0" max="50" onChange={() => this.fetchRange1()} /><output type="text" id="sliderval1">C</output></div>
        <div className="Range2"><p id="parameter">Max</p><input type="range" id="get2" min="0" max="50" onChange={() => this.fetchRange2()} /><output type="text" id="sliderval2">C</output></div>
        
         
        </div>

        <DisplayResults values={values}/>
      

       <div className="citylist-wrap">
       <div className="contentboxc3">
        <ul>
        {
         this.state.cities.map(citys => {
              return <li className="cities-list" citys={citys} key={citys.id}>{citys.text}<a onClick={() => this.onDelete(citys)} className="delete" href="#">   x</a><a onClick={() => this.viewForecastData(citys)} className="delete1" href="#">  forecast</a></li>
         })
        }

        </ul>  
       </div>
      </div>

      

       <div className="tests">
       <div id=""><span className="weatheroutput"></span></div>
           <div className="resultday1">
           <h1 className="resultheading">{this.state.day1}</h1>
           <p>{this.state.min_temp}</p>
           <p>{this.state.max_temp}</p>
           <p>{this.state.condition_one}</p>
           </div>


           <div className="resultday2">
           <h1 className="resultheading">{this.state.day2}</h1>
           <div id="tests"><span className="weatheroutput"></span></div>
           <p>{this.state.min_temp_one}</p>
           <p>{this.state.max_temp_one}</p>
           <p>{this.state.condition_two}</p>
           </div>

           <div className="resultday3">
           <h1 className="resultheading">{this.state.day3}</h1>
           <div id="tests"><span className="weatheroutput"></span></div>
           <p>{this.state.min_temp_two}</p>
           <p>{this.state.max_temp_two}</p>
           <p>{this.state.condition_three}</p> 
           </div>

           <div className="resultday4"> 
           <h1 className="resultheading">{this.state.day4}</h1>
           <div id="tests"><span className="weatheroutput"></span></div>
           <p>{this.state.min_temp_three}</p>
           <p>{this.state.max_temp_three}</p>
           <p>{this.state.condition_four}</p> 
           </div>


           <h1 className="resultheading">{this.state.day5}</h1>
           <div id="tests"><span className="weatheroutput"></span></div>
           <p>{this.state.min_temp_four}</p>
           <p>{this.state.max_temp_four}</p>
           <p>{this.state.condition_five}</p> 



         </div>
         <div>

         </div>  
      
         
       
        
         
        
         </div>
         
         
       );
   }
   }

   export default ForecastAllInOne;