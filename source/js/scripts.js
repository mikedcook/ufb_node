var today = function() {
	return moment().format("ddd, MMM D YYYY, h:mm:ss a");
};
var setDate = function() {
	document.getElementById('currentDate').innerHTML = today();
};
var getCounter = function() {
	var now = moment().format('X');
	var ce = {
		'parent': document.getElementById('counter'),
		'days': document.getElementById('counterDays'),
		'hours': document.getElementById('counterHours'),
		'minutes': document.getElementById('counterMinutes'),
		'seconds': document.getElementById('counterSeconds')
	};
	var dateTimeUnix = ce.parent.getAttribute("data-unix");
	console.log('dateTimeUnix: ' + dateTimeUnix);
	var difference = dateTimeUnix - now;
	
	ce.seconds.innerHTML	=	Math.floor(difference % 60); difference /= 60;
	ce.minutes.innerHTML	=	Math.floor(difference % 60); difference /= 60;
	ce.hours.innerHTML	=	Math.floor(difference % 24); difference /= 24;
	ce.days.innerHTML	=	Math.floor(difference);
};
var updateDates = function(){
	setDate();
	getCounter();
};
updateDates();
setInterval(updateDates, 1000);