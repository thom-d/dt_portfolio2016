// 1. When the page opens/loads, the name and professional title should fade in.
// 2. On the navigation bar - when the buttons are clicked, they should smooth scroll accordingly.
// 3. All link or buttons when clicked should open out into a new tab.
// 4. When project tiles are clicked, a lightbox should open up. 


//When doc loads fade in title text.
$(".intro .welcome").hide().fadeIn(4400);


// Portfolio and Contact links should smooth scroll to their correct sections

// Navigation bar links  -- "portfolio" and "contact" 
// Portfolio button
$("#btn1").click(function(){
  event.preventDefault();
  $('body, html').animate({scrollTop: $(".contact").offset().top}, 1500);    
});

// Contact button
$("#btn3").click(function(){
  event.preventDefault();
  $('body, html').animate({scrollTop: $(".contact").offset().top}, 1500);    
});

// Bottom page links  -- "home" and "portfolio"
// Home button
$("#btn4").click(function(){
  event.preventDefault();
  $('body, html').animate({scrollTop: $(".nav_bar").offset().top}, 1500);    
});

// Portfolio button
$("#btn5").click(function(){
  event.preventDefault();
  $('body, html').animate({scrollTop: $(".sample_work").offset().top}, 1500);    
});


// Links should open in new tab  -- "apparel" "behance" "linkedin" github"

// Apparel button
$('#btn2').click(function() {
  event.preventDefault();
  window.open("https://www.behance.net/collection/76966367/Apparel-Design-Project-Samples");
});

// Behance button
$('#behance').click(function() {
  event.preventDefault();
  window.open("https://behance.net/dthomas");
});

// LinkedIn button
$('#linked').click(function(e) {
  e.preventDefault();
  window.open("https://www.linkedin.com/in/dthomas014");
});

// Github button
$('#github').click(function() {
  event.preventDefault();
  window.open("https://github.com/thom-d?tab=repositories");
});


// Portfolio images should open in a lightbox

 lightbox.option({
  'positionFromTop': 75,
  'fadeDuration': 200
 });


  // --------- SITE CREATOR INFO ---------


  // Title: Dana Thomas | Portfolio
  // Description: Online Web and Design Portfolio
  // Author: Dana Thomas
  // Author URL: http://www.dnathoms.io/
  // Tags: user interface, apparel, website