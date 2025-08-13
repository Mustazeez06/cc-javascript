const names=[];
while (true) {
    let input = prompt('Type your name.\nType "exit" to end the program');
    if(input=== 'Exit' || input=== 'exit'){
        break;
    }else{
        names.push(input);
    }
}

for(let count=0; count < names.length; count++){
    // alert(names[count]);
    if(names[count][0]==='W'||names[count][0]==='w'){
        alert(names[count] + ' Starts with a "W"');
    }else{
        alert("NO name found");
    }
}