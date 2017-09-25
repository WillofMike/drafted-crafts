$(".wood-container").click(function () {
  if ( $( "#wood3" ).is( ":hidden" ) ) {
    $( "#wood3" ).slideDown( "slow" );

  } else {
    $( "#wood3" ).hide('#wood');

  }
});
$(".laser-container").click(function () {
  if ( $( "#laser3" ).is( ":hidden" ) ) {
    $( "#laser3" ).slideDown( "slow" );

  } else {
    $( "#laser3" ).hide('#laser');

  }
});
$(".craft-container").click(function () {
  if ( $( "#craft3" ).is( ":hidden" ) ) {
    $( "#craft3" ).slideDown( "slow" );

  } else {
    $( "#craft3" ).hide('#craft');

  }
});
$("#view-wood").click(function() {
    $('html, body').animate({
        scrollTop: $(".wood-container").offset().top
    }, 1000);
});
$("#view-laser").click(function() {
    $('html, body').animate({
        scrollTop: $(".laser-container").offset().top
    }, 1000);
});
$("#view-craft").click(function() {
    $('html, body').animate({
        scrollTop: $(".craft-container").offset().top
    }, 1000);
});
$(".header").click(function() {
    $('html, body').animate({
        scrollTop: $("#nav").offset().top
    }, 1000);
});
$("#laser-small").click(function() {
    $('html, body').animate({
        scrollTop: $("#nav").offset().top
    }, 1000);
});
$("#craft-small").click(function() {
    $('html, body').animate({
        scrollTop: $("#nav").offset().top
    }, 1000);
});
