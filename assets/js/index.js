var countdownDate = new Date("April 28, 2023 00:01:00").getTime();
var countdown = setInterval(function() {
    var now = new Date().getTime();
    var timeleft = countdownDate - now;
        
    var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);
    document.getElementById("days").innerHTML = '<span class="countname">days</span><br><span class="count">'+days+'</span>'
    document.getElementById("hours").innerHTML = '<span class="countname">hours</span><br><span class="count">'+hours+'</span>'
    document.getElementById("minutes").innerHTML = '<span class="countname">minutes</span><br><span class="count">'+minutes+'</span>'
    document.getElementById("seconds").innerHTML = '<span class="countname">seconds</span><br><span class="count">'+seconds+'</span>'
    /**
     * console log input
     * console.log(`Days: ${days}, Hours: ${hours}, Minutes: ${minutes}, Seconds: ${seconds}`)
     */
}, 1000)
    