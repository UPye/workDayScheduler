// Displays the date at the top
var date = moment().format("MMM Do YYYY");
$("#currentDay").text(date);

// Continually check for the time, in case task due dates are approaching
var currentTime = parseInt(moment().format("H"));
var array = [
    {
        hour: 9,
        task: "wake up"
    },
    {
        hour: 10,
        task: "shower, brush teeth, and wash face"
    },
    {
        hour: 11,
        task: "Eat breakfast and leave for work"
    },
    {
        hour: 12,
        task: "go to the gym on my lunch break"
    }
]
// Listens for click events on clickable items
$("button").on("click", function(event) {

    var calendarEntryId = $(this).attr("data-id");
    var calendarTextElement = "#hour-" + calendarEntryId;
    var calendarText = $(calendarTextElement).val();

    var createObject = {
        hour: parseInt(calendarEntryId),
        task: calendarText
    };

    array.push(createObject);

    // Upload input to localStorage
    localStorage.setItem("taskData", JSON.stringify(array));
});

var updateInfo = function () {
    date = moment();
    datetime.html(date.format("dddd, MMMM Do YYYY, h:mm:ss a"));
};

/*
// Check if task is in the past, present, or future
$("textarea").each(function() {
    var calendarTime= parseInt(this.id);

        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).removeClass("future");

        // Get data from the localStorage
        if (localStorage.getItem(calendarTime) != null) {
            $(this).val(localStorage.getItem(calendarTime));
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
});
*/
array = JSON.parse(localStorage.getItem("taskData"));