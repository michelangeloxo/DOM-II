// Your code goes here

const buttonredirect = document.querySelectorAll('.content-pick .destination .btn'); 


buttonredirect[0].addEventListener("dblclick", function(){
    document.location.href = 'https://github.com/michelangeloxo';  

});

buttonredirect[1].addEventListener("dblclick", function(){
    document.location.href = 'http://www.unsplash.com';
});

buttonredirect[2].addEventListener('dblclick', function(){
    document.location.href = 'http://www.google.com';
});

const FunBus = document.querySelector('.logo-heading');

FunBus.addEventListener('mouseover', (event)=>{
    FunBus.style.transition="3s";
    FunBus.style.fontSize = "9rem";
});

FunBus.addEventListener('mouseout', (event)=>{
    FunBus.style.transition="3s";
    FunBus.style.fontSize = "5rem";
});








