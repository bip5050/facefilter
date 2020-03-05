import React from 'react'

export const CameraButton = ({ image, onPhoto }) => {

    return (
        <div onClick={onPhoto} className="cameraButton">
            <img className="cameraButtonImage" src={image} alt="Camera" />
        </div>
    )
}

