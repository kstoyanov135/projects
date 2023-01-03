const colors = ["green", "red", "rgba(133, 122, 200", "#f15025"]; // an array of colors
const btn = document.getElementById("btn"); // HTML element with an ID of 'btn'
const color = document.querySelector(".color"); // element with a class of 'color'

btn.addEventListener('click', function(){ // when we click the button
    // get a random number between 0 - 3
    const randomNumber = getRnadomNumber();
    document.body.style.backgroundColor = colors[randomNumber]; // DOM
    color.textContent = colors[randomNumber];
});

function getRnadomNumber(){
    return Math.floor(Math.random() * colors.length); // we use the array to get a raondom color
}
