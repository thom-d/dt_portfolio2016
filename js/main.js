// Links should open in new tab
// Links should smooth scroll to the proper area
// Portfolio images should open in a lightbox

// //Hide the title text
// $(".intro .welcome").hide();
// //Reveal text when mouse pointer hovers
// $(".intro").hover(function(){
//   $(this).children().fadeIn(4400);
// });

//When doc loads fade in title text.
$(".intro .welcome").hide().fadeIn(4400);

// Portfolio and Contact links should smooth scroll to their correct sections

// Navigation bar links  -- "portfolio" and "contact" 
$("#btn1").click(function(){
  event.preventDefault();
  $('html, body').animate({scrollTop: $(".sample_work").offset().top}, 1500);    
});

$("#btn3").click(function(){
  event.preventDefault();
  $('html, body').animate({scrollTop: $(".contact").offset().top}, 1500);    
});


// var $overlay = $('<div id="overlay"></div>');
// // var $image = $("<img>");

// $overlay.append($image);
// // Add an overlay
// // An image
// // A caption
// $("body").append($overlay);

// //1. Capture the click event on a link to an image
// $(".imageGallery a").click(function(event) {
//   event.preventDefault();
//   var imageLocation = $(this).attr("href");
  
//   $image.attr("src", imageLocation);
  
//   //Show the overlay
//   $overlay.show();
//   //Click to hide overlay
//   $($overlay).click(function() {
//     $(this).fadeOut("slow");
//   });
// });

//  lightbox.option({
//       'positionFromTop': 75,
//       'fadeDuration': 200
//     })

// $(".question").click(function() {
// 	$(this).next().slideToggle("slow");
// 	$(this).children().toggleClass("collapse");
// 	$("#a2").animate({ opacity: 0.1 }, 1500);
// });



  // --------- SITE CREATOR INFO ---------


  // Title: Dana Thomas | Portfolio
  // Description: Online Web and Design Portfolio
  // Author: Dana Thomas
  // Author URL: http://www.dnathoms.io/
  // Tags: user interface, apparel, website