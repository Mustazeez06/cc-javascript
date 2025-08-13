// Return the sum of two numbers
function addition(num1,num2){
    return num1+num2;
}
console.log(addition(3,2));
console.log(addition(-3,-6));
console.log(addition(7,3));

function add1(num){
    return ++num;
}
console.log(add1(18));

function calcAge(age){
    return age*365;
}
console.log(calcAge(18));

// Create a function to check if a number is Divisible by 100 and return if it is either true or false
function divisible(num){
    if(num%100===0){
        return true;
    }else{
        return false;
    }
}
console.log(divisible(1));
console.log(divisible(100));
console.log(divisible(1000));
// 50-30-20 Strategy

// -50% on needs 
// -30% on wants 
// -20% on savings

function FTT(income){
    let needs=0.5*income;
    let wants=0.3*income;
    let savings=0.2*income;
    return {"needs":needs,"wants":wants,"savings":savings}
}
console.log(FTT(10000));
// Note:"Pseudo-object"(Just my hypothesis) can temporarily be made for an output display

// Two makes ten
function TwoMakesTen(a,b){
    if(a===10 || b===10 || a+b===10){
        return true;
    }else{
        return false;
    }
}
console.log(TwoMakesTen(9,10));
console.log(TwoMakesTen(9,9));
console.log(TwoMakesTen(1,9));

// Get sum of all elements in an array
function SumOfArray(array){
    let box=0
    for(let count=0;count<array.length;count++){
        box=box+array[count];
    }
    return box
}
console.log(SumOfArray([2,7,4]));
console.log(SumOfArray([45,3,0]));
console.log(SumOfArray([-2,84,23]));