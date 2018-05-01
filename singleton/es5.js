var Logging = (function(){
	var logger;

	function Log(message) {
		return console.log(message)
	}

	function createLogger(){
		return {
			info: Log
		}
	}

	return {
		getLogger: function(){
			if(!logger){
				logger = createLogger();
			} 

			return logger;
		}
	}
})();

module.exports = Logging