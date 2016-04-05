/* individuelles JS */

$(document).ready(function () {

  // Code zum Ein- und Ausklappen der Akkordionliste
  $('.activities_left h3').each( function (){
    $(this).parent().toggleClass('suppressed');
      $( this ).click( function (){
        $(this).parent().toggleClass('suppressed');
        var sibs = $(this).parent().siblings().each(
          function () {
        $(this).addClass('suppressed');
        })
      } );
    });

    // schreib deinen Code nach diesem Kommentar

});
