// getting the id from html file

const hourEl = document.getElementById("hour")
const minuteEl = document.getElementById("minutes")
const secondEl = document.getElementById("seconds")
const ampmEl = document.getElementById("ampm")

// creating function to get data from the computer
function updateClock(){

    // creating  variable
    let h = new Date().getHours()
    let m = new Date().getMinutes()
    let s = new Date().getSeconds()
    let ampm = "AM"

    if(h > 12){
        h = h - 12
        ampm= "PM"
    }
    // this means if the number is less than 10 use 01,02.. otherwise dont use
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;
    

    // to change the text inside hours which was initially 00 we are calling h variable
    hourEl.innerText = h;
    minuteEl.innerText = m;
    secondEl.innerText = s;
    ampmEl.innerText = ampm;
    // after every one second the function is called again. its like an infinite loop
    setTimeout(()=>{
        updateClock()
    },1000)

}
    updateClock()
