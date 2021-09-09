function press() {
	var simpleVariable, anotherVariable;
	var x = document.getElementById("email").value;
	var y = document.getElementById("subject").value;
	var z = document.getElementById("message").value;
document.getElementById("sub").style.display="none"
	document.getElementById("heading").innerHTML="Subject:"+x+"To:"+y+"MessageBody:"+z;
}