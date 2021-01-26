// Displays the date at the top
var date = moment().format("MMM Do YYYY");
$("#currentDay").text(date);

// Continually check for the time, in case task due dates are approaching
var currentTime = parseInt(moment().format("H"));
var aryTasks = [];


// Listens for click events on clickable items
$("button").on("click", function(event) {

    var calendarEntryId = $(this).attr("data-id");
    var calendarTextElement = "#hour-" + calendarEntryId;
    var calendarText = $(calendarTextElement).val();

    console.log(calendarText);

    var createObject = {
        hour: parseInt(calendarEntryId),
        task: calendarText
    };

    aryTasks.push(createObject);

    // Upload input to localStorage
    localStorage.setItem("taskData", JSON.stringify(aryTasks));
});

var updateInfo = function () {
    date = moment();
    datetime.html(date.format("dddd, MMMM Do YYYY, h:mm:ss a"));
};


// Check if task is in the past, present, or future
$("textarea").each(function() {
    var calendarTime = parseInt(this.id);
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).removeClass("future");

        // Get data from the localStorage
        if (calendarTime >= 9 && calendarTime <= 11){
            $(this).val(calendarTime + "");
        
        }
       if (localStorage.getItem(calendarTime) != null) {
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

aryTasks = JSON.parse(localStorage.getItem("taskData")) || [];

var renderData = function() {
    for(i=0; i < aryTasks.length; i++) {
        let input = $("#hour-" + aryTasks[i].hour);
        input.val(aryTasks[i].task);
    }
};

renderData();