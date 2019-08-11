// Set Variables for query, beginning array to push user input to, and apiKey
var outdoorSports = ["skiing", "mountain biking", "climbing", "hiking"]
var isPlaying = false;
//Function to loop through array and create buttons for each index within the array
function renderButtons(){
    $('#button-dump').empty();
    for (var i = 0; i < outdoorSports.length; i++){
        var a = $('<button>');
        a.addClass('sports-button');
        a.attr('data-name', outdoorSports[i])
        a.text(outdoorSports[i]);
        $('#button-dump').append(a)
        
    }
}
//Click event handler to loop add the value of the search box to the array. render buttons called at the end to add button to the header
$('#newB').on('click', function(event){
    event.preventDefault();
    var addSport = $('#add-sport').val().trim();
    outdoorSports.push(addSport);
    renderButtons();
})
console.log(outdoorSports);

$('.sports-button').on('click', function(event){
    event.preventDefault();
    var gifSearch = $(this).text();
    var query = "https://api.giphy.com/v1/gifs/search?q=" + gifSearch + "&api_key=I4Y1QZR74bOJ4P0whNJVKO0zovcVM9HX&limit=10"
    $.ajax({
        url: query,
        method: "GET"
    }).then(function(r) {
        for (var i = 0; i < r.data.length; i++){
            var eachGifLocation = r.data[i].images.fixed_height.url;
            var rating = r.data[i].rating;
            var addGif =$('<img>').attr("src", eachGifLocation);
            var newDiv = $('<div>').append(addGif);
            newDiv.append($('<p>').text('Rated: '+ rating));
            newDiv.addClass('innerGif', 'col-3');
            $('.gif-dump').prepend(newDiv);
        }
    });
    console.log(r);
}); 

renderButtons();