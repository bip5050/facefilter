import React from "react";
import style from "../style/SharingModal.style.css"

const SharingModal = ({showModal, onClose}) => {

  /* Close the modal window */
  const closeModal = e => {
    showModal = false
    onClose(e)
  }
    /* Hide if showTos is false */
    if (!showModal)
      return null;

    return (
      <div className="sharingModal">
        
        <div className="header">
          <h1>You look amazing!</h1>
          </div>

        /* Photo */
        <div className="photoWrapper" >
          <div className="photo" />
        </div>

        <div className="shareMessagingWrapper">
          <span className="shareMessaging">Share this look with your friends!</span>
          </div>

          <div className="shareButtons">
            Buttons go here.
          </div>


        /* Close button */
        <input
          type="submit"
          value="X CLOSE"
          className="closeSharingModal"
          onClick={e => {
            closeModal(e);
          }}
        />

      </div>
    )
}

export default SharingModal