
// document.querySelector(".navbar-brand").innerHTML = "Yazan ";
// document.querySelector(".list").lastElementChild.innerHTML = "Yazan Al Sedih";


$(document).ready(function() {
    $(".contactMeBtn").click(function() {
        $('html, body').animate({
            scrollTop: $("#footer").offset().top
        }, 1000);
    });
});


$(document).ready(function() {
    $(".aboutMeBtn").click(function() {
        $('html, body').animate({
            scrollTop: $("#about-me").offset().top
        }, 1000); 
    });
});