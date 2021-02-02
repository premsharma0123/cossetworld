$(document).ready(function(){
  $(".hair-care").click(function(){
      $(".drop3").slideToggle("");
      // $(".drop2").slide("");
  })
  $(".slimming").click(function(){
    $(".drop2").slideToggle("");
    // $(".drop3").slideDown("");
})
$(".heading-btn").click(function(){
    $(".weight_wrp").slideToggle("");
})
// $(".Banner_Wrapper,header").click(function(){
//   $(".drop_down").slideUp("");
// })
// $(".Apt_heading h2").click(function(){
//   $(".Form_wrp").slideToggle("");
// })

})

//  -----mouse---movement-----

  //     $('.Treatment_Wrapper ').mousemove(function(e) {
  //       var amountMovedX = (e.pageX * -0.53 / 6);
  //       var amountMovedY = (e.pageY * -0.53 / 6);
  //       $('.itemMove').css('left', amountMovedX + 'px');
  //       $('.itemMove').css('top', amountMovedY + 'px');
  //   });

//bar 

jQuery('.main-bar').click(function(e) {
  jQuery(this).toggleClass('activefile');
  e.preventDefault();
  jQuery('.myHeader').slideToggle();
});

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