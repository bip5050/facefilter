import { updateSize, processFrame } from "./render.js";

let videoSourceSelect = null;
let video = null;
let videoCanvas = null;

let videoReady = false;
let currentVideoSource = "";

export function initVideoCapture() {
    console.log("Innit video capture called")
  videoSourceSelect = document.getElementById("video-source");
  video = document.getElementById("facef-sdk-video");
  videoCanvas = document.createElement("canvas");

  let faceCanvas = document.getElementById("facef-sdk-canvas");

  let ctx = videoCanvas.getContext('2d');
  ctx.scale(-1, 1); // Set scale to flip the image
  ctx.save(); // Save the current state


   //ctx = video.getContext('2d');
  //ctx.scale(-1, 1); // Set scale to flip the image
  //ctx.save(); // Save the current state



  navigator.mediaDevices.ondevicechange = onMediaDeviceChange;
  videoSourceSelect.onchange = onVideoSelectionChanged;
  video.oncanplay = onVideoCanPlay;
  videoCanvas.style.display = "none";

  // -- Initialize Video capture
  window.addEventListener("orientationchange", () => {
    updateSize(video, videoCanvas);
  });

  // Start front facing camera if possible
  navigator.mediaDevices
    .getUserMedia({
      audio: false,
      video: { facingMode: "face" }
    })
    .then(stream => {
      video.srcObject = stream;

      // Populate devices list
      // To get the correct labels, this can only be
      // done after user has given permissions
      onMediaDeviceChange();

    })
    .catch(e => console.error("Unable to get video stream: ", e));
    processFrame()

}

export function onMediaDeviceChange() {
  navigator.mediaDevices
    .enumerateDevices()
    .then(devices => {
      for (let i = videoSourceSelect.options.length - 1; i >= 1; i--) {
        videoSourceSelect.remove(i);
      }

      let selectedDeviceFound = false;
      devices
        .filter(device => device.kind === "videoinput")
        .map(device => {
          const option = document.createElement("option");
          option.value = device.deviceId;
          option.text =
            device.label || `camera ${videoSourceSelect.options.length}`;
          videoSourceSelect.appendChild(option);
          if (device.deviceId === currentVideoSource) {
            selectedDeviceFound = true;
          }
        });

      if (!selectedDeviceFound) {
        currentVideoSource = "";
      }

      videoSourceSelect.value = currentVideoSource;
    })
    .catch(e => console.error("Unable to enumerate devices: ", e));
}

export function onVideoSelectionChanged(event) {
    console.log(onVideoSelectionChanged)
  const videoSource = event.target.value;
  if (videoSource === "" || videoSource === currentVideoSource) {
    return;
  }

  if (video.srcObject) {
    video.srcObject.getTracks().forEach(track => track.stop());
  }

  currentVideoSource = videoSource;
  navigator.mediaDevices
    .getUserMedia({
      audio: false,
      video: {
        deviceId: { exact: videoSource }
      }
    })
    .then(stream => {
      video.srcObject = stream;
    })
    .catch(e => console.error("Unable to get video stream: ", e));
}

export function onVideoCanPlay() {
  videoReady = true;
  updateSize(video, videoCanvas);
}

export function isVideoReady() {
  return videoReady;
}

export function getVideoCanvas() {
  return videoCanvas;
}
export function getVideo() {
  return video;
}
