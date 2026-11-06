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

// Reset page animations when returning via browser Back/Forward
window.addEventListener("pageshow", function () {

    const pageWrapper = document.getElementById("page-wrapper");
    const navWrapper = document.getElementById("nav-wrapper");

    // Reset the main content animation
    if (pageWrapper) {
        pageWrapper.classList.remove("content-out-active");
    }

    // Reset the navigation animation
    if (navWrapper) {
        navWrapper.classList.remove("nav-out-active");
    }

});


// Global video controls
document.addEventListener("DOMContentLoaded", () => {

    // Inject styling once.
    if (!document.getElementById("global-video-controls-style")) {
        const style = document.createElement("style");
        style.id = "global-video-controls-style";

        style.textContent = `
            .video-text-controls {
                display: inline-flex;
                align-items: baseline;
                gap: 12px;
                color: var(--primary-color);
            }

            .video-text-controls button {
                appearance: none;
                -webkit-appearance: none;
                border: none;
                padding: 0;
                margin: 0;
                background: none;
                font: inherit;
                color: #a0a9ae;
                cursor: none;
                text-align: left;
                letter-spacing: -0.8px;
            }

            .video-text-controls button:focus-visible {
                outline: 1px solid currentColor;
                outline-offset: 3px;
            }
        `;

        document.head.appendChild(style);
    }

    // Find every video.
    document.querySelectorAll("video").forEach(video => {

        if (video.dataset.textControlsAdded === "true") return;

        const caption = video.parentElement.querySelector(".caption");

        if (!caption) return;

        // Find the first caption-detail paragraph.
        const leftCaption = caption.querySelector(".caption-detail");

        if (!leftCaption) return;

        video.dataset.textControlsAdded = "true";

        // Create controls.
        const controls = document.createElement("span");
        controls.className = "video-text-controls";

        // Play / Pause button.
        const playPauseButton = document.createElement("button");
        playPauseButton.type = "button";
        playPauseButton.textContent = video.paused ? "Play" : "Pause";

        // Restart button.
        const restartButton = document.createElement("button");
        restartButton.type = "button";
        restartButton.textContent = "Restart";

        // Update Play / Pause text.
        const updateButton = () => {
            playPauseButton.textContent = video.paused ? "Play" : "Pause";
        };

        // Play / Pause functionality.
        playPauseButton.addEventListener("click", () => {
            if (video.paused) {
                video.play().catch(error => console.warn(error));
            } else {
                video.pause();
            }
        });

        // Restart functionality.
        restartButton.addEventListener("click", () => {
            video.currentTime = 0;
            video.play().catch(error => console.warn(error));
        });

        // Synchronise button text.
        video.addEventListener("play", updateButton);
        video.addEventListener("pause", updateButton);
        video.addEventListener("ended", updateButton);

        // Assemble controls.
        controls.appendChild(playPauseButton);
        controls.appendChild(restartButton);

        // Insert a line break and controls inside the existing paragraph.
        leftCaption.appendChild(document.createElement("br"));
        leftCaption.appendChild(controls);

        updateButton();

    });

});