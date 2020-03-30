import React from 'react';
import { useEffect } from 'react';
import '../style/FaceFilter.style.css';

import {
    initThreejs,
    createFaceGeometry,
    renderThreejs,
    renderScene,
    updateSize
} from './render.js';


const $ = window.$;

export const FaceFilter = () => {

  const handleReady = () => {
      let input = document.getElementsByClassName('initCamera')[0]
      input.value = "BEGIN"
      input.disabled = false;
  }

    useEffect(() => {

       
     
        // INITIALIZING AR LIBRARY
        const video = document.getElementById('facef-video');

        const facef = new window.facef.MagicFace();
        let facefInitialized = false;
        const facefConfig = {
            libPath: 'facef',
            fovY: 50,
        };



        const videoCanvas = document.createElement('canvas');
        videoCanvas.style.display = 'none';

        let videoReady = false;

        video.oncanplay = onVideoCanPlay;

        function initVideoCapture() {
            // -- Initialize Video capture
            window.addEventListener('orientationchange', () => {
                updateSize(video, videoCanvas);

            });

            // Start front facing camera if possible
            navigator.mediaDevices
                .getUserMedia({
                    audio: false,

                    video: { facingMode: 'face' },
                })
                .then(stream => {
                    video.srcObject = stream;

                    // Populate devices list
                    // To get the correct labels, this can only be
                    // done after user has given permissions
                })
                .catch(e => console.error('Unable to get video stream: ', e));
        }

        function onLoadCompleted() {

            $('.loadingMessage').fadeOut();

            setInterval(() => {
                facef.initialize();
            }, 20000);

            // Change component
            handleReady()
        }


        function onVideoCanPlay() {
            videoReady = true;

            updateSize(video, videoCanvas);
        }

        function isVideoReady() {
            return videoReady;
        }

        function getVideoCanvas() { return videoCanvas; }
        function getVideo() { return video; }


        function init() {
            let input = document.getElementsByClassName('initCamera')[0]
            input.value = "LOADING..."
            input.disabled = true;
            var loaded = false;
            initThreejs(facefConfig.fovY, getVideo(), getVideoCanvas());

            // Initialize Magic Face
            facef.initialize(
                facefConfig,
                () => {
                    createFaceGeometry(facef);
                    facefInitialized = true;
                },
                error => console.log('Error initializing Magic Face: ' + error),
                progress => {
                    if (progress === 1 && !loaded) {
                        loaded = true;
                        return onLoadCompleted();
                    }
                }
            );

            // -- Initialize Video capture
            initVideoCapture();

        }

        function processFrame() {

            // Draw video in canvas for Magic Face to use
            getVideoCanvas().getContext('2d').drawImage(
                getVideo(),
                0,
                0,
                getVideoCanvas().width,
                getVideoCanvas().height
            );

            //if (videoReady && facefInitialized) {
            if (isVideoReady() && facefInitialized) {

                // Track
                facef.track(getVideoCanvas());
                renderThreejs(facef);
            }

            renderScene();
            requestAnimationFrame(processFrame);
        }
        // to avoid Trail version Limitation

        init();


        processFrame();

        return () => {

        };
    }, []);




    return (
        <div className="row arcomp">
            <div className="loadingMessage">
                <p>fetching...</p>
            </div>
            <div className="face-filter">
                <video id="facef-video" playsInline autoPlay></video>
                <canvas id="facef-canvas"></canvas>

            </div>
        </div>

    )
}