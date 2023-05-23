// getting the id from html file

const hourEl = document.getElementById("hour")
const minuteEl = document.getElementById("minutes")
const secondEl = document.getElementById("seconds")
const ampmEl = document.getElementById("ampm")

// creating function to get data from the computer
function updateClock(){

    // creating  variable
   // here Date().getHours() returns the hour in the specified date according to local time.

    let h = new Date().getHours()
    let m = new Date().getMinutes()
    let s = new Date().getSeconds()
    let ampm = "AM"

    // now we are using if to change am and pm.

    if(h > 12){
        h = h - 12
        ampm= "PM"
    }
    // this means if the number is less than 10 use 01,02.. otherwise dont use
    // the syntax of tertiary operator is (condition) ? (return if true) : (return if false);
    // here (h < 10) is condition, ("0" + h) is true and h is false
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;
    

    // to change the text inside hours which was initially 00 we are calling h variable
    hourEl.innerText = h;
    minuteEl.innerText = m;
    secondEl.innerText = s;
    ampmEl.innerText = ampm;
    // after every one second the function is called again. its like an infinite loop
    // The setTimeout() method calls a function after a number of milliseconds. 1 second = 1000 milliseconds.
    // The global setTimeout() method sets a timer which executes a function once the timer expires.

    setTimeout(()=>{updateClock()},1000)

}
    updateClock()
