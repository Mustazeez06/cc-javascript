let button =document.getElementsByTagName('button')[0];
console.log(button);
let trigger=true;
button.addEventListener('click',function(){
    if(trigger){
        button.innerHTML='BOOM';
        button.style.fontSize='150px';
        button.style.color="white";
        button.style.backgroundColor='red';
        button.style.width='70%';
        button.style.height='50%';
        button.style.transition='3s';
        trigger=false;
    }
    else{
        button.innerHTML='Click Me';
            button.style.fontSize='16px';
            button.style.color="Black";
            button.style.backgroundColor='White';
            button.style.width='10%';
            button.style.height='10%';
            button.style.transition='3s';
            trigger=true;
    }

});


