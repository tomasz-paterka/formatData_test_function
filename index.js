const formatDate = (timeInSeconds) => {
	if (!timeInSeconds) timeInSeconds = 0;
	
	if (timeInSeconds < 60 ) {
		return `${timeInSeconds}s`;
	}
	
	var hours = Math.floor(timeInSeconds / 3600);
	var minutes = Math.floor((timeInSeconds % 3600) / 60);
	var seconds = Math.floor(timeInSeconds % 60);
	
	return [
		hours ? hours + 'h ' : '',
		minutes ? minutes + 'm ' : '',
		seconds ? seconds + 's ' : ''
	].join('').trim();
}

module.exports = formatDate;
