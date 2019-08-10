// Set Variables for query, beginning array to push user input to, and apiKey
var outdoorSports =["skiing", "mountain biking", "climbing", "hiking"]
var query = "https://api.giphy.com/v1/gifs/search?q=" + "birds" + "&api_key=I4Y1QZR74bOJ4P0whNJVKO0zovcVM9HX&limit=20"
var userSearch = $("#gif-input").val();
function rederButtons(){
    
}
$.ajax({
    url: query,
    method: "GET"
}).then(function(r) {
    
})
