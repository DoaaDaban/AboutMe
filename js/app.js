'use strict';


let userName= prompt("Hello, whats ur name?");
console.log(userName);

alert("Hello " + userName + " welcome to My webPage");

       let score=0;

       //Q1
    let ans= prompt('Do you think my Fav color is white? (Y/N)');
    let favColor =  ans.toLowerCase();

        if(favColor === "yes" || favColor === "y")  {
           //console.log (favColor)
            alert ("Hmm! yes! My fav color is white")
            score++;
        }
        else if(favColor === "no" || favColor === "n" ){
            // console.log (favColor);
            alert ("Hmm! no! My fav color is white");
        }
        else {
          
            alert("Try again!");
        }

        
     //Q2
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

   //Q3
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

 //Q4
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
 

//Q5
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


// question 6 lab3

let numUser= Number(prompt("please enter any number between 1 to 6"));

for (let i=1; i<4; i++){
 

    if (numUser === 1){
      alert("ur guess is too low");
       numUser= Number(prompt("try ur next attempt!"));
      
    }
  
    else if (numUser === 2 || numUser === 4){
        alert("ur guess is too close");
         numUser= Number(prompt("try ur next attempt!"));
        
    }

    else if (numUser === 5 || numUser === 6){
        alert("ur guess is too high");
         numUser= Number(prompt("try ur next attempt!"));
        
    }

    else if (numUser === 3){
        alert("ur guess is TRUE!");
        score++;
        break;
    }

    else{

         numUser= Number( prompt("pls enter only from 1-6"));
    }

    alert ("ur attempts over! and the correct answer is 3");
}


// question 7 lab3 


let favCar=['bmw' ,'lamborgini', 'rr' , 'mercedes'];

let gameNum7= (prompt("guess what is my fav car?")).toLowerCase();

console.log(gameNum7);

let flag= false;

for(let i=0; i< 6 ;i++){

for(let j=0; j< favCar.length ; j++){
 
    if(favCar[j] === gameNum7){
      alert(`You got it! ${favCar[j]} is my fav car`)
      flag= true;
      score++;
      break;
    }

    // if(flag){
    // break;
    // }

    
    else{
        gameNum7 =  prompt(" false! Try ur next attempt!");
    }

   
}

}

// let myCar='';
// for(let i=0 ; i < favCar.length ; i++){
//     myCar = myCar + ',' + favCar[i];

// }
//  alert('here is my fav cars'+ myCar)

  alert(`thanks for playing this game  ${userName} your score out of 7 is : ${score}`);
