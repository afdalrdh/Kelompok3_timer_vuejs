var clock = new Vue({
  el: '#clock',
  data: {
    time: '00:00:00.000'
  }
});

var timeBegan = null
, timeStopped = null
, stoppedDuration = 0
, started = null
, running = false;

document.getElementById("start").addEventListener("click", start);
document.getElementById("stop").addEventListener("click", stop);
document.getElementById("reset").addEventListener("click", reset);

function start() {
  if(running) return;
  
  if (timeBegan === null) {
    reset();
    timeBegan = new Date();
  }

  if (timeStopped !== null) {
    stoppedDuration += (new Date() - timeStopped);
  }

  started = setInterval(clockRunning, 10);	
  running = true;
}

function stop() {
  running = false;
  timeStopped = new Date();
  clearInterval(started);
}

function reset() {
  running = false;
  clearInterval(started);
  stoppedDuration = 0;
  timeBegan = null;
  timeStopped = null;
  clock.time = "00:00:00.000";
}

function clockRunning(){
  var currentTime = new Date()
  , timeElapsed = new Date(currentTime - timeBegan - stoppedDuration)
  , hour = timeElapsed.getUTCHours()
  , min = timeElapsed.getUTCMinutes()
  , sec = timeElapsed.getUTCSeconds()
  , ms = timeElapsed.getUTCMilliseconds();

  clock.time = 
    zeroPrefix(hour, 2) + ":" + 
    zeroPrefix(min, 2) + ":" + 
    zeroPrefix(sec, 2) + "." + 
    zeroPrefix(ms, 3);
};

function zeroPrefix(num, digit) {
  var zero = '';
  for(var i = 0; i < digit; i++) {
    zero += '0';
  }
  return (zero + num).slice(-digit);
}