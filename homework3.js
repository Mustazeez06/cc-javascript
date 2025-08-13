const States=["Abia","Adamawa","Akwa Ibom","Anambra","Bauchi","Bayelsa","Benue","Borno","Cross Rivers","Delta","Ebony","Edo"]
for(let count=0;count<States.length;count++){
    if(States[count]===States[0] || States[count]===States[States.length-1]){
        console.log(States[count]);
    }else{
        continue;
    }
}
function returnelement(States){
    for(let count=0;count<States.length;count++){
        if(States[count]===States[0] || States[count]===States[States.length-1]){
            // console.log(States[count]);
            continue
        }else{
            continue;
        }
    }
}
console.log(returnelement(States));


// Correction
// function returnElements(arr){
//     return [[arr[0]],arr[-1]];
// }
// const States=["Abia","Adamawa","Akwa Ibom","Anambra","Bauchi","Bayelsa","Benue","Borno","Cross Rivers","Delta","Ebony","Edo"];
// console.log(returnElements(States));