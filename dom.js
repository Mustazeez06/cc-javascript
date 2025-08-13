// console.log(document);
// console.log(document.getElementById('main-heading'));
let topics=document.getElementsByClassName('sub-heading');
// console.log(topics);
let paragraph= document.getElementsByTagName('p');
// console.log(paragraph);
let main=document.getElementById('main-heading');
main.innerHTML = 'Mustapha';
main.style.color ='blue';
for(let i=0;i<topics.length;i++){
    topics[i].style.color = 'green';
    topics[i].style.fontSize ='50px';
}
topics[1].style.border='solid 1px black';

let third=document.createElement('h2');
third.innerHTML='Third Topic';
third.style.color='pink';
paragraph[1].appendChild(third);

let image =document.createElement('img');
image.setAttribute('src','1.jpeg');
paragraph[2].appendChild(image);
