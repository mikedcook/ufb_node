var timezone = 'America/Denver';
var setDate = function() {
	var currentDate = moment().tz(timezone).format("ddd, MMM D, h:mm:ss a");
	document.getElementById('currentDate').innerHTML = currentDate;
};
var getCounter = function() {
	var now = moment.tz(timezone).format('X');
	var ce = {
		'parent': document.getElementById('counter'),
		'days': document.getElementById('counterDays'),
		'hours': document.getElementById('counterHours'),
		'minutes': document.getElementById('counterMinutes'),
		'seconds': document.getElementById('counterSeconds')
	};
	var dateTimeUnix = ce.parent.getAttribute("data-unix");
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