const myLabel = document.getElementById('myLabel'); //assigns the value of the element in the HTML document with the ID 'myLabel'

update(); // calls the update function
setInterval(update, 1000); // a method that repeatedly calls a function with a fixed time delay

function update() {
    let date = new Date(); // creates a new 'Date' object, that represents the current time and date
    myLabel.innerHTML = formatTime(date); // the formatTime function returns a string that represents the current time in the format 'hh:mm:ss AM/PM"

    function formatTime(date){
        let hours = date.getHours(); //gets the hours
        let minutes = date.getMinutes(); //gets the minutes
        let seconds = date.getSeconds(); //gets the seconds
        let amOrPm = hours >=12 ? "PM" : "AM"; //determines whether it is AM or PM

        hours = (hours % 12) || 12; // converts the hours to a 12 hour format

        hours = formatZeroes(hours); //adds a leading zero to the hours
        minutes = formatZeroes(minutes); //adds a leading zero to the minutes
        seconds = formatZeroes(seconds); //adds a leading zero to the seconds

        return `${hours}:${minutes}:${seconds} ${amOrPm}`; // returns the formatted time as a string
    }
    function formatZeroes(time){
        time = time.toString(); // converts the value of 'time' to a string because the length property can only be used on strings
        return time.length < 2 ? "0" + time : time; // ternary operator to return 0 + time or just 'time'
    }
}
