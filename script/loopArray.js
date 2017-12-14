//Looping through my array
Array.from(puzzleCard).forEach( (puzzleCard) => {
  puzzleCard.classList.add('boxShadow');
  // Creating a clickevent for the cards and calling the callback function
  puzzleCard.addEventListener('click', (e) => {
    puzzleCard.classList.toggle('turn');
    const dataset = e.target.dataset.puzzle;
    const puzzleTarget = puzzleArray.push(dataset);
    completed.push(puzzleCard);
    puzzleCard.classList.add('boxShadow');
    return compare(e.target.dataset.puzzle);
  })
  //Resetting the game and shuffle the cards
  resetGame.addEventListener('click', () => {
    highScore.style.display = "none";
    body.classList.add('pointer-stop');
    time.textContent = "00:00";
    seconds = 0, minutes = 0;
    clearTimeout(t);
    shuffle.classList.remove('shuffle');
    bounce.classList.remove('bounce');
    puzzleCard.classList.remove('turn');
    puzzleCard.classList.remove('success');
    puzzleCard.classList.remove('boxShadow');
    for (var i = container.children.length; i >= 0; i--) {
      container.appendChild(container.children[Math.random() * i | 0]);
    }
    puzzleArray = [];
    completed = [];
    cardSucces = 0;
    //Shuffle the cards in a random direction when clicked on button
    setTimeout(function() {
      for (cards of puzzleList) {
        let random = Math.random() * -10 * 20 + 'px';
        let random2 = Math.random() * -30 * -80 + 'px';
        let random3 = Math.random() * 20 * -100 + 'px';
        let randomDeg = Math.random() * 1500 + 'deg';
        cards.style.transition = "all 1.5s ease";
        cards.style.transform = `translateZ(${random3, random, random2})
        translateX(${random3, random2, random}) translateY(${random3, random2, random}) rotate(${randomDeg})`;
      }
    }, 100);
    //Moves the cards back to original position
    setTimeout(function(){
      for (cards of puzzleList) {
        let random2 = Math.random() * 0 + 'px';
        cards.style.transform = `translateY(${random2}) translateX(${random2})`;
        cards.removeAttribute('style');
        puzzleCard.classList.add('boxShadow');
        startTimer.classList.add('bounce')
        startTimer.style.display = "block";
        time.textContent = "00:00";
        seconds = 0, minutes = 0;
        clearTimeout(t);
        setTimeout(function(){
          body.classList.remove('pointer-stop');
        }, 500);
      }
    }, 1800);
  })
})
