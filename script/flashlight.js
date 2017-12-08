// Flashlight moving in the background based on mouse position
const containerBody = document.querySelector('.containerBody');
containerBody.addEventListener('mousemove',(e) => {
  containerBody.style.backgroundPosition = `${e.pageX - 285}px ${e.pageY - 255}px`;
});
