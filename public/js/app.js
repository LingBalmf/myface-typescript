document.addEventListener('DOMContentLoaded', function() {
    // Add your JavaScript here.
    const btn = document.getElementById('my-colour-button');
    if (btn) {
        btn.addEventListener('click', changeColours);
    }
});

function changeColours(event) {
    const posts = document.getElementsByClassName('post-info');

    for (let post of posts) {
        post.style.background = `rgb(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255})`;
    }
}

/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
  }
  
  /* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
  }


function buttonClick() {
    console.log("Clicked");
}