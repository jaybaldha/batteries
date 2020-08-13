$(document).ready(function()
{
    $("#flickrSearch").click(function (event) {
        var searchVal = $("#flickrInput").val();
        var flickrAPI = "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=dd4a16666bdf3c2180b43bec8dd1534a&nojsoncallback=1";
        $.getJSON( flickrAPI, {
          tags: searchVal,
          per_page: 25,
          format: "json"
        },  
          function( data ) {
          $.each( data.photos.photo, function( i, item ) {
            var url = 'https://farm' + item.farm + '.staticflickr.com/' + item.server + '/' + item.id + '_' + item.secret + '.jpg';
           $('#images').append('<img src="' + url + '"/>');
         });
       });
    });
    $("button").click(function(){
    $("#searchBar").css("height", "800px");
     }); 
})