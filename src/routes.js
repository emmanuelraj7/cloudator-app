
/* eslint-disable */
import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/app.js';
import RenderHomePage from './components/home/C0-RenderhomePage';
import RenderForecast from './components/Forecast/C0-RenderForecast';
import LiveWeather from './components/live-weather/C0-liveWeather';


export default (
    <Route path="/" component={App}>
      <IndexRoute component={RenderHomePage} />
      <Route path="live" component={LiveWeather} />
      <Route path="forecast" component={RenderForecast} />
     </Route>    
);