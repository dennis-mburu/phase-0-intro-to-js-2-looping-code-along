// Code your solutions in this file
const names = ["Guadalupe", "Ollie", "Aki"];
const event = "surprise";
let newArray = [];
let message;

function writeCards(names, event){
    for(let i=0; i<names.length; i++){
        message = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;
        newArray.push(message);
    }
    return newArray;
}

function countDown(){
    let num = 0
    while (num >=0 && num <=10){
        console.log(num);
        num++
    }
}