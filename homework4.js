// Part 1
function NumSplit(num){
    let leftHalf = Math.floor(num / 2);
    let rightHalf = Math.ceil(num / 2);
    return [leftHalf, rightHalf];
}
console.log(NumSplit(4));
console.log(NumSplit(6));
console.log(NumSplit(11));
console.log(NumSplit(-9));
// Part 2
function PhoneFormat(p){
    if (p.length !== 10) {
        return "Invalid input. Please provide exactly 10 digits.";
    }
    return "("+p[0]+p[1]+p[2]+") "+ p[3]+p[4]+p[5]+"-"+p[6]+p[7]+p[8]+p[9];
}
console.log(PhoneFormat([3, 4, 5, 5, 0, 1, 2, 5, 2, 7]));
// Part 3
function MoviePass(a,b){
    if(a>=15 || b===true){
        return true;
    }else{
        return false;
    }
}
// function MoviePass(a, b) {
//     return a >= 15 || b === true;
// }
console.log(MoviePass(14, true));
console.log(MoviePass(14, false));
console.log(MoviePass(16, false));


// Class Corrections
// part 1
function numSplit(num){
    if(num%2===0){
        return[num/2,num/2];
    }else{
        return[math.ceil(num/2),math.floor(num/2)]
    }
}
// part 2
function formatPhoneNumber(arr){
    let finalPhoneNum= '('
    for(count=0; count<arr.length;count++){
        finalPhoneNum=finalPhoneNum + arr[count];
        if(count===2){
            finalPhoneNum=finalPhoneNum+ ')'
        }else if(count===6){
            finalPhoneNum=finalPhoneNum+'-'
        }else if(count===arr.length-1){
            finalPhoneNum=finalPhoneNum+')';
        }
    }return finalPhoneNum
}
console.log(formatPhoneNumber([3, 4, 5, 5, 0, 1, 2, 5, 2, 7]));