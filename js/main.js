// //Hide the title text
// $(".intro .welcome").hide();
// //Reveal text when mouse pointer hovers
// $(".intro").hover(function(){
//   $(this).children().fadeIn(4400);
// });

//When doc loads fade in title text.
$(".intro .welcome").hide().fadeIn(4400);

//Click link and smooth scroll to portfolio tiles
$("li.page_list").click(function() {
  $("#work").animate(function(){
    'scrollTop()'
  });
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


  // --------- SITE CREATOR INFO ---------


  // Title: Dana Thomas | Portfolio
  // Description: Online Web and Design Portfolio
  // Author: Dana Thomas
  // Author URL: http://www.dnathoms.io/
  // Tags: user interface, apparel, website