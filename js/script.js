var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}

function myFunction() {
    document.getElementById("cooper1").classList.toggle("newClass");
    document.getElementById("cooper1").classList.toggle("newClass:hover");
    document.getElementById("plus1").classList.toggle("plusClass");
}

// set the starting position of the cursor outside of the screen
var clientX = -300,
    clientY = -300,
// elements 
    outerCursor = document.querySelector(".cursor--outer"),
    innerCursor = document.querySelector(".cursor--inner"),
    link = document.querySelector(".link")

// var initCursor = function() {
//   // add listener to track the current mouse position
//   document.addEventListener("mousemove", function(e) {
//     clientX = e.clientX
//     clientY = e.clientY
//   });
  
//   var render = function() {
//     TweenMax.set(outerCursor, {
//       x: clientX,
//       y: clientY,
//       delay: .08,
//       ease: Power1.easeOut
//     });
    
//      TweenMax.set(innerCursor, {
//       x: clientX,
//       y: clientY
//     });
    
//     requestAnimationFrame(render);
//   };
  
//   requestAnimationFrame(render);
// };

// initCursor();

// function growOnHover() {
// link.addEventListener("mouseenter", function() {
//     TweenMax.to(outerCursor, 1, {scale: 2})
// });
// link.addEventListener("mouseleave", function() {
//     TweenMax.to(outerCursor, 1, {scale: 1})
// });
// }
// growOnHover();
