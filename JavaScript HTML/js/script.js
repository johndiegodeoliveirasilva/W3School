// function myFunction() { 
//   document.getElementById("demo").innerHTML = "Hello JavaScript!";
// }

function light(sw) {
  var pic;
  if (sw == 0) {
    pic = "img/anna.jpg"
  }
  else {
    pic = "img/gin.png"
  }
  document.getElementById("myImage").src =pic;
}