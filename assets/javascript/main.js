// Set Variables for query, beginning array to push user input to, and apiKey
var outdoorSports =["skiing", "mountain biking", "climbing", "hiking"]
var query = "https://api.giphy.com/v1/gifs/search?q=" + userSearch + "&api_key=I4Y1QZR74bOJ4P0whNJVKO0zovcVM9HX&limit=10"
var userSearch = $("#gif-input").val();
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
$.ajax({
    url: query,
    method: "GET"
}).then(function(r) {
    console.log(r)

})
