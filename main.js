console.log('Hello World!');



// Add active class to the current button (highlight it)
var link = document.getElementById("link");
var navItem = 
    link.getElementsByClassName("nav-item");
console.log(navItem);


for (var i = 0; i < navItem.length; i++) {
  navItem[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}
