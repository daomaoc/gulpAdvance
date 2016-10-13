var DateUtil = {
	getDate:function(){
		return new Date().toLocaleDateString();
	}
}

module.exports = DateUtil;

console.log("dateutil is required");