
class Animation {
  constructor(sheet) {
    this.count = 0;
    this.delay = delay;
    this.frame = 0;
    this.frame_index = 0;
    this.frame_set = frame_set;
    this.cols = 28;
    this.rows = 1;
  }

  change(frame_set, delay = 15) {

  }

  updateFrame() {
    this.frame = ++frame % cols;
  }
}
