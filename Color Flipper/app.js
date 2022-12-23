const colors = ["green", "red", "rgba(133, 122, 200", "#f15025"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener('click', function(){
    // ger random number between 0 - 3 
    const randomNumber = getRnadomNumber();
    document.body.style.backgroundColor = colors[randomNumber]; // DOM
    color.textContent = colors[randomNumber];
});

function getRnadomNumber(){
    return Math.floor(Math.random() * colors.length);
}