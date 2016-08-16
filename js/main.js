// 1. When the page opens/loads, the name and professional title should fade in.
// 2. On the navigation bar - when the buttons are clicked, they should smooth scroll accordingly.
// 3. When project tiles are clicked, a lightbox should open up. 


//When doc loads fade in title text.
$(".landingPage--text, .landingPage--jumbo").hide().fadeIn(4800);


// Portfolio and Contact links should smooth scroll to their correct paths

// Navigation bar links  -- "featured work" and "contact" 
// Featured Work button
$("#btn1_portfolio, #btn2_portfolio").click(function(e){
  e.preventDefault();
  $('body, html').animate({scrollTop: $(".content").offset().top}, 1500);    
});

// Contact button
$("#btn3_contact").click(function(e){
  e.preventDefault();
  $('body, html').animate({scrollTop: $(".contactInfo").offset().top}, 1500);    
});

// Bottom page nav  -- "Take me to the top!"
// Home button
$("#btn4_home").click(function(e){
  e.preventDefault();
  $('body, html').animate({scrollTop: $(".landingPage").offset().top}, 1500);    
});  

$("#btn2_home").click(function(e){
  e.preventDefault();
  $('body, html').animate({scrollTop: $(".landingPage").offset().top}, 1500);    
});  btn2_home

// Portfolio images should open in a lightbox

 lightbox.option({
  'positionFromTop': 75,
  'fadeDuration': 200
 });

// $( ".content--text, .content--description" ).hide();

// $(".content--box").mouseenter(function() {
//   $( this ).animate({
//     opacity: 0.1,
//   }, 1500 );
//   $( ".content--text, .content--description" ).fadeIn( 2000 );
// });

// $(".content--box").mouseleave(function() {
//   $( ".content--text, .content--description" ).fadeOut( 1500 );
// });

// Behance button
// $('#behance').click(function(e) {
//   e.preventDefault();
//   window.open("https://behance.net/dthomas");
// });

// Code to open window in a new tab
// Apparel button
// $('#btn2_apparel').click(function(e) {
//   e.preventDefault();
//   window.open("https://www.behance.net/collection/76966367/Apparel-Design-Project-Samples");
// });


  // --------- SITE CREATOR INFO ---------


  // Title: Dana Thomas | Portfolio
  // Description: Online Web and Design Portfolio
  // Author: Dana Thomas
  // Author URL: http://www.dnathoms.io/
  // Tags: user interface, apparel, website