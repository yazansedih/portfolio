
var calcScrollValue = () => {
    $(window).scroll(function() {
        var scrollProgress = $(".progress-toTop");
        var progressValue = $(".progress-value");

        var position = $(this).scrollTop();
        var calcHeight = $(document).height() - $(window).height();

        var scrollValue = Math.round((position * 100) / calcHeight);

        if (position > 100) {
            scrollProgress.css("display", "grid"); 
        } else {
            scrollProgress.css("display", "none"); 
        }

        scrollProgress.css('background-image', `conic-gradient(#03cc65 ${scrollValue}%, #d7d7d7 ${scrollValue}%)`);        
    });
};

$("#toTop").click(function() {
    $("html, body").animate({scrollTop: 0}, 1000);
 });

 $("#ver-navbar").click(function() {
    $("html, body").animate({screenLeft: 200}, 0);
 });


 calcScrollValue();