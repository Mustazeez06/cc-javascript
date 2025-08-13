let MagicNum=8
while (true){
    let input=prompt(`Guess and Type in any number from 1 to 10\n(Type 'close' to Exit)`);
    if (input==='close' || input==='Close'){
        break;
    }
    else {
        input=Number(input);
        if(input===MagicNum){
            alert('Correct,' + input + ' is the magic number');
            break;
        }else{
            alert('Wrong,Try again');
        }
    }
}