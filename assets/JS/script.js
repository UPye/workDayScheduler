// Displays the date at the top
var date = moment().format('MMM Do YYYY');
$("#currentDay").text(date);

// Continually check for the time, in case task due dates are approaching
var currentTime = parseInt(moment().format("H"));

// Listens for click events on clickable items
$("button").on("click", function(event) {
    var arr = this.id.split("-");
    var calendarEntryId = arr[1];
    var calendarTextElement = '#' + calendarEntryId;
    var calendarText = $(calendarTextElement).val();

    var localStorage = storage;

    // Upload input to localStorage
    storage.setItem.parseInt(calendarEntryId, calendarText);

});

// Check if task is in the past, present, or future
$("textarea").each(function() {
    var currentTime = parseInt(this.id);

        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).removeClass("future");

        // Get data from the localStorage
        if (storage.getItem(calendarTime) != null) {
            $(this).val(storage.gv+etItem(calendarTime));
        }
        if (calendarTime < currentTime) {
            $(this).addClass("past");
        }
        else if (calendarTime === currentTime) {
            $(this).addClass("present");
        }
        else if (calendarTime > currentTime) {
            $(this).addClass("future");
        };

    console.log("textarea");
});
