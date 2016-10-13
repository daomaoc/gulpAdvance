var date = require('../common/utils/dateUtils.js');
function Detail(){}
	


Detail.prototype = {
	constructor:Detail,
	say:function(msg){
		console.log(date.getDate());
		return 'show detail' +msg;
	}
}

module.exports = Detail;