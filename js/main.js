// Portfolio images should open in a lightbox

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

// Bottom page links  -- "home" and "portfolio"
$("#btn4").click(function(){
  event.preventDefault();
  $('html, body').animate({scrollTop: $(".nav_bar").offset().top}, 1500);    
});

$("#btn5").click(function(){
  event.preventDefault();
  $('html, body').animate({scrollTop: $(".sample_work").offset().top}, 1500);    
});


// Links should open in new tab  -- "apparel" "behance" "linkedin" github"

// "Apparel" link out to behance project page
$('#btn2').click(function() {
  event.preventDefault();
  window.open("https://www.behance.net/collection/76966367/Apparel-Design-Project-Samples");
});

// "Behance" link out to behance page


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