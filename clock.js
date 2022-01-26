function showTime() {
    const today = new Date()
    let day = today.getDay()
    if(day===1){
        day="Pazartesi"
    } else if(day===2) {
        day="Salı"
    } else if(day===3) {
        day="Çarşamba"
    } else if(day===4) {
        day="Perşembe"
    } else if(day===5) {
        day="Cuma"
    } else if(day===6) {
        day="Cumartesi"
    } else if(day===0) {
        day="Pazar"
    }
    let hour = today.getHours()
    let minute = today.getMinutes()
    let second = today.getSeconds()

    if(hour>=12) hour-=12
    hour = (hour<10) ? "0"+hour : hour
    minute = (minute<10) ? "0"+minute : minute
    second = (second<10) ? "0"+second : second

    var clock = document.getElementById("myClock")
    clock.innerText = `${hour}:${minute}:${second}  ${day}`
    setTimeout(showTime, 1000);
}

var myName = document.getElementById("myName")
myName.innerText = prompt("Lütfen isminizi girin:")

showTime()