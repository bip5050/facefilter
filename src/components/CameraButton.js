import React from 'react'

const CameraButton = ({ image, onPhoto }) => {

    return (
        <div onClick={onPhoto} className="cameraButton">
            <img className="cameraButtonImage" src={image} alt="Camera" />
        </div>
    )
}

export default CameraButton