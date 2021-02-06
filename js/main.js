$(document).ready(function(){
  $(".skin").click(function(){
    $(".drop1").slideToggle("");
     $(".drop2,.drop3,.drop4,.drop5").hide("fast");
})
  $(".hair-care").click(function(){
      $(".drop3").slideToggle("");
       $(".drop1,.drop2,.drop4,.drop5").hide("fast");
  })
  $(".slimming").click(function(){
    $(".drop2").slideToggle("");
    $(".drop1,.drop3,.drop4,.drop5").hide("fast");
})
$(".Dermat").click(function(){
  $(".drop4").slideToggle("");
  $(".drop1,.drop2,.drop3,.drop5").hide("fast");
  // $("").hide("");
})

$(".permanentMakeup").click(function(){
  $(".drop5").slideToggle("");
  $(".drop1,.drop2,.drop3,.drop4").hide("fast");
  // $("").slideUp("");
})

//------Accordion ----------//


$(".W1").click(function(){
    $(".Accro1").slideToggle(""); 
    $(this).toggleClass("collapse");
    $(".W2,.W3,.W4,.W5,.W6,.W7,.W8,.W9,.W10").removeClass("collapse2").removeClass("collapse3").removeClass("collapse4").removeClass("collapse5")
    .removeClass("collapse6").removeClass("collapse7").removeClass("collapse8").removeClass("collapse9").removeClass("collapse10");
     $(".Accro2,.Accro3,.Accro4,.Accro5,.Accro6,.Accro7,.Accro8,.Accro9,.Accro10").slideUp("");
})
$(".W2").click(function(){
  $(".Accro2").slideToggle(""); 
  $(this).toggleClass("collapse2");
  $(".W1,.W3,.W4,.W5,.W6,.W7,.W8,.W9,.W10").removeClass("collapse").removeClass("collapse3").removeClass("collapse4").removeClass("collapse5")
  .removeClass("collapse6").removeClass("collapse7").removeClass("collapse8").removeClass("collapse9").removeClass("collapse10");

  $(".Accro1,.Accro3,.Accro4,.Accro5,.Accro6,.Accro7,.Accro8,.Accro9,.Accro10").slideUp("");
})
$(".W3").click(function(){
  $(".Accro3").slideToggle(""); 
  $(this).toggleClass("collapse3");
  $(".Accro2,.Accro1,.Accro4,.Accro5,.Accro6,.Accro7,.Accro8,.Accro9,.Accro10").slideUp("");
  $(".W2,.W1,.W4,.W5,.W6,.W7,.W8,.W9,.W10").removeClass("collapse2").removeClass("collapse").removeClass("collapse4").removeClass("collapse5")
  .removeClass("collapse6").removeClass("collapse7").removeClass("collapse8").removeClass("collapse9").removeClass("collapse10");

})
$(".W4").click(function(){
  $(".Accro4").slideToggle(""); 
  $(this).toggleClass("collapse4");
  $(".W2,.W3,.W1,.W5,.W6,.W7,.W8,.W9,.W10").removeClass("collapse2").removeClass("collapse3").removeClass("collapse").removeClass("collapse5")
    .removeClass("collapse6").removeClass("collapse7").removeClass("collapse8").removeClass("collapse9").removeClass("collapse10");

  $(".Accro2,.Accro3,.Accro1,.Accro5,.Accro6,.Accro7,.Accro8,.Accro9,.Accro10").slideUp("");

})
$(".W5").click(function(){
  $(".Accro5").slideToggle(""); 
  $(this).toggleClass("collapse5");
  $(".Accro2,.Accro3,.Accro4,.Accro1,.Accro6,.Accro7,.Accro8,.Accro9,.Accro10").slideUp("");
  $(".W2,.W3,.W4,.W1,.W6,.W7,.W8,.W9,.W10").removeClass("collapse2").removeClass("collapse3").removeClass("collapse4").removeClass("collapse")
    .removeClass("collapse6").removeClass("collapse7").removeClass("collapse8").removeClass("collapse9").removeClass("collapse10");


})
$(".W6").click(function(){
  $(".Accro6").slideToggle(""); 
  $(this).toggleClass("collapse6");
  $(".Accro2,.Accro3,.Accro4,.Accro5,.Accro1,.Accro7,.Accro8,.Accro9,.Accro10").slideUp("");
  $(".W2,.W3,.W4,.W5,.W1,.W7,.W8,.W9,.W10").removeClass("collapse2").removeClass("collapse3").removeClass("collapse4").removeClass("collapse5")
  .removeClass("collapse").removeClass("collapse7").removeClass("collapse8").removeClass("collapse9").removeClass("collapse10");

})
$(".W7").click(function(){
  $(".Accro7").slideToggle(""); 
  $(this).toggleClass("collapse7");
  $(".Accro2,.Accro3,.Accro4,.Accro5,.Accro6,.Accro1,.Accro8,.Accro9,.Accro10").slideUp("");
  $(".W2,.W3,.W4,.W5,.W6,.W1,.W8,.W9,.W10").removeClass("collapse2").removeClass("collapse3").removeClass("collapse4").removeClass("collapse5")
  .removeClass("collapse6").removeClass("collapse").removeClass("collapse8").removeClass("collapse9").removeClass("collapse10");

})
$(".W8").click(function(){
  $(".Accro8").slideToggle(""); 
  $(this).toggleClass("collapse8");
  $(".Accro2,.Accro3,.Accro4,.Accro5,.Accro6,.Accro7,.Accro1,.Accro9,.Accro10").slideUp("");
  $(".W2,.W3,.W4,.W5,.W6,.W7,.W1,.W9,.W10").removeClass("collapse2").removeClass("collapse3").removeClass("collapse4").removeClass("collapse5")
  .removeClass("collapse6").removeClass("collapse7").removeClass("collapse1").removeClass("collapse9").removeClass("collapse10");

})
$(".W9").click(function(){
  $(".Accro9").slideToggle(""); 
  $(this).toggleClass("collapse9");
  $(".Accro2,.Accro3,.Accro4,.Accro5,.Accro6,.Accro7,.Accro8,.Accro1,.Accro10").slideUp("");
  $(".W2,.W3,.W4,.W5,.W6,.W7,.W8,.W1,.W10").removeClass("collapse2").removeClass("collapse3").removeClass("collapse4").removeClass("collapse5")
  .removeClass("collapse6").removeClass("collapse7").removeClass("collapse8").removeClass("collapse").removeClass("collapse10");

})
$(".W10").click(function(){
  $(".Accro10").slideToggle(""); 
  $(this).toggleClass("collapse10");
  $(".Accro2,.Accro3,.Accro4,.Accro5,.Accro6,.Accro7,.Accro8,.Accro9,.Accro1").slideUp("");
  $(".W2,.W3,.W4,.W5,.W6,.W7,.W8,.W9,.W1").removeClass("collapse2").removeClass("collapse3").removeClass("collapse4").removeClass("collapse5")
  .removeClass("collapse6").removeClass("collapse7").removeClass("collapse8").removeClass("collapse9").removeClass("collapse");

})
//----Accordion -----end--here//

$(".heading-btn").click(function(){
  $(".weight_wrp").slideToggle("");
})

// ---end--here--//

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

// $( function() {
//   $( "#resizable" ).resizable();
// } );


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