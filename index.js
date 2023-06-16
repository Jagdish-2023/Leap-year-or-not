//program to check wheather a year is leap year or not
var readlineSync = require('readline-sync');

console.log("Hi");
var userName = readlineSync.question("what's your name? ");
console.log("hi! ",userName);
console.log("");
console.log("I can tell you whether your birth year was a leap year or not");
var userResponse = readlineSync.question("Do you want to check? (yes/no) ");
console.log("");

if(userResponse === "yes"){
  var userAge = readlineSync.question("Please enter the year of birth only ");
    if(userAge % 400 === 0)
      console.log(userAge + " is a leap year");
    else if(userAge % 100 === 0)
      console.log(userAge + " is not a leap year");
    else if(userAge % 4 === 0)
      console.log(userAge + " is a leap year");

  else
      console.log(userAge + " is not a leap year");  
}
else
  console.log("ok! as your wish");

                                         
                            
