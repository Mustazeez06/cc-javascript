let signIn=document.getElementById('sign-in');
let signUp=document.getElementById('sign-up');
let content=document.getElementsByClassName('content');
console.log(content[0]);
// console.log(signIn);
// console.log(signUp);

signIn.addEventListener('click',function(){
    this.style.backgroundColor='white';
    this.style.transition='1s'
    signUp.style.backgroundColor='#a59f9f';
    content[0].style.display='none';
    content[1].style.display='block';
});

signUp.addEventListener('click',function(){
    this.style.backgroundColor='white';
    this.style.transition='0.1s'
    signIn.style.backgroundColor='#a59f9f';
    content[0].style.display='block';
    content[1].style.display='none';
});