function something(a){
    return "something " + a;
}
console.log(something("Rolling guard"));
function animals(chickens,cows,pigs){
    let chickenLegs=chickens*2;
    let cowLegs=cows*4;
    let pigLegs=pigs*4;
    let total=chickenLegs+cowLegs+pigLegs;
    return total;
}
// Compressed version of this function is:
// return (chickens*2)+(cows*4)+(pigs*4);
console.log(animals(12,15,25));

function larger(a,b){
    if(a>b){
        return a;
    }
    else if(a===b){
        return "They are both equal";
    }
    else{
        return b;
    }
}
console.log(larger(120,200));
function largest(a,b,c){
    if(a>b && a>c){
        return a;
    }
    else if(b>a && b>c){
        return b;
    }
    else if(a===b===c){
        return "All numbers are the same value";
    }
    else{
        return c;
    }
}
console.log(largest(10,20,30));
console.log(largest(11,25,3));
console.log(largest(100,20,30));
// Math.max() and Math.min() are useful in this scenario