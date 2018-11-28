//@prepros-prepend ../../node_modules/jquery/dist/jquery.js
//@prepros-prepend ../../node_modules/jquery-ui-dist/jquery-ui.js

$(document).ready(function() {
var key = 'api_key=13f6a6b30635eaee1ec0a788dc675c17';
var ImgPath = "//image.tmdb.org/t/p/w300";

$(function(){
  $( "#valeur" ).autocomplete({
    source: function(request, response) {
      $.getJSON("http://api.themoviedb.org/3/search/tv?" + key , { query: request.term }, function(tvshow){
            response(tvshow.results.slice(0, 4));
       });
    },
  minLength:	2,
  delay:		500,
  focus: 		function( event, tvshow ) {
          $(this).val(tvshow.item.name);
          return false;
        },
  select: 	function( event, tvshow) {
    var thisTv = tvshow.item;
    html= "<div class='outer'><div class='inner'><span class='left'> <img  width='45' height='68' src=" + ImgPath  + thisTv.poster_path + "><\/span><span class='right'><strong>&nbsp; &nbsp; " + thisTv.name;

    $('#response').html(html);
    var link = "http://api.themoviedb.org/3/tv/" +  thisTv.id;
    var tmdb_id;
        $.ajax({
        type: 'GET',
        url: link + tmdb_id + "?"+key,
        async: false,
        jsonpCallback: 'testing',
        contentType: 'application/json',
        dataType: 'jsonp',
        success: function(json) {
          console.dir(json);
            document.getElementById('output').innerHTML += "<li><img src='https://image.tmdb.org/t/p/w185"+ json.poster_path +"'><p id='close'>X</p></li>";
            $('body').css('background-image', 'url(http://image.tmdb.org/t/p/original/'+ json.backdrop_path+')');
            $('.slider').addClass("hide-bg");
            var suppr = document.getElementById('close');
            var parent = suppr.parentNode;
            var parentul = parent.parentNode;
            suppr.addEventListener("click", supression, false);
            function supression(){
               parentul.removeChild(parent);
            }

        },
        error: function(e) {
          console.log(e.message);
        }
    });
    }
}).data("uiAutocomplete")._renderItem = function( ul, tvshow ) {
var inner_html ="<a>" +  tvshow.name + "</a>";
return $( "<li></li>" )
  .data( "item.autocomplete", tvshow )
  .append(inner_html)
  .appendTo( ul );
};
});
});
