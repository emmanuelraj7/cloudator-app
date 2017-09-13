//This Componenet is a mash of all components for forecast page 

/* eslint-disable */

import React from 'react';
import {Link} from 'react-router';
import $ from 'jquery';





class DisplayResults extends React.Component {
  render() {
     return (
      <div className="resultscities">
        <p >Cities out of range: {this.props.values.citesoutrange}</p> 
      </div>    
     );
 }
 }

export default DisplayResults;


DisplayResults.PropTypes = {
    citesoutrange: React.PropTypes.string
  };