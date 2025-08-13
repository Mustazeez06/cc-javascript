const currentDate= new Date();
console.log(currentDate);
console.log(currentDate.getfullYear);
if(currentDate.getHours()> 12){
    console.log(currentDate.getHours -12 + "pm");
}