import "../css/Landing2.css";
import React, { Component } from 'react';

class Landing2 extends Component{
    render(){
  return (
    <div className="landing2">
        <div className="heading2">
            <h1> {this.props.heading} </h1>
            <p>{this.props.text}</p>
        </div>
    </div>
  )
}
}
export default Landing2;