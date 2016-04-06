/* individuelles JS */

$(document).ready(function () {

  // Code zum Ein- und Ausklappen der Akkordionliste
  $('.activities_left h3').each( function (){

    // start by collapsing all by default
    $(this).parent().addClass('suppressed');
    $(this).attr('aria-expanded','false');
    $(this).parent().children('div').attr('aria-hidden','true');

    // make headers clickable to expand/hide content
    $( this ).click( function (){
      $(this).parent().toggleClass('suppressed');

      if(!$(this).parent().hasClass('suppressed')){
        $(this).attr('aria-expanded','true')
        $(this).parent().children('div').attr('aria-hidden','false');
      } else {
        $(this).attr('aria-expanded','false');
        $(this).parent().children('div').attr('aria-hidden','true');
      }

      var sibs = $(this).parent().siblings().each(
        function () {
          $(this).children('h3').attr('aria-expanded','false');
          $(this).children('div').attr('aria-hidden','true');
          $(this).addClass('suppressed');
        })
      } );
    });
});
