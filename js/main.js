$(document).ready(function(){
  $(".skin").click(function(){
    $(".drop1").slideToggle("");
     $(".drop2,.drop3,.drop4,.drop5").slideUp("fast");
})
  $(".hair-care").click(function(){
      $(".drop3").slideToggle("");
       $(".drop1,.drop2,.drop4,.drop5").slideUp("fast");
  })
  $(".slimming").click(function(){
    $(".drop2").slideToggle("");
    $(".drop1,.drop3,.drop4,.drop5").slideUp("fast");
})
$(".Dermat").click(function(){
  $(".drop4").slideToggle("");
  $(".drop1,.drop2,.drop3,.drop5").slideUp("fast");
  // $("").slideUp("");
})

$(".permanentMakeup").click(function(){
  $(".drop5").slideToggle("");
  $(".drop1,.drop2,.drop3,.drop4").slideUp("fast");
  // $("").slideUp("");
})


$(".heading-btn").click(function(){
    $(".weight_wrp").slideToggle("");
})



$(".list1").hover(function(){
  $(".Sub_Hvr_wrp1").css('display','block'); 
  $(".Sub_Hvr_wrp2,.Sub_Hvr_wrp3,.Sub_Hvr_wrp4,.Sub_Hvr_wrp5.Sub_Hvr_wrp6,.Sub_Hvr_wrp7,.Sub_Hvr_wrp8,.Sub_Hvr_wrp9")
  .css('display','none');
})
$(".list2").hover(function(){
  $(".Sub_Hvr_wrp1,.Sub_Hvr_wrp3,.Sub_Hvr_wrp4,.Sub_Hvr_wrp5,.Sub_Hvr_wrp6,.Sub_Hvr_wrp7,.Sub_Hvr_wrp8,.Sub_Hvr_wrp9").css('display','none');
  $(".Sub_Hvr_wrp2").css('display','block');
})
$(".list3").hover(function(){
  $(".Sub_Hvr_wrp1,.Sub_Hvr_wrp2,.Sub_Hvr_wrp3,.Sub_Hvr_wrp4,.Sub_Hvr_wrp5,.Sub_Hvr_wrp6,.Sub_Hvr_wrp7,.Sub_Hvr_wrp8,.Sub_Hvr_wrp9")
  .css('display','none'); 
  $(".Sub_Hvr_wrp3").css('display','block');
})
$(".list4").hover(function(){
  $(".Sub_Hvr_wrp1,.Sub_Hvr_wrp2,.Sub_Hvr_wrp3,.Sub_Hvr_wrp5,.Sub_Hvr_wrp6,.Sub_Hvr_wrp7,.Sub_Hvr_wrp8,.Sub_Hvr_wrp9")
  .css('display','none'); 
  $(".Sub_Hvr_wrp4").css('display','block');
})
$(".list5").hover(function(){
  $(".Sub_Hvr_wrp1,.Sub_Hvr_wrp2,.Sub_Hvr_wrp3,.Sub_Hvr_wrp4,.Sub_Hvr_wrp6,.Sub_Hvr_wrp7,.Sub_Hvr_wrp8,.Sub_Hvr_wrp9")
  .css('display','none'); 
  $(".Sub_Hvr_wrp5").css('display','block');
})
$(".list6").hover(function(){
  $(".Sub_Hvr_wrp1,.Sub_Hvr_wrp2,.Sub_Hvr_wrp3,.Sub_Hvr_wrp4,.Sub_Hvr_wrp5,.Sub_Hvr_wrp7,.Sub_Hvr_wrp8,.Sub_Hvr_wrp9")
  .css('display','none'); 
  $(".Sub_Hvr_wrp6").css('display','block');
})
$(".list7").hover(function(){
  $(".Sub_Hvr_wrp1,.Sub_Hvr_wrp2,.Sub_Hvr_wrp3,.Sub_Hvr_wrp4,.Sub_Hvr_wrp6,.Sub_Hvr_wrp8,.Sub_Hvr_wrp9")
  .css('display','none'); 
  $(".Sub_Hvr_wrp7").css('display','block');
})
$(".list8").hover(function(){
  $(".Sub_Hvr_wrp1,.Sub_Hvr_wrp2,.Sub_Hvr_wrp3,.Sub_Hvr_wrp4,.Sub_Hvr_wrp6,.Sub_Hvr_wrp7,.Sub_Hvr_wrp9")
  .css('display','none'); 
  $(".Sub_Hvr_wrp8").css('display','block');
})
$(".list9").hover(function(){
  $(".Sub_Hvr_wrp1,.Sub_Hvr_wrp2,.Sub_Hvr_wrp3,.Sub_Hvr_wrp4,.Sub_Hvr_wrp6,.Sub_Hvr_wrp7,.Sub_Hvr_wrp8")
  .css('display','none'); 
  $(".Sub_Hvr_wrp9").css('display','block');
})
  // add & Remove class
  $(".list-cmn01").hover(function () {
    if(!$(this).hasClass('list-active'))
    {    
        $(".list-cmn01.list-active").removeClass("list-active");
        $(this).addClass("list-active");        
    }
  });
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