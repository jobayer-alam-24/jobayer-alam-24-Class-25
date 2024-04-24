// Problem 1:
// Check two numbers equal or not 
alert("Hello! You will go through some checkings..Be patient");
(function equality(){
    let num1 = prompt("Enter the first number: ");
    let num2 = prompt("Enter the second number: ");

    if(isNaN(num1) || isNaN(num2)){
        alert("It is not a number!! Please give a number")
        equality();
    }
    else if(num1 === num2){
        alert(num1 + " == " + num2);
    }
    else{
        alert(num1 + " != " + num2);;
    }
})();

// Problem 2:
// Positive or Negative number check 
(function numberCheck(){
    let num = prompt("Enter an integer: ");

    if(isNaN(num)){
        alert("It is not a number!! Please give a number")
        numberCheck();
    }
    else if(num < 0){
        alert(num + " is a negative number.");
    }
    else{
        alert(num + " is a positive number.")
    }
})();

// vote for Nouka check 
// Problem 3:
(function iseligibleforVoting(){
    let age = prompt("Enter your age: ");

    if(isNaN(age) || age < 0 || age > 100){
        alert("Invalid input!")
        numberCheck();
    }
    else if(age >= 18){
        alert("You are Eligible for voting. Go and vote for Nouka!!");
    }
    else{
        alert("You are not in eough age to vote for Nouka!");
    }
})();
alert("Thanks for your patience!");