    // creating a random number between 1 & 6 

let randomNumber1=Math.floor(Math.random()*6)+1;
let randomNumber2=Math.floor(Math.random()*6)+1;
// console.log(randomNumber1);
    
    // assigning the random number to dice number image
let diceImage1="images/dice"+randomNumber1+".png";
let diceImage2="images/dice"+randomNumber2+".png";
// console.log(diceImage1);
// console.log(diceImage2);

    // selecting the img from DOM
let image1=document.querySelectorAll('img')[0];
let image2=document.querySelectorAll('img')[1];

    // assigning the diceimage value to image src
image1.setAttribute('src', diceImage1);
image2.setAttribute('src', diceImage2);

let result=document.getElementById('result');

if(diceImage1==diceImage2){
    result.textContent='You Win !';
}
else{
    result.textContent='You Loose !';
}
