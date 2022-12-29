const myButton = document.getElementById("myButton");
const myAnimation = document.getElementById("myDiv");

myButton.addEventListener('click', begin);

function begin(){
    let timerId = null;
    let degrees = 0;
    let x = 0;
    let y = 0;

    timerId = setInterval(frame, 5);

    function frame(){
        if(x >= 200 || y >= 200){
            clearInterval(timerId);
        }
        else{
            degrees
            x+=1;
            y+=1;
            myAnimation.style.left = x + 'px';
            myAnimation.style.top = x + 'px';

        }
    }
}