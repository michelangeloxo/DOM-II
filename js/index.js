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

const copyPar = document.querySelector('.intro p')

copyPar.addEventListener('copy', (event) => {
    
    alert("You copied text!");

}); 

const copyPar2 = document.querySelectorAll('.content-pick .destination p'); 

copyPar2[0].addEventListener('copy', (event) => {
    
    alert("You copied text!");

}); 

copyPar2[1].addEventListener('copy', (event) => {
    
    alert("You copied text again!");

}); 

copyPar2[2].addEventListener('copy', (event) => {
    
    alert("You copied text again!");

}); 

const copyPar1 = document.querySelectorAll('.content-section .text-content p');

copyPar1[0].addEventListener('copy', (event) => {
    
    alert("You copied text again!");

}); 

copyPar1[1].addEventListener('copy', (event) => {
    
    alert("You copied text again!");

}); 

copyPar1[2].addEventListener('copy', (event) => {
    
    alert("You copied text again!");

}); 

copyPar1[3].addEventListener('copy', (event) => {
    
    alert("Ummmm Copy Deez!");

}); 

const copyPar4 = document.querySelector('.content-destination p');

copyPar4.addEventListener('copy', (event) => {
    
    alert("Still Copying Text?");

}); 

const nav = document.querySelector('nav');
nav.addEventListener('mouseenter',(event)=>{
    nav.style.transition="1s";
    nav.style.backgroundColor = "aquamarine";
});

nav.addEventListener('mouseleave',(event)=>{
    nav.style.transition="15s";
    nav.style.backgroundColor = "white";
});

const anchors = document.querySelectorAll('a');

anchors.forEach(function(item,index,array){
    item.addEventListener("click", (event)=>{
        // console.log('clicked', index);
        event.preventDefault();
    });
});









