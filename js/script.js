const cursor = document.getElementById('cursor');
const cursorStyle = cursor.style;

document.addEventListener('mousemove', e => {
  window.requestAnimationFrame(() => {
    cursorStyle.top = `${ e.clientY - cursor.offsetHeight/2 }px`;
    cursorStyle.left = `${ e.clientX - cursor.offsetWidth/2 }px`;
  });
});

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

//List of quotes
var quotes = [".digital", ".direction", ".digital", ".design", ".digital", ".identity", ".digital", ".interaction", ".digital", ".branding", ".digital", ".architecture", ".digital", ".experience"];

//Counter for loop
var m = 0;

//Call the changeText() function every 5000 miliseconds
setInterval(changeText, 1000);

//Function to change div to a quote and change counter.
function changeText(){
    document.getElementById("change").innerHTML=(quotes[m] + '<p>' + '</p>');
    if(m == 13)
        m = 0;
    else
        m++;
}

//Animating the page content out on-click.
document.addEventListener("DOMContentLoaded", () => {
  const pageWrapper = document.getElementById("page-wrapper");
  const triggers = document.querySelectorAll(".content-out-trigger");

  triggers.forEach(trigger => {
    trigger.addEventListener("click", function(event) {
      event.preventDefault();
      
      const destination = this.getAttribute("href") || this.getAttribute("data-href");
      if (!destination) return;

      // 1. Fire your drop-out animation
      pageWrapper.classList.add("content-out-active");

      // 2. Redirect after 1000ms (1s animation duration completes)
      setTimeout(() => {
        window.location.href = destination;
      }, 1000); 
    });
  });
});

//Animating the page nav out on-click.
document.addEventListener("DOMContentLoaded", () => {
  const navWrapper = document.getElementById("nav-wrapper");
  const triggers = document.querySelectorAll(".nav-out-trigger");

  triggers.forEach(trigger => {
    trigger.addEventListener("click", function(event) {
      event.preventDefault();
      
      const destination = this.getAttribute("href") || this.getAttribute("data-href");
      if (!destination) return;

      // 1. Fire your drop-out animation
      navWrapper.classList.add("nav-out-active");

      // 2. Redirect after 1000ms (1s animation duration completes)
      setTimeout(() => {
        window.location.href = destination;
      }, 1000); 
    });
  });
});

//Animating the page nav out on-click.
window.addEventListener("pageshow", function (event) {
    // Reset the page when returning via browser back/forward
    document.body.classList.remove("fade-out");

    // Ensure the page is visible again
    document.body.style.opacity = "1";
    document.body.style.visibility = "visible";
});
