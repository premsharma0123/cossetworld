$(document).ready(function(){
    $(".hair-care").click(function(){
        $(".drop_down").slideToggle("slow");
    })
})

  //  -----mouse---movement-----

    //     $('.Treatment_Wrapper ').mousemove(function(e) {
    //       var amountMovedX = (e.pageX * -0.53 / 6);
    //       var amountMovedY = (e.pageY * -0.53 / 6);
    //       $('.itemMove').css('left', amountMovedX + 'px');
    //       $('.itemMove').css('top', amountMovedY + 'px');
    //   });


// ----slider-----section ---//

    $('.slider1').owlCarousel({
    loop: true,
    margin: 0,
    autoplay: true,
    nav: true,
    autoplayTimeout: 4000,
    smartSpeed: 1500,
    singleItem: true,
    animateIn: 'fadeIn',
    animateOut: 'fadeOut',
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
     }
});