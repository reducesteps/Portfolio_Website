// JavaScript for Portfolio Website

// Make the project boxes draggable
const draggableElements = document.querySelectorAll('.draggable');

draggableElements.forEach((draggable) => {
  draggable.addEventListener('dragstart', () => {
    draggable.classList.add('dragging');
  });

  draggable.addEventListener('dragend', () => {
    draggable.classList.remove('dragging');
  });
});
