//Get element by ID
//  var a = document.getElementById("head");
// a.innerHTML = "Learn Java Script";
// console.log(a.textContent);

// var a=document.getElementById("head1").innerHTML="Hello World";


// var a = document.getElementById("head1");
// a.style.color = "blue";

//Get element by class;
// var a = document.getElementsByClassName("head");
// a[0].innerHTML = "Good Morning";

//Get Element By Tag Name;
// var a = document.getElementsByTagName("h1");
// console.log(a);

// Get Element by name
var a = document.getElementsByName("text")[0];
var b = document.getElementById("head");

function message(){
    b.innerHTML = "Hello " + a.value;
}