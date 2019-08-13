// Set Variables for query, beginning array to push user input to, and apiKey
var outdoorSports = ["skiing", "mountain biking", "climbing", "hiking", "water skiing", "skateboarding", "trail running", "kayaking", "surfing"]
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
//Click event handler to loop add the value of the search box to the array. render buttons called at the end to add button to the header. preventDefault is somehow screwing up the function to prevent it from loading gifs correctly
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

$('#button-dump').on('click','.sports-button', function(){
    var gifSearch = $(this).text();
    var query = "https://api.giphy.com/v1/gifs/search?q=" + gifSearch + "&api_key=I4Y1QZR74bOJ4P0whNJVKO0zovcVM9HX&limit=10"
    $.ajax({
        url: query,
        method: "GET"
    }).then(function(r) {
        for (var i = 0; i < r.data.length; i++){
            console.log(r);
            var movingGif = r.data[i].images.fixed_height.url;
            var stillGif = r.data[i].images.fixed_height_still.url;
            var rating = r.data[i].rating;
            var ratingDisp = $('<p>').text('Rated: '+ rating)
            ratingDisp.addClass('text-muted')
            var addGif =$('<img>');
            addGif.addClass('h-100');
            addGif.attr('src', stillGif)
            addGif.attr('data-state', 'still');
            addGif.attr('data-still', stillGif)
            addGif.attr('data-motion', movingGif)
            var newDiv = $('<div>').append(addGif);
            newDiv.append(ratingDisp);
            newDiv.addClass('innerGif col-3 m-1');
            $('.gif-dump').prepend(newDiv);
        }
        $('.innerGif').on('click', function(){
            var state = $(this).attr('data-state');
            if(state ==='still'){
                $(this).attr('src', $(this).attr('data-motion'));
                $(this).attr('data-state', 'motion');
            } else {
                $(this).attr('src', $(this).attr('data-still'));
                $(this).attr('data-state', 'still');
                
            }
        })
    });
}); 
//Start buttons on pause 

