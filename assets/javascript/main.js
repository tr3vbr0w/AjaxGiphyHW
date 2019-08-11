// Set Variables for query, beginning array to push user input to, and apiKey
var outdoorSports =["skiing", "mountain biking", "climbing", "hiking"]
var addSport = $("#add-sport").val();
// var gifSearch = $(this.on('click'){}).val()
function renderButtons(){
    $('#button-dump').empty();
    for (var i = 0; i < outdoorSports.length; i++){
        var a = $('<button>');
        a.addClass('sports-button');
        a.attr('data-name', outdoorSports[i])
        a.text(outdoorSports[i]);
        $('#button-dump').append(a)
        console.log()
    }
}

renderButtons();

$('.sports-button').on('click', function(){
    var gifSearch = $(this).text();
    var query = "https://api.giphy.com/v1/gifs/search?q=" + gifSearch + "&api_key=I4Y1QZR74bOJ4P0whNJVKO0zovcVM9HX&limit=10"
    $.ajax({
        url: query,
        method: "GET"
     }).then(function(r) {
         for (var i = 0; i < r.data.length; i++){
            var eachGifLocation = r.data[i].images.fixed_height.url; 
            // console.log(eachGif);
            var addGif =$('<img>').attr("src", eachGifLocation);
            $('.gif-dump').append(addGif);
        }
     });
 }); 