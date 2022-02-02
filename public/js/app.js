document.addEventListener('DOMContentLoaded', function() {
    // Add your JavaScript here.
    const btn = document.getElementById('my-colour-button');
    if (btn) {
        btn.addEventListener('click', changeColours);
    }
});

function changeColours(event) {
    const posts = document.getElementsByClassName('post');

    for (let post of posts) {
        post.style.background = `rgb(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255})`;
    }
}

function buttonClick() {
    console.log("Clicked");
}