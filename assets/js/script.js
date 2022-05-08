// Pulls data from API
var today = dayjs();

// Get the DOM ready before any JS functionality is executed
$(document).ready(function() {
    // Grabs todays date to display on the UI
    $("#currentDay").text(today.format('dddd, MMMM D, YYYY'));
    // Event listener for save buttons
    $(".saveButton").on("click", function() {
        var eventText = $(this).siblings(".info").val();
        var time = $(this).parent().attr("id");
        // Send user input to localStorage
        localStorage.setItem(time, eventText);
    })

    //TODO: Add for loop to loop over localStorage and push to specific ID
    // Get task information from localStorage to display on UI
    $("#7 .info").val(localStorage.getItem("7"));
    $("#8 .info").val(localStorage.getItem("8"));
    $("#9 .info").val(localStorage.getItem("9"));
    $("#10 .info").val(localStorage.getItem("10"));
    $("#11 .info").val(localStorage.getItem("11"));
    $("#12 .info").val(localStorage.getItem("12"));
    $("#13 .info").val(localStorage.getItem("13"));
    $("#14 .info").val(localStorage.getItem("14"));
    $("#15 .info").val(localStorage.getItem("15"));
    $("#16 .info").val(localStorage.getItem("16"));
    $("#17 .info").val(localStorage.getItem("17"));
    $("#18 .info").val(localStorage.getItem("18"));

});

// Declared function when hour changes
var hourChange = function() {
    // Pulls hour data from dayjs
    var currentTime = today.hour();
    // each item in time-container will have styling applied based on time that has passed within currentDay
    $(".time-container").each(function(){
        var time = parseInt($(this).attr("id"));
        if (time < currentTime) {
            $(this).addClass("past");
        } else if (time === currentTime) {
            $(this).addClass("present");
            $(this).removeClass("past");
        } else {
            $(this).addClass("future");
            $(this).removeClass("present");
            $(this).removeClass("past");
        }
    })
}

// Call hourChange function
hourChange();



