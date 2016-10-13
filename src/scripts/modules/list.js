var date = require('../common/utils/dateUtils.js');
function say(msg){
	console.log(date.getDate());
	return 'say list' +msg;
}

module.exports = say;