// function myFunction() { 
//   document.getElementById("demo").innerHTML = "Hello JavaScript!";
// }

// change the style color
var count = 0
function myFunction() {
  if (count == 0) {
    document.getElementById("demo").style.fontSize = "25px";
    document.getElementById("demo").style.color = "red";
    document.getElementById("demo").style.backgroundColor = "yellow";
    count++
  }
  else {
    document.getElementById("demo").style.fontSize = "medium";
    document.getElementById("demo").style.color = "black";
    document.getElementById("demo").style.backgroundColor = "transparent";
    count--
  }
}