 $(document).ready(function(){


$(".top-btn").click(function(){
    $("html, body").animate({
        "scrollTop" : "0"
    }, 3000)
});


$(window).scroll(function(){
    var scrollValue = $(this).scrollTop();

    if(scrollValue >= 100){
        $(".top-btn").fadeIn();
    }else {
        $(".top-btn").fadeOut();
    };
});



 });
 //end js