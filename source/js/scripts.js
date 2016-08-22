var today = function() {
	return moment().format("ddd, MMM D YYYY, h:mm:ss a");
};
var setDate = function() {
	document.getElementById('currentDate').innerHTML = today();
};
setDate();


// check if current day is in daylight savings
/*Date.prototype.stdTimezoneOffset = function() {
	var jan = new Date(this.getFullYear(), 0, 1);
	var jul = new Date(this.getFullYear(), 6, 1);
	return Math.max(jan.getTimezoneOffset(), jul.getTimezoneOffset());
};
Date.prototype.isDaylightSavings = function() {
	return this.getTimezoneOffset() < this.stdTimezoneOffset();
};

var getTwoDigit = function(time) {
	return time < 10 ? '0' + time : time;
};
var convert24to12 = function(time) {
	return time <= 0 ? 24 + time : time;
};
var getAmPm = function(hour) {
	var isPm = (hour > 11 && hour < 24);
	return isPm ? 'pm' : 'am';
};
var set12Hour = function(hour) {
	return hour > 12 ? hour - 12 : hour;
};
var today = function() {
	var now = new Date();
	var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	var monthNamesShort = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

	var dd = now.getDate();
	var mm = monthNamesShort[now.getMonth()-1];
	var yyyy = now.getFullYear();
	var hr = convert24to12(now.getUTCHours() - (now.isDaylightSavings ? 6 : 7));
	var min = getTwoDigit(now.getMinutes());
	var sec = getTwoDigit(now.getSeconds());
	var time = set12Hour(hr) + ':' + min + ':' + sec + ' ' + getAmPm(hr) + ' M' + (now.isDaylightSavings ? 'D' : 'S') + 'T';

	return(mm + ' ' + dd + ', ' + yyyy + ' ' + time);
};
var setDate = function() {
	document.getElementById('currentDate').innerHTML = today();
};*/
// setDate();