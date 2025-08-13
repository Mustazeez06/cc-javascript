let firstTag= document.getElementsByTagName('h1')[0];
// console.log(firstTag);

function displayText(){
    firstTag.innerHTML +="\n~~Hurray!~~";
}
// setTimeout(displayText,3000);
setInterval(displayText,2000);



