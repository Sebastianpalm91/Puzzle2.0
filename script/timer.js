// Starting different timeOutfunctions when user clicks on start timer
startTimer.addEventListener('click', () => {
  audioPlay.play();
  startTimer.style.display = "none";
  readyGo.style.opacity = "1";
  setTimeout(function() {
    readyGo.textContent = "Ready"
  },1000)
  setTimeout(function() {
    readyGo.textContent = "Set"
  },2000)
  setTimeout(function() {
    readyGo.textContent = "Go"
    container.classList.remove('pointer-stop');
  },3000)
  bounce.classList.add('bounce');
  setTimeout(function() {
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
  startTimer.onclick = timer;
  console.log(timer);
},3800)
})
