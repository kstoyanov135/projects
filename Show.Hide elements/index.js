const myButton = document.getElementById('myButton');
const myImg = document.getElementById('myImg');

myButton.addEventListener('click', () =>{
    if(myImg.style.display == "none") {
        myImg.style.display = "block";
    }
    else {
        myImg.style.display = "none";
    }
})