
import React, { Component } from 'react'
import '../style/FaceFilter.style.css';

// <script type="module" src="render.js"></script>

export default class FaceFilter extends Component {

  render() {
    return (
  <div className="face-filter">
    <div id="facef-sdk-wrapper">
      <video id="facef-sdk-video" playsInline autoPlay></video>
      <canvas id="facef-sdk-canvas"></canvas>
    </div>

    <label htmlFor="progress-bar">Init. progress: </label>
    <progress id="progress-bar" max="100" value="0"></progress>
    
    <div className="videosource">
      <label htmlFor="video-source">Select Video source: </label>
      <select id="video-source">
        <option value="">select your device ID</option>
      </select>
    </div>

    </div>
      )};
  
}

