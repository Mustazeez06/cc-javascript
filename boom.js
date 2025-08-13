let button =document.getElementsByTagName('button')[0];
console.log(button);
button.addEventListener('click',function(){
    button.innerHTML='BOOM';
    button.style.fontSize='150px';
    button.style.color="white";
    button.style.backgroundColor='red';
    button.style.width='70%';
    button.style.height='50%';
    button.style.transition='3s';

});
button.addEventListener('mouseout',function(){
    button.innerHTML='Click Me';
    button.style.fontSize='16px';
    button.style.color="Black";
    button.style.backgroundColor='White';
    button.style.width='10%';
    button.style.height='10%';
    button.style.transition='3s';

});