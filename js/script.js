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
