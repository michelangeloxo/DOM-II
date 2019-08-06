// Your code goes here
let img_focus = document.querySelectorAll('img');

img_focus.addEventListener('focusin', (event) => {
    event.target.style.background = 'blue';    
  });

