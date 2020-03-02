
import React, { Component } from 'react'
import '../style/FaceFilter.style.css';
import init from "../js/render.js";

// <script type="module" src="render.js"></script>

export default class ProductMenu extends Component {

  componentDidMount() {
    init();
  }

  render() {
    return (
  <div className="container">
  

    <div id="facef-sdk-wrapper">
      <video id="facef-sdk-video" playsinline autoplay></video>
      <canvas id="facef-sdk-canvas"></canvas>
    </div>

    <label for="progress-bar">Init. progress: </label>
    <progress id="progress-bar" max="100" value="0"></progress>
  
    </div>
      )};
  
}

