'use strict';


let userName= prompt("Hello, whats ur name?");
console.log(userName);

alert("Hello " + userName + " welcome to My webPage");

       let score=0;

       //Q1
       function question1(){
    let ans= prompt('Do you think my Fav color is white? (Y/N)');
    let favColor =  ans.toLowerCase();

        if(favColor === "yes" || favColor === "y")  {
           //console.log (favColor);
            alert ("Hmm! yes! My fav color is white")
            score++;
        }
        else if(favColor === "no" || favColor === "n" ){
            // console.log (favColor);
            alert ("Hmm! no! My fav color is white");
        }
        else {
          
           alert("please answer Y/N only! Try again!");
      }

    }
    question1();

     //Q2
      function question2(){
      let ans2= prompt("Do you think my fav drink is coffee? (Y/N)");
      let favDrink =  ans2.toLowerCase();

      if(favDrink === "yes" || favDrink === "y")  {

          //console.log (favDrink)
          alert ("Hmm! yes! My fav drink is coffee")
          score++;
      }
  
      else if(favDrink === "no" || favDrink === "n" ){
          // console.log (favDrink);
          alert ("Hmm! no! My fav drink is coffee");

      }

      else {
        
          alert("Try again!");
      }
    }
     question2();

   //Q3
   function question3(){

    let ans3= prompt("Do you think my fav Meal is pasta? (Y/N)");
    let favMeal =  ans3.toLowerCase();

    if(favMeal === "yes" || favMeal === "y")  {

     //console.log (favMeal)
     alert ("Hmm! yes! My fav Meal is pasta")
     score++;
 }

 else if(favMeal === "no" || favMeal === "n" ){
     // console.log (favMeal);
     alert ("Hmm! no! My fav Meal is pasta");
 }

 else {
   
     alert("Try again!");
 }
   }
   question3();

 //Q4
 function question4(){
 let ans4= prompt("Do you think my fav dessert is chocolate? (Y/N)");
 let favDessert =  ans4.toLowerCase();

 if(favDessert === "yes" || favDessert === "y")  {

     //console.log (favDessert)
     alert ("Hmm! yes! My fav dessert is chocolate")
     score++;
 }


 else if(favDessert === "no" || favDessert === "n" ){
     // console.log (favDessert);
     alert ("Hmm! no! My fav dessert is chocolate");
 }

 else {
   
     alert("Try again!");
 }
 
 }
 question4();

// Q5
function question5(){

let ans5= prompt("Do you think my fav music is pop music? (Y/N)");
let favMusic =  ans5.toLowerCase();

if(favMusic === "yes" || favMusic === "y")  {

    //console.log (favMusic)
    alert ("Hmm! yes! My fav music is pop")
    score++;
}
else if(favMusic === "no" || favMusic === "n" ){
    // console.log (favMusic);
    alert ("Hmm! no! My fav music is pop");
}

else {
  
    alert("Try again!");
}


alert(" Thanks " + userName + " For visiting my webPage! and u welcome anyTime")
}
question5();

//  question 6 lab3
function question6(){
for (let i=0; i<4; i++){
    let numUser= Number(prompt("please enter any number between 1 to 6"));
    if (numUser === 1){
      alert("ur guess is too low");
      // numUser= Number(prompt("try ur next attempt!")); 
    }
    else if (numUser === 2 || numUser === 4){
        alert("ur guess is too close");
        // numUser= Number(prompt("try ur next attempt!"));    
    }
    else if (numUser === 5 || numUser === 6){
        alert("ur guess is too high");
        // numUser= Number(prompt("try ur next attempt!"));   
    }
    else if (numUser === 3){
        alert("ur guess is TRUE!");
        score++;
        break;
    }
    else{
      numUser= Number( prompt("pls enter only from 1-6"));
  }
}
alert ("ur attempts over! and the correct answer is 3");
}
question6();

// question 7 lab3 
function question7(){
let favCar=['bmw' ,'lamborgini', 'rr' , 'mercedes'];
let gameNum7="";
let correctFlag=false;
for(let i=0; i< 6 ;i++){
 gameNum7= (prompt("guess what is my fav car, (u have 6 attempts only)?")).toLowerCase(); 
for(let j=0; j< favCar.length ; j++){
    if(gameNum7 === favCar[j]){
      alert(`You got it! ${favCar[j]} is my fav car`)
      correctFlag=true;
     score++;
    }
}
if (correctFlag===true){
    alert(`here is my fav cars ${favCar}`);
    break;
}
if(i===5){
    alert(`U got all of ur attempts, so here is my fav cars ${favCar}`);
}
else if (i<6) {
    alert(" wrong, try u next attempt if its not ur final one");
}
}
}
question7();
   alert(`thanks for playing this game  ${userName} your score out of 7 is : ${score}`);
