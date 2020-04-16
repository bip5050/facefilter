import React from "react";
import style from "../style/CameraPermissionOverlay.style.css"

export default function CameraPermissionOverlay ({display, onClose, Disablebtn}) {
  
  const renderPage = () => {
  return (
    <div className="overlay">
      
      <div className="logo"><h1>aura</h1></div>

      <div className="header">
        <h1>Try it on, anywhere.</h1>
        </div>

      {/* Close button */}
      {/* <button type="button" onClick={e => {onClose(e);}}>BEGIN</button> */}
      <input
        type="button"
        value="BEGIN"
        className="initCamera"
        disabled ={Disablebtn}
        onClick={e => {
          onClose(e);
        }}
      />

    </div>
  );
}

return display ? renderPage() : null
   
}


