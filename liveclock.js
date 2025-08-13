let firstTag=document.getElementsByTagName('h1')[0];
firstTag.style.fontFamily="Arial"
function displayTime(){

    let date= new Date();
    let hour =date.getHours();
    let minutes =date.getMinutes();
    let seconds =date.getSeconds();
    if(minutes<10){
        minutes='0'+ minutes;
    };
    if(seconds<10){
        seconds='0'+ seconds;
    };
    if(hour>12){
        hour=hour-12;
        if(hour<10){
            hour='0'+ hour;
        };
        firstTag.innerHTML=hour+ ":" + minutes + ":" +seconds+ " PM";
   }else{
    firstTag.innerHTML=hour+ ":" + minutes + ":" +seconds+ " AM";
   };
   

   
    
}

setInterval(displayTime, 900);
