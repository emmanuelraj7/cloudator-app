/* eslint-disable */

import React from 'react';
import {Link} from 'react-router';
import $ from 'jquery';
import background from '../../images/bg1.jpg';
import CaptionGraphics from './C1-Captiongraphics';
import WeatherButtons from './C2-WeatherButtons';

var sectionStyle = {
  width: "100%",
  height: "800px",
  backgroundSize: 'cover',
  overflow: 'hidden',
  backgroundImage: "url(" + background + ")"
};


class RenderHomePage extends React.Component {
  render() {
   
     return (
     
     <section className="background" style={sectionStyle}>
       <CaptionGraphics />
       <WeatherButtons />
      </section>
     
     );
  }
}

export default RenderHomePage;

