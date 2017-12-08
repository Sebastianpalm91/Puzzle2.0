// Starting different timeOutfunctions when user clicks on start timer
startTimer.addEventListener('click', () => {
  audioPlay.play();
  clearTimeout(t);
  seconds = 0, minutes = 0;
  body.classList.add('pointer-stop');
  startTimer.style.display = "none";
  setTimeout(function() {
    readyGo.style.opacity = "1";
    readyGo.textContent = "Ready"
  },1000)
  setTimeout(function() {
    readyGo.textContent = "Set"
  },2000)
  setTimeout(function() {
    readyGo.textContent = "Go"
  },3000)
  bounce.classList.add('bounce');
  setTimeout(function() {
    container.classList.remove('pointer-stop');
    body.classList.remove('pointer-stop');
    readyGo.style.opacity = "0";
  },3500)
  startTimer.classList.remove('bounce');
  // Starting a TimeOut set to initiate 300ms after above And starting my timer
  setTimeout(function() {
    function add() {
      seconds++;
      if (seconds >= 60) {
        seconds = 0;
        minutes++;
      }
      time.textContent = (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + (seconds > 9 ? seconds : "0" + seconds);
      timer();
    }
    function timer() {
      t = setTimeout(add, 1000);
    }
    timer();
  },3800)
})
