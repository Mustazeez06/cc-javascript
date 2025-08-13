async function displayContent(){
    let url='https://catfact.ninja/fact';
    let response=await fetch(url);
    let finalResponse= await response.json();
    console.log(finalResponse.fact)
}
// displayContent();


let heading= document.getElementsByTagName('h1')[0];
console.log(heading);

async function changeHeading(){
    heading.style.fontFamily='arial'
    let url='https://catfact.ninja/fact';
    let response=await fetch(url);
    let finalResponse= await response.json();
    heading.innerHTML= finalResponse.fact;
}
changeHeading();
// setInterval(changeHeading,10000);

