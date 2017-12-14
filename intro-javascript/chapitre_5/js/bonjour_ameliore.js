function sayHello(firstName, lastName){
    var message = "Hello " + firstName + " " + lastName +"!";
    return message;
    
}
var f = prompt("What is your first name?");
var l = prompt("Whats is your last name?");
console.log(sayHello(f, l));
