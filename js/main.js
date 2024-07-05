// start header section 
$(".open-icon").click(function(){
    $(".open").css("left","0");
})
$(".close").click(function(){
    $(".open").css("left","-270px");
})
// end header section 
$(".duration-title").click(function(){
    $(this).next().slideToggle( );
    $(".duration-info").not($(this).next()).slideUp( ); // ay div msh next ll title eli na 3amla 3lih select    
})
// end duration section 
// start Details section
let countDownDate = new Date('October 25, 2025 03:24:00').getTime();
let counter = setInterval(() => {
    let dateNow = new Date().getTime();
    let dateDiff = countDownDate - dateNow;
    let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
    let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);
    document.getElementsByClassName("days")[0].innerHTML = days + '  D';
    document.getElementsByClassName("hours")[0].innerHTML = hours + '  H';
    document.getElementsByClassName("minutes")[0].innerHTML = minutes + '  m';
    document.getElementsByClassName("secounds")[0].innerHTML = seconds + '  s';
    if (dateDiff < 0) {
        clearInterval(counter);
        console.log("Countdown finished!");
    }
}, 1000);
 // end Details section
// start contact section
$(document).ready(function() {
var limit = 100;
$('.counter2 textarea').on('input', function() {
    var text = $(this).val();
    var count = limit - text.length;
    
    if (count >= 0) {
    $('#word').text(count);
    }
});
});
// end contact section