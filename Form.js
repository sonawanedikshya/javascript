function myFunctionClick() {
var simpleVariable, anotherVariable;
var name = document.getElementById("na").value;
const greeting = "Welcome ";
let greetingMsg = greeting + name + "To our dashboard";
simpleVariable = "some sort of value";
document.getElementById("heading	").innerHTML = greetingMsg;
alert(greetingMsg);
}