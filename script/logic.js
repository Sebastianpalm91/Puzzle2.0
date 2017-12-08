//Random numbers given to each elements data-set-'value' befor start
for (var i = container.children.length; i >= 0; i--) {
  container.appendChild(container.children[Math.random() * i | 0]);
}
// function for the callback, score counter and logic to game rules
let compare = (dataset, callback) => {
  if (puzzleArray.length == 2) {
    function pause() {
      if (puzzleArray.length == 2)
      container.classList.add('pointer-stop');
      setTimeout(function () {
        container.classList.remove('pointer-stop');
      }, 1500)
    }
    pause();
    if (puzzleArray[0] == puzzleArray[1]) {
      completed[0].classList.add('success')
      completed[1].classList.add('success')
      puzzleArray = [];
      completed = [];
      cardSucces++;
      //IF all cards completed, display the winning box
      if (cardSucces === 8) {
        // Saves my "timer" to a variable and uses it to add the score to my list
        const stopTime = time.textContent;
        var node = document.createElement('li');
        const textnode = document.createTextNode(stopTime);
        node.appendChild(textnode);
        document.querySelector('.scoreList').appendChild(node);
        seconds = 0; minutes = 0;
        clearTimeout(t);
        setTimeout(function() {
          highScore.style.display = "block";
        }, 1000);
      }
    }
    else {
      setTimeout(function(){
        completed[1].classList.remove('turn')
        completed[0].classList.remove('turn')
        puzzleArray = [];
        completed = [];
      },1500);
    }
  }
};
