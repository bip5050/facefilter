import React from "react";

const FaceFilter = (props) => {
    return (
      <div className="FaceFilter">
          <canvas className="faceFilterCanvas" width="1024" height="1024" id='jeeFaceFilterCanvas'></canvas>
          <div className="faceFilterCanvas" id='jeelizFaceFilterFollow'></div>
          </div>
    )
}

export default FaceFilter