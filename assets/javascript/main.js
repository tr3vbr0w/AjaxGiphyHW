// Set Variables for query, beginning array to push user input to, and apiKey
var outdoorSports = ["skiing", "mountain biking", "climbing", "hiking"]
var isPlaying = false;
var addSport = $("#add-sport").val();
//Function to loop through array and create buttons for each index within the array
function renderButtons(){
    $('#button-dump').empty();
    for (var i = 0; i < outdoorSports.length; i++){
        var a = $('<button>');
        a.addClass('sports-button btn-danger m-1');
        a.attr('data-name', outdoorSports[i])
        a.text(outdoorSports[i]);
        $('#button-dump').append(a)
    }
}
renderButtons();
//Click event handler to loop add the value of the search box to the array. render buttons called at the end to add button to the header
$('#newB').on('click', function(event){
    event.preventDefault();
    var addSport = $('#add-sport').val().trim();
    outdoorSports.push(addSport);
    renderButtons();
})
console.log(outdoorSports);

//Click event for when you click button. Sends ajax query for the value of the button (GifSearch), and reaches out to
//giphy, printing the first ten results from each search. Each result goes to a new div, containing the gifs rating and the gif. The 10 divs are then added 
//to a new div for each button clicked. That parent div is then prepended to the top of the page.

$('.sports-button').on('click', function(){
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
            newDiv.addClass('innerGif col-4 h-25 m-1');
            $('.gif-dump').prepend(newDiv);
        }
    });
}); 
//Call render buttons function
