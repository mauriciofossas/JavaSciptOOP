function StopWatch() {
  //private members variables
  let duration = 0;
  let running = false;
  let startTime = null;
  let endTime = null;

  //public member functions (start, stop, and restart)
  this.start = function() {
    if (running) {
      throw new Error("The timer is already started");
    }
    startTime = new Date();
    running = true;
  };

  this.stop = function() {
    if (!running) {
      throw new Error("The timer is not started");
    }
    endTime = new Date();
    const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
    duration += seconds;
    running = false;
  };

  this.restart = function() {
    startTime = null;
    endTime = null;
    running = false;
    duration = 0;
  };
  //Getter for duration
  Object.defineProperty(this, "time", {
    get: function() {
      return duration;
    }
  });
}
