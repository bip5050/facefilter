import React from "react";
import style from "../style/SharingModal.style.css"

const SharingModal = ({ showModal, onClose, SnapUrl }) => {

  /* Close the modal window */
  const closeModal = e => {
    showModal = false
    onClose(e)
  }
  /* Hide if showTos is false */
  if (!showModal)
    return null;

  const ShareImage = (e) => {

    switch (e.target.id) {
      case 'fb':
        window.open('http://www.facebook.com/sharer.php?u=' + {SnapUrl} + '&t=' + encodeURIComponent('Ar Snap'), 'sharer', 'toolbar=0,status=0,width=626,height=436');
        break;
      case 'insta':
        // window.open('http://www.facebook.com/sharer.php?u=' + encodeURIComponent({SnapUrl}) + '&t=' + encodeURIComponent('Ar Snap'), 'sharer', 'toolbar=0,status=0,width=626,height=436');
        break;
      case 'pin':
        window.open('https://pinterest.com/pin/create/button/?media=' + encodeURIComponent({SnapUrl}), 'sharer', 'toolbar=0,status=0,width=626,height=436');
        break;
      default:
        break;
    }

  }

  const downloadImage = (e) => {
    var link = document.createElement('a');
    link.download = 'snap.jpg';
    link.href = SnapUrl;
    link.click();
  }

  return (
    <div className="sharingModal">

      <div className="header">
        <h1>You look amazing!</h1>
      </div>

      <div className="photoWrapper" >
        <div className="photo">
          <img src={SnapUrl} alt="snap" />
        </div>
      </div>

      <div className="shareMessagingWrapper">
        <span className="shareMessaging">Share this look with your friends!</span>
      </div>

      <div className="shareButtons">
        <ul>
          <li className="button-share"> <img src="img/fb.svg" alt="" id="fb" onClick={ShareImage} /> </li>
          <li className="button-share"> <img src="img/insta.svg" alt="" id="insta" onClick={ShareImage} /> </li>
          <li className="button-share"> <img src="img/pin.svg" alt="" id="pin" onClick={ShareImage} /> </li>
          <li className="button-share"> <img src="img/pic.svg" alt="" onClick={downloadImage} /> </li>
        </ul>
      </div>
      <form className="shareForm">
        <div className="group">
          <label htmlFor="yourMail">Your email</label>
          <input id="yourMail" type="email" />
        </div>
        <div className="group">
          <label htmlFor="friendMail">Friend's Mail</label>
          <input id="friendMail" type="email" />
        </div>
        <button>submit</button>

      </form>


      <button
        className="closeSharingModal"
        onClick={e => {
          closeModal(e);
        }}
      >X</button>

    </div>
  )
}

export default SharingModal