/*global clm*/
// import clm from 'exports?clm!clmtrackr';
import defaultModel from 'exports?pModel!models/model_pca_20_svm';
import {EventEmitter} from 'events';


export default class extends EventEmitter {

  constructor() {
    super();

    this.onTrackrConverged = this.onTrackrConverged.bind(this);
    this.update = this.update.bind(this);

    this.tracker = new clm.tracker({useWebGL: true});
    this.model = defaultModel;
    this.tracker.init(this.model);

    this.normalizedPosition = null;

    document.addEventListener('clmtrackrNotFound', this.onTrackrNotFound.bind(this));
    document.addEventListener('clmtrackrLost', this.onTrackrLost.bind(this));

    this.debugCanvas = document.createElement('canvas');
    this.debugContext = this.debugCanvas.getContext('2d');
  }


  startImage(url) {
    this.tracker.reset();

    this.target = document.createElement('canvas');
    let image = new Image();
    image.onload = () => {
      this.target.width = this.debugCanvas.width = image.width;
      this.target.height = this.debugCanvas.height = image.height;
      let ctx = this.target.getContext('2d');
      ctx.drawImage(image, 0, 0);
      document.addEventListener('clmtrackrConverged', this.onTrackrConverged);
      this.tracker.start(this.target);
      this.update();
    };
    image.src = url;
  }


  startVideo(video) {
    this.tracker.reset();

    if (typeof(video) == 'string') {
      this.target = document.createElement('video');
      this.target.loop = true;
      this.target.addEventListener('loadedmetadata', () => {
        this.target.width = this.debugCanvas.width = this.target.videoWidth;
        this.target.height = this.debugCanvas.height = this.target.videoHeight;
        this.target.play();
        this.tracker.start(this.target);
        this.update();
      });
      this.target.src = video;
    } else {
      this.target = video;
      this.debugCanvas.width = this.target.videoWidth;
      this.debugCanvas.height = this.target.videoHeight;
      this.tracker.start(this.target);
      this.update();
    }
  }


  startCamera() {
  }


  stop() {
    this.tracker.stop();
  }


  onTrackrNotFound() {
    console.warn('clmtrackrNotFound');
    this.normalizedPosition = null;
  }


  onTrackrLost() {
    console.warn('clmtrackrLost');
    this.normalizedPosition = null;
  }


  onTrackrConverged() {
    console.log('clmtrackrConverged');
    document.removeEventListener('clmtrackrConverged', this.onTrackrConverged);
    cancelAnimationFrame(this.requestId);
    this.tracker.stop();
    this.emit('tracked');
  }


  update() {
    this.requestId = requestAnimationFrame(this.update);

    this.debugContext.clearRect(0, 0, this.debugCanvas.width, this.debugCanvas.height);
    this.currentPosition = this.tracker.getCurrentPosition();
    if (this.currentPosition) {
      this.tracker.draw(this.debugCanvas);
      this.normalizedPosition = this.normalizePoints(this.currentPosition);
    }
  }


  normalizePoints(points) {
    let center = points[62];
    let min = [Number.MAX_VALUE, Number.MAX_VALUE];
    let max = [Number.MIN_VALUE, Number.MIN_VALUE];
    let size = Math.abs(points[13][0] - points[1][0]) * 0.5;
    return points.map((p) => {
      let q = [(p[0] - center[0]) / size, (p[1] - center[1]) / size];
      if (q[0] < min[0]) min[0] = q[0];
      if (q[0] > max[0]) max[0] = q[0];
      if (q[1] < min[1]) min[1] = q[1];
      if (q[1] > max[1]) max[1] = q[1];
      return q;
    });
  }

}
