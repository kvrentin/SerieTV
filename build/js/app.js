//@prepros-prepend ../../node_modules/jquery/dist/jquery.js
//@prepros-prepend ../../node_modules/jquery-ui-dist/jquery-ui.js


$(document).ready(function() {
  var key = 'api_key=13f6a6b30635eaee1ec0a788dc675c17';
  $( "#valeur" ).autocomplete({
    minLength:	2,
    delay:		500,
    source: function(request, response) {
      $.getJSON("http://api.themoviedb.org/3/search/tv?" + key , { query: request.term }, function(tvshow){
        response(tvshow.results.slice(0, 3));
      });
    },

    focus: function( event, tvshow ) {
      $('#valeur').val(tvshow.item.name);
      return false;
    },

    select: function( event, tvshow) {
        event.preventDefault();
        var thisTv = tvshow.item;
        html= "";
        $("#valeur").val(tvshow.item.name);
        id=tvshow.item.id;
        name=tvshow.item.name;
        nom = name.replace(/\s/g, '');
        resume=tvshow.item.overview;
        poster=tvshow.item.poster_path;
        bg=tvshow.item.backdrop_path;
    }
    }).data("uiAutocomplete")._renderItem = function( ul, tvshow ){
    var inner_html ="<a>" +  tvshow.name + "</a>";
    return $( "<li></li>" )
      .data( "item.autocomplete", tvshow )
      .append(inner_html)
      .appendTo( ul );
    };

    $("#output").on("click", ".btn-close", function() {
      return $(this).parent().addClass("remove"), setTimeout(function() {
        $(".remove").remove()
        }, 200)
    });

    $('#ajouter').click(function (e) {
      e.preventDefault();
      document.getElementById('output').innerHTML += "<li><a class='btn-close' href='#'><img src='img/cancel.png'></a><a class='btn-info' id='"+nom+"' href='#"+id+"'><img src='img/info.png'></a><img src='https://image.tmdb.org/t/p/w185"+ poster +"'/><div class='about hidden'><a class='close-about' href='#'>X</a><p>"+name+"</p><p>"+resume+"</div></li>";
      $('body').css('background-image', 'url(http://image.tmdb.org/t/p/original/'+ bg+')');
      $('.slider').addClass("hide-bg");
      $('#valeur').val('Rechercher une série');

      $('.btn-info').click(function () {
          $(this).siblings('.about').removeClass('hidden');
      });

      $('.close-about').click(function () {
          $(this).parent().addClass('hidden');
      });

    });

    $("#valeur").on("click", function() {
        $(this).val("");
    });​

});
