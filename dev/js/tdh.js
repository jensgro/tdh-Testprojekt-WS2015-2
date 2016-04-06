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



//Tablesort


/*!
 * tablesort v4.0.1 (2016-03-30)
 * http://tristen.ca/tablesort/demo/
 * Copyright (c) 2016 ; Licensed MIT
 
*/!function(){function a(b,c){if(!(this instanceof a))return new a(b,c);if(!b||"TABLE"!==b.tagName)throw new Error("Element must be a table");this.init(b,c||{})}var b=[],c=function(a){var b;return window.CustomEvent&&"function"==typeof window.CustomEvent?b=new CustomEvent(a):(b=document.createEvent("CustomEvent"),b.initCustomEvent(a,!1,!1,void 0)),b},d=function(a){return a.getAttribute("data-sort")||a.textContent||a.innerText||""},e=function(a,b){return a=a.toLowerCase(),b=b.toLowerCase(),a===b?0:b>a?1:-1},f=function(a,b){return function(c,d){var e=a(c.td,d.td);return 0===e?b?d.index-c.index:c.index-d.index:e}};a.extend=function(a,c,d){if("function"!=typeof c||"function"!=typeof d)throw new Error("Pattern and sort must be a function");b.push({name:a,pattern:c,sort:d})},a.prototype={init:function(a,b){var c,d,e,f,g=this;if(g.table=a,g.thead=!1,g.options=b,a.rows&&a.rows.length>0&&(a.tHead&&a.tHead.rows.length>0?(c=a.tHead.rows[a.tHead.rows.length-1],g.thead=!0):c=a.rows[0]),c){var h=function(){g.current&&g.current!==this&&(g.current.classList.remove("sort-up"),g.current.classList.remove("sort-down")),g.current=this,g.sortTable(this)};for(e=0;e<c.cells.length;e++)f=c.cells[e],f.classList.contains("no-sort")||(f.classList.add("sort-header"),f.tabindex=0,f.addEventListener("click",h,!1),f.classList.contains("sort-default")&&(d=f));d&&(g.current=d,g.sortTable(d))}},sortTable:function(a,g){var h,i=this,j=a.cellIndex,k=e,l="",m=[],n=i.thead?0:1,o=a.getAttribute("data-sort-method"),p=a.getAttribute("data-sort-order");if(i.table.dispatchEvent(c("beforeSort")),g?h=a.classList.contains("sort-up")?"sort-up":"sort-down":(h=a.classList.contains("sort-up")?"sort-down":a.classList.contains("sort-down")?"sort-up":"asc"===p?"sort-down":"desc"===p?"sort-up":i.options.descending?"sort-up":"sort-down",a.classList.remove("sort-down"===h?"sort-up":"sort-down"),a.classList.add(h)),!(i.table.rows.length<2)){if(!o){for(;m.length<3&&n<i.table.tBodies[0].rows.length;)l=d(i.table.tBodies[0].rows[n].cells[j]),l=l.trim(),l.length>0&&m.push(l),n++;if(!m)return}for(n=0;n<b.length;n++)if(l=b[n],o){if(l.name===o){k=l.sort;break}}else if(m.every(l.pattern)){k=l.sort;break}for(i.col=j,n=0;n<i.table.tBodies.length;n++){var q,r=[],s={},t=0,u=0;if(!(i.table.tBodies[n].rows.length<2)){for(q=0;q<i.table.tBodies[n].rows.length;q++)l=i.table.tBodies[n].rows[q],l.classList.contains("no-sort")?s[t]=l:r.push({tr:l,td:d(l.cells[i.col]),index:t}),t++;for("sort-down"===h?(r.sort(f(k,!0)),r.reverse()):r.sort(f(k,!1)),q=0;t>q;q++)s[q]?(l=s[q],u++):l=r[q-u].tr,i.table.tBodies[n].appendChild(l)}}i.table.dispatchEvent(c("afterSort"))}},refresh:function(){void 0!==this.current&&this.sortTable(this.current,!0)}},"undefined"!=typeof module&&module.exports?module.exports=a:window.Tablesort=a}();
new Tablesort(document.getElementById('table-id'));