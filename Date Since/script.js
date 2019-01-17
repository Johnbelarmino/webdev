// Create a date object
var start = new Date();
function startTime(){
	var d = new Date();

	// Get the date components 
	var day = d.getDate();
	var month = d.getMonth();
	var year = d.getFullYear();
	var months= ["January", "February", "March", 
		"April", "May", "June", "July", "August", 
		"September", "October", "November", "December"]

	var hours = d.getHours();
	var minutes = checkTime(d.getMinutes());
	var seconds = checkTime(d.getSeconds());

	var current_date = document.getElementById("date");
	current_date.innerHTML = months[month] + " " + day + ", " + year;

	var current_time = document.getElementById("time");
	current_time.innerHTML = hours + ":" + minutes + ":" + seconds + " PST";

	setTimeout(startTime, 500);
}

// Adds zero in front of time < 10
function checkTime(time){
	if(time<10)
		time = "0"+time;
	return time;
}

function calculate(){
	var uYear = document.getElementById("user_year").value;
	var uMonth = document.getElementById("user_month").value;
	var uDay = document.getElementById("user_day").value;

	// Create a date object from user input
	var end = new Date(uYear, uMonth, uDay);

	var container = document.getElementById("result_container");
	var results_label = document.getElementById("result_label");

	var months_p = document.getElementById("month");
	var weeks_p = document.getElementById("weeks");
	var days_p = document.getElementById("days");
	var hours_p = document.getElementById("hours");
	var minutes_p = document.getElementById("minutes");

	var timeDiff = end - start; // Get time difference in milliseconds
	timeDiff /= -1000; // Get rid of milliseconds

	// Calculate the different time components
	var seconds = Math.floor(timeDiff);
	var minutes = Math.floor((seconds)/60);
	var hours = Math.floor((minutes)/60);
	var days = Math.floor((hours)/24);
	var weeks = Math.floor(days/7);
	var months = Math.floor(weeks/4.34524);

	/* Grammar fixes
	var yearsText = " Years";
	var monthsText = " Months";
	var weekText = " Weeks";
	var dayText = " Days";
	var hourText = " Hours";
	var minutesText = " Minutes";

	// Implementing the grammar fixes
	if(years == 1){
		yearsText = " Year";
	} if(months == 1){
		monthsText = " Month";
	} if(weeks == 1){
		weekText = " Week";
	} if(days == 1){
		dayText = " Day";
	} if (hours == 1){
		hourText = " Hour";
	} if (minutes == 1){
		dayText = " Minute";
	}
	*/

	// Print out the result if the boxes are actually filled
	if(uYear != "" && uMonth != "" && uDay != ""){
		results_label.innerHTML = "How many months, weeks, days, hours and minutes?";

		months_p.innerHTML = months;
		hours_p.innerHTML = hours;
		days_p.innerHTML = days;
		weeks_p.innerHTML = weeks;
		minutes_p.innerHTML = minutes;

		container.style.visibility = "visible";
	} else {
		results_label.innerHTML = "Fill in all of the boxes";
		//container.style.visibility = "visible";
	}
}

window.onload = startTime;
